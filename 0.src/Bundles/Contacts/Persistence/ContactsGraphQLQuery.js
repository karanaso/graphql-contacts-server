import {
  GraphQLString,
  GraphQLList
} from 'graphql';

import ContactsTypeQL from './ContactsTypeQL';

export default class ContactsGraphQLQuery {
  constructor ( model ) {
    this.model = model;
    return {
      contacts : {
        type : new GraphQLList( ContactsTypeQL ),
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
