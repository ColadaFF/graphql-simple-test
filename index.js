var express = require("express");
//graphql
var graphqlHTTP = require("express-graphql");
var schema = require("./schema");
//resolvers
var resolvers = require("./resolvers");

const root = resolvers;

const app = express();

app.get("/", (req, res) => {
  res.send("Todo listo");
});

app.use(
  "/graphql",
  graphqlHTTP({
    // el esquema que se va a utilizar
    schema: schema,
    // el resolver se pasa como rootvalue
    rootValue: root,
    // utilizar graphiql
    graphiql: true
  })
);

app.listen(8000, () => console.log("El servidor esta funcionando"));
