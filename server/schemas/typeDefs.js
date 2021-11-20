const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Part {
    _id: ID
    name: String
    description: String
    image: String
    price: Int
  }

  type Category {
    _id: ID
    name: String
    parts: [Part]
  }

  type Year {
    _id: ID
    name: String
    categories: [Category]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    parts: [Part]
    categories: [Category]
    years: [Year]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
