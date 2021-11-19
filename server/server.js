// Importing express
const express = require('express');
// Importing ApolloServer
const { ApolloServer } = require('apollo-server-express');
// Importing Path
const path = require('path');

// Importing typeDefs and Resolvers for graphql
const { typeDefs, resolvers } = require('./schemas');
// Importing the auth middleware that check logged in status
const { authMiddleware } = require('./utils/auth');
// Importing the mongodb connection
const db = require('./config/connection');

// Assigning the port from either the production environment or default to 3001
const PORT = process.env.PORT || 3001;
// Calling the express function and naming it app
const app = express();
// Initializing a new ApolloServer to support graphql
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// This helps ApolloServer integrate with express
server.applyMiddleware({ app });

// URL-encoded data will be parsed with the querystring library.
app.use(express.urlencoded({ extended: false }));
// This parses incoming json reqs
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/public/images')));

// This is testing to see if the NODE_ENV is set to production
if (process.env.NODE_ENV === 'production') {
  // Using the light weight build scripts in production
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// This is a fallback route that takes you to the index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Listen for open onve and then listen on the port.
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
