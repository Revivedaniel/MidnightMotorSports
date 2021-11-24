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
    parts: [Part]
    categories: [Category]
    models: [Model]
    makes: [Make]
    make(_id: ID!): Make
    model(_id: ID!): Model
    category(_id: ID!): Category
    part(_id: ID!): Part
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addOrder(parts: [ID]!): Order
  }
`;

module.exports = typeDefs;
