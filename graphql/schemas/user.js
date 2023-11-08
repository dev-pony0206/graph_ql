const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    name: String!
    score: Number!
    age: Number!
  }

  type Query {
    success: String
    users: [User]
  }

  type Mutation {
    getUser(name: String!, score: Number!, age: Number!): [User]
    registerUser(name: String!, score: Number!, age: Number!): String
    updateUser(name: String, age: Number, score: Number): String
    deleteUser(id: String): String
  }
`;
