import Express from 'express';
import AppConfig from './AppConfig';
import GraphQLHTTP from 'express-graphql';
import ContactsBundle from './Bundles/Contacts/ContactBundleIndex.js';
import mongoose from 'mongoose';
import {GraphQLObjectType, GraphQLSchema} from 'graphql';

// initialize config
const appConfig = new AppConfig();

// initialize mongoDB via Mongoose and inject it to modules
const connection = mongoose.connect( appConfig.getDBConnection() );

// initialize ContactsBudnle
const contactsBundle = new ContactsBundle( appConfig, connection );
// if you wish to generate fake records, enable faker by uncommenting the line below
// contactsBundle.runFaker(100);

//You can assign multiple GraphQLSchemas from multiple Bundles
let RootQuery = new GraphQLObjectType({
  name : 'RootQuery',
  fields : () => ({
    Contacts : contactsBundle.graphQLSchema.Query.contacts
  })
});

let Schema = new GraphQLSchema({
  query : RootQuery
})

const graphQLServer = Express();
graphQLServer.use( '/gql', GraphQLHTTP({
  schema : Schema,
  graphiql : true,
  pretty : true
}));

graphQLServer.use('/', (req,res) => {
  res.json({status:'ok'});
});


graphQLServer.listen( appConfig.getHttpPort(), () => {
  console.log( ` graphQLServer is running at ${appConfig.getHttpHost()}:${appConfig.getHttpPort()} `);
})
