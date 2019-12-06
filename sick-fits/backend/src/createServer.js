const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/Mutation');
const Mutation = require('./resolvers/Query');
const db = require('./db');

// Create GraphQL Yoga Server
function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Query,
            Mutation,
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        context: req => ({ ...req, db }),
    });
}

module.exports = createServer;