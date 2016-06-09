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
    console.log(this.model.find({}).then( (resolve) => {
      console.log(resolve);
    }));
    return {
      // used both for insert and update
      upsertContact : {
        type :  ContactsTypeQLSchema,
        args : {
          contact : {
            type : GraphQLString
          },
        },
        resolve : ( root, args ) => {
          console.log(args);
          //return this.model.find({_id:"5751912c9bed706d1acd239d"});
          return this.model.find({});
        }
      }
    };
  }
}
