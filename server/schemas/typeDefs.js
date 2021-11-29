const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
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
    quantity: Int
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

  type Order {
    _id: ID
    purchaseDate: String
    parts: [Part]
  }

  type Checkout {
    session: ID
  }

  type Query {
    user: User
    part(_id: ID!): Part
    parts(category: ID, name: String): [Part]
    category(_id: ID!): Category
    categories: [Category]
    model(_id: ID!): Model
    models: [Model]
    make(_id: ID!): Make
    makes: [Make]
    order(_id: ID!): Order
    checkout(parts: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addOrder(parts: [ID]!): Order
    updatePart(_id: ID!, quantity: Int!): Part
  }
`;

module.exports = typeDefs;
