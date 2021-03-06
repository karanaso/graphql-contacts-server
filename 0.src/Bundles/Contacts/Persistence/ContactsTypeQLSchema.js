import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name : 'Contact',
  description : 'This is a Contact',
  fields : () => {
    return {
      _id : {
        type : new GraphQLNonNull(GraphQLString),
        description : 'The id of the personalInfo.',
        resolve( personalInfo ) { return personalInfo._id; }
      },
      Firstname : {
        type : GraphQLString,
        description : 'The Firstname of the personalInfo.',
        resolve( personalInfo ) { return personalInfo.Firstname; }
      },
      Lastname : {
        type: GraphQLString,
        description : 'The Lastname of the personalInfo',
        resolve( personalInfo ) { return personalInfo.Lastname; }
      },
      SocSecId : {
        type : GraphQLString,
        description : 'The SocSecId of the personalInfo',
        resolve ( personalInfo ) { return personalInfo.SocSecId; }
      },
      DriverLicId : {
        type : GraphQLString,
        description : 'The DriverLicId of the personalInfo',
        resolve( personalInfo ) { return personalInfo.DriverLicId; }
      },
      DOB : {
        type : GraphQLString,
        description : 'The DOB of the personalInfo',
        resolve( personalInfo ) { return personalInfo.DOB; }
      },
      TagsAndGroups : {
        type : GraphQLString,
        description : 'The TagsAndGroups of the personalInfo',
        resolve( personalInfo ) { return personalInfo.TagsAndGroups; }
      },
      Notes : {
        type : GraphQLString,
        description : 'The Notes of the personalInfo',
        resolve( personalInfo ) { return personalInfo.Lastname; }
      },
      Business : {
        type : new GraphQLObjectType({
        name : 'BusinessInfo',
        description : 'This is a Business',
        fields: () => {
          return {
            CompanyName : {
              type : GraphQLString,
              description : 'The Business info of the personalInfo',
              resolve( businessInfo ) { return businessInfo.CompanyName; }
            },
            JobDescription : {
              type : GraphQLString,
              description : 'The JobDescription of the businessInfo',
              resolve( businessInfo ) { return businessInfo.JobDescription; }
            },
            Address : {
              type : GraphQLString,
              description : 'The Address of the businessInfo',
              resolve( businessInfo ) { return businessInfo.Address; }
            },
            Town : {
              type: GraphQLString,
              description : 'The Town of the businessInfo',
              resolve( businessInfo ) { return businessInfo.Town; }
            },
            ZipCode : {
              type : GraphQLString,
              description : 'The ZipCode of the businessInfo',
              resolve( businessInfo ) { return businessInfo.ZipCode; }
            },
            LandLine : {
              type : GraphQLString,
              description : 'The LandLine of the businessInfo',
              resolve( businessInfo ) { return businessInfo.LandLine; }
            },
            Mobile : {
              type : GraphQLString,
              description : 'The Mobile of the businessInfo',
              resolve( businessInfo ) { return businessInfo.Mobile; }
            },
            Email : {
              type : GraphQLString,
              description : 'The Email of the businessInfo',
              resolve( businessInfo ) { return businessInfo.Email; }
            },
            Skype : {
              type : GraphQLString,
              description : 'The Skype of the businessInfo',
              resolve( businessInfo ) { return businessInfo.Skype; }
            },
            MSN : {
              type : GraphQLString,
              description : 'The MSN of the businessInfo',
              resolve( businessInfo ) { return businessInfo.MSN; }
            }
          };
        }
        })
      },
      Personal : {
        type : new GraphQLObjectType({
        name : 'PersonalInfo',
        description : 'The personal info of the personalInfo',
        fields: () => {
          return {
            Address : {
              type : GraphQLString,
              description : 'The Address of the personalInfo',
              resolve( personalInfo ) { return personalInfo.Address; }
            },
            Town : {
              type : GraphQLString,
              description : 'The Town of the personalInfo',
              resolve( personalInfo ) { return personalInfo.Town; }
            },
            ZipCode : {
              type : GraphQLString,
              description : 'The ZipCode of the personalInfo',
              resolve( personalInfo ) { return personalInfo.ZipCode; }
            },
            LandLine : {
              type : GraphQLString,
              description : 'The LandLine of the personalInfo',
              resolve( personalInfo ) { return personalInfo.LandLine; }
            },
            Mobile : {
              type : GraphQLString,
              description : 'The Mobile of the personalInfo',
              resolve( personalInfo ) { return personalInfo.Mobile; }
            },
            Email : {
              type : GraphQLString,
              description : 'The Email of the personalInfo',
              resolve( personalInfo ) { return personalInfo.Email; }
            },
            Skype : {
              type : GraphQLString,
              description : 'The Skype of the personalInfo',
              resolve( personalInfo ) { return personalInfo.Skype; }
            },
            MSN : {
              type : GraphQLString,
              description : 'The MSN of the personalInfo',
              resolve( personalInfo ) { return personalInfo.MSN; }
            }
          };
        }
        })
      }
    };
  }
});
