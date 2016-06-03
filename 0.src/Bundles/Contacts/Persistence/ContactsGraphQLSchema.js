//https://www.youtube.com/watch?v=DNPVqK_woRQ
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  CustomGraphQLDateType
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
            description: 'The id of the personalInfo.',
            resolve( personalInfo )  { return personalInfo._id; }
          },
          Firstname: {
            type: GraphQLString,
            description: 'The Firstname of the personalInfo.',
            resolve( personalInfo )  { return personalInfo.Firstname; }
          },
          Lastname : {
            type: GraphQLString,
            description : 'The Lastname of the personalInfo',
            resolve( personalInfo )  { return personalInfo.Lastname; }
          },
          SocSecId : {
            type: GraphQLString,
            description : 'The SocSecId of the personalInfo',
            resolve( personalInfo )  { return personalInfo.SocSecId; }
          },
          DriverLicId : {
            type: GraphQLString,
            description : 'The DriverLicId of the personalInfo',
            resolve( personalInfo )  { return personalInfo.DriverLicId; }
          },
          DOB : {
            type: GraphQLString,
            description : 'The DOB of the personalInfo',
            resolve( personalInfo )  { return personalInfo.DOB; }
          },
          TagsAndGroups : {
            type: GraphQLString,
            description : 'The TagsAndGroups of the personalInfo',
            resolve( personalInfo )  { return personalInfo.TagsAndGroups; }
          },
          Notes : {
            type: GraphQLString,
            description : 'The Notes of the personalInfo',
            resolve( personalInfo )  { return personalInfo.Lastname; }
          },
          Business: {
            type : new GraphQLObjectType({
            name : 'BusinessInfo',
            description: 'This is a Business',
            fields: () => {
              return {
                CompanyName: {
                  type: GraphQLString,
                  description : 'The Business info of the personalInfo',
                  resolve( businessInfo )  { return businessInfo.CompanyName; }
                },
                JobDescription: {
                  type: GraphQLString,
                  description : 'The Notes of the businessInfo',
                  resolve( businessInfo )  { return businessInfo.JobDescription; }
                },
                Address: {
                  type: GraphQLString,
                  description : 'The Notes of the businessInfo',
                  resolve( businessInfo )  { return businessInfo.Address; }
                },
                Town: {
                  type: GraphQLString,
                  description : 'The Notes of the businessInfo',
                  resolve( businessInfo )  { return businessInfo.Town; }
                },
                ZipCode: {
                  type: GraphQLString,
                  description : 'The Notes of the businessInfo',
                  resolve( businessInfo )  { return businessInfo.ZipCode; }
                },
                LandLine: {
                  type: GraphQLString,
                  description : 'The Notes of the businessInfo',
                  resolve( businessInfo )  { return businessInfo.LandLine; }
                },
                Mobile: {
                  type: GraphQLString,
                  description : 'The Notes of the businessInfo',
                  resolve( businessInfo )  { return businessInfo.Mobile; }
                },
                Email: {
                  type: GraphQLString,
                  description : 'The Notes of the businessInfo',
                  resolve( businessInfo )  { return businessInfo.Email; }
                },
                Skype: {
                  type: GraphQLString,
                  description : 'The Notes of the businessInfo',
                  resolve( businessInfo )  { return businessInfo.Skype; }
                },
                MSN: {
                  type: GraphQLString,
                  description : 'The Notes of the businessInfo',
                  resolve( businessInfo )  { return businessInfo.MSN; }
                }
              }
            }
            })
          },
          Personal: {
            type : new GraphQLObjectType({
            name : 'PersonalInfo',
            description: 'The personal info of the personalInfo',
            fields: () => {
              return {
                Address: {
                  type: GraphQLString,
                  description : 'The Notes of the personalInfo',
                  resolve( personalInfo )  { return personalInfo.Address; }
                },
                Town: {
                  type: GraphQLString,
                  description : 'The Notes of the personalInfo',
                  resolve( personalInfo )  { return personalInfo.Town; }
                },
                ZipCode: {
                  type: GraphQLString,
                  description : 'The Notes of the personalInfo',
                  resolve( personalInfo )  { return personalInfo.ZipCode; }
                },
                LandLine: {
                  type: GraphQLString,
                  description : 'The Notes of the personalInfo',
                  resolve( personalInfo )  { return personalInfo.LandLine; }
                },
                Mobile: {
                  type: GraphQLString,
                  description : 'The Notes of the personalInfo',
                  resolve( personalInfo )  { return personalInfo.Mobile; }
                },
                Email: {
                  type: GraphQLString,
                  description : 'The Notes of the personalInfo',
                  resolve( personalInfo )  { return personalInfo.Email; }
                },
                Skype: {
                  type: GraphQLString,
                  description : 'The Notes of the personalInfo',
                  resolve( personalInfo )  { return personalInfo.Skype; }
                },
                MSN: {
                  type: GraphQLString,
                  description : 'The Notes of the personalInfo',
                  resolve( personalInfo )  { return personalInfo.MSN; }
                }
              }
            }
            })
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
