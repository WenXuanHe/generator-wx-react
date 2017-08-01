// This example demonstrates a simple server with some
// relational data: Posts and Authors. You can get the
// posts for a particular author, and vice-versa

// Read the complete docs for graphql-tools here:
// http://dev.apollodata.com/tools/graphql-tools/generate-schema.html

const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./typeDefs');
const resolvers= require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: { log: (e) => console.log(e) },
});

module.exports = schema;
