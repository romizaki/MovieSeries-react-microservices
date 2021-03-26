const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./types/index.js')
const resolvers = require('./resolver/resolver')


const server = new ApolloServer({ typeDefs, resolvers })

server.listen()
.then(({ url }) => {
  console.log('hello from', url)
})