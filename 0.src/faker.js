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
// if you wish to generate fake records, enable faker by uncommenting the line below
contactsBundle.runFaker(10000);
console.log('Done ....')
