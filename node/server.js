const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    greeting: String
  }
`;
const resolvers = {
  Query: {
    greeting: () => "This is a Greeting Message!",
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`listening ${url}`));
