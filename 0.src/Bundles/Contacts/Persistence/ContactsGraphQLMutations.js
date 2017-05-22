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
      updateContact  : {
        type :  ContactsTypeQLSchema,
        args : {
          id : {
            type : new GraphQLNonNull( GraphQLString )
          },
          firstName : {
            type : GraphQLString
          }
        },
        resolve : ( root, args ) => {
          //update should be implemented
          return this.model.findById( args.id );
        }
      },
    };
  }
}
