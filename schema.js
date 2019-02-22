var resolvers = require("./resolvers");
var { importSchema } = require("graphql-import");
var { makeExecutableSchema } = require("graphql-tools");

var typeDefs = importSchema("./schema.graphql");

var schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
