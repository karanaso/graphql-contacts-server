import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull
} from 'graphql';

import ContactsTypeQLSchema from './ContactsTypeQLSchema';

//https://www.youtube.com/watch?v=DNPVqK_woRQ
export default class ContactsGraphQLMutations {
  constructor ( model ) {
    this.model = model;
    return {
      // used both for insert and update
      AddContact  : {
        type :  ContactsTypeQLSchema,
        args : {
          firstName : {
            type : new GraphQLNonNull( GraphQLString )
          },
        },
        resolve : ( root, args ) => {
          console.log( args );
          return this.model.findById("5751912c9bed706d1acd239d");
          //return this.model.find({});
        }
      }
    };
  }
}
