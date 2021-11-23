const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Category {
    _id: ID
    name: String
  }

  type Part {
    _id: ID
    name: String
    description: String
    image: String
    price: Int
    year: Int
    category: Category
  }

  type Model {
    _id: ID
    name: String
    parts: [Part]
  }

  type Make {
    _id: ID
    name: String
    models: [Model]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    parts: [Part]
    categories: [Category]
    models: [Model]
    makes: [Make]
    make(id: ID!): Make
    model(id: ID!): Model
    category(id: ID!): Category
    part(id: ID!): Part
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
