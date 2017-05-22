import Express from 'express';
import AppConfig from './AppConfig';
import GraphQLHTTP from 'express-graphql';
import ContactsBundle from './Bundles/Contacts/ContactBundleIndex.js';
import mongoose from 'mongoose';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';

// initialize config
const appConfig = new AppConfig();

// initialize mongoDB via Mongoose and inject it to modules
const connection = mongoose.connect( appConfig.getDBConnection() );

// initialize ContactsBudnle
const contactsBundle = new ContactsBundle( appConfig, connection );

// You can assign multiple GraphQLSchemas from multiple Bundles
const RootQueries = new GraphQLObjectType({
  name : 'RootQuery',
  fields : () => ({
    ...contactsBundle.graphQLExport.getQueries()
  })
});

// You can assign multiple GraphQL Mutations from multiple bundles/Modules
const RootMutations = new GraphQLObjectType({
  name : 'RootMutations',
  fields : () => ({
    ...contactsBundle.graphQLExport.getMutations()
  })
});

const Schema = new GraphQLSchema({
  query : RootQueries,
  mutation : RootMutations
});

const graphQLServer = Express();
graphQLServer.use( '/gql', GraphQLHTTP({
  schema : Schema,
  graphiql : true,
  pretty : true
}));

graphQLServer.use('/', ( req, res ) => {
  res.json( {status:'ok'} );
});


graphQLServer.listen( appConfig.getHttpPort(), () => {
  console.log( ` graphQLServer is running at ${appConfig.getHttpHost()}:${appConfig.getHttpPort()} `);
})
