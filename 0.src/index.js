import Express from 'express';
import AppConfig from './AppConfig';
import GraphQLHTTP from 'express-graphql';
import ContactsBundle from './Bundles/Contacts/ContactBundleIndex.js';
import mongoose from 'mongoose';

// initialize config
const appConfig = new AppConfig();

// initialize mongoDB via Mongoose
const connection = mongoose.connect( appConfig.getDBConnection() );

//initialize ContactsBudnle
const contactsBundle = new ContactsBundle( appConfig, connection );
//contactsBundle.runFaker(100);

const graphQLServer = Express();

graphQLServer.use( '/gql', GraphQLHTTP({
  schema : contactsBundle.graphQLSchema.schema(),
  graphiql : true,
  pretty : true
}));

graphQLServer.use('/', (req,res) => {
  res.json({status:'ok'});
});


graphQLServer.listen( appConfig.getHttpPort(), () => {
  console.log( ` graphQLServer is running at ${appConfig.getHttpHost()}:${appConfig.getHttpPort()} `);
})
