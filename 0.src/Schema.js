import {
  GraphQLSchema
  , GraphQLObjectType
  , GraphSQLString
} from 'graphql';

const QueryType = new GraphQLObjectType({
    name : Query,
    description : 'Query',
    fields : () => {
      person : {
        type : ContactType,
        args : {
          id : {type : GraphSQLString }
        },
        resolve : () => {}
      }
    }
})

export default new GraphQLSchema({
  query : QueryType
});
