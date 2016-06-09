import {
  GraphQLString,
  GraphQLList
} from 'graphql';

import ContactsTypeQLSchema from './ContactsTypeQLSchema';

export default class ContactsGraphQLQuery {
  constructor ( model ) {
    this.model = model;
    return {
      contacts : {
        type : new GraphQLList( ContactsTypeQLSchema ),
        args : {
          _id : {
            type : GraphQLString
          },
          email : {
            type : GraphQLString
          }
        },
        resolve : ( root, args ) => {
          return this.model.find(args);
        }
      }
    };
  }

}
