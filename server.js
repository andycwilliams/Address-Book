const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema.js");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening on PORT 4000...");
});

// ----------------------------------------------------------------

// const express = require('express');

// // Import the ApolloServer class
// const { ApolloServer } = require('apollo-server-express');

// // Import the two parts of a GraphQL schema
// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Create a new instance of an Apollo server with the GraphQL schema
// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// });

// // Update Express.js to use Apollo server features
// server.applyMiddleware({ app });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });
