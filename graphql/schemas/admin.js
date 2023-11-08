const { gql } = require("apollo-server-express");

module.exports = gql`
  type Admin {
    name: String!
    email: String!
    password: String!
    photo: String!
  }

  type Query {
    success: String
  }

  type Mutation {
    signUp(email: String!, name: String!, password: String!, photo: String!): String
    signIn(email: String!, password: String!): String
  }
`;
