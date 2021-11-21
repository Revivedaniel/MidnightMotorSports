const { AuthenticationError } = require("apollo-server-express");
const { User, Part, Category, Make, Model, Year } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    // All parts query
    parts: async () => {
      const parts = await Part.find({})

      return parts;
    },
    categories: async () => {
      const categories = await Category.find({}).populate("parts");

      return categories;
    },
    years: async () => {
      const years = await Year.find({}).populate("categories");

      return years;
    },
    models: async () => {
      const models = await Model.find({}).populate("years")

      return models;
    },
    makes: async () => {
      const makes = await Makes.find({}).populate("models")

      return makes;
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
