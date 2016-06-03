//https://www.youtube.com/watch?v=DNPVqK_woRQ
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from 'graphql'

export default class ContactsGraphQLSchema {
  constructor( model ) {
    this.model = model;

    this.Contact = new GraphQLObjectType({
      name: 'Contact',
      description: 'This is a Contact',
      fields: () => {
        return {
          _id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The id of the contact.',
            resolve( contact ) { return contact._id; }
          },
          Firstname: {
            type: GraphQLString,
            description: 'The Firstname of the contact.',
            resolve( contact ) { return contact.Firstname; }
          },
          Lastname : {
            type: GraphQLString,
            description : 'The Lastname of the contact',
            resolve( contact ) { return contact.Lastname; }
          }
        }
      }
    });

    this.Query = new GraphQLObjectType({
      name : 'Query',
      description : 'This is the root query',
      fields : () => {
        return {
          contacts : {
            type : new GraphQLList( this.Contact ),
            args : {
              _id : {
                type : GraphQLString
              },
              email : {
                type : GraphQLString
              }
            },
            resolve(root, args) {
              return model.find(args);
            }
          }
        }
      }
    })
  }

  schema = () => {
    return new GraphQLSchema({
      query: this.Query
    });
  }

}
