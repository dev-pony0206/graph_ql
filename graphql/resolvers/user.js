const { ApolloError, AuthenticationError } = require("apollo-server-express");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  Query: {
    hello: () => "hi",
  },
  Mutation: {
    registerUser: async (root, args, context, info) => {

      const { name, score, age } = args;
      if (await User.findOne({ name }))
        throw new AuthenticationError("User already exist.");

      const newuser = new User({
        name,
        score,
        age
      });
      await newuser.save();
      return newuser;
    },
    updateUserById: async (root, args, context, info) => {
      const { name, score, age } = args;
      const updateUser = {
        name,
        score,
        age
      };

      const result = await User.findOneAndUpdate(
        { _id: context.user.id },
        { $set: updateUser },
        { new: true }
      );
      return result;
    },
    updateUser: async (root, args, context, info) => {

      const { id, name, score, age } = args;
      const updateUser = {
        name,
        score,
        age
      };

      const result = await User.findOneAndUpdate(
        { _id: id },
        { $set: updateUser },
        { new: true }
      );
      return result;
    },
    deleteUser: async (root, args, context, info) => {

      const { id } = args;
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        throw new Error(`User with ID ${id} not found`);
      }
      return deletedUser;
    },
  },
};
