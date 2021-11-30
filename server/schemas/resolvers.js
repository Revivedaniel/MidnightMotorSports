const { AuthenticationError } = require("apollo-server-express");
const { User, Part, Category, Make, Model, Order } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require('stripe')(process.env.STRIPE_SECRET);

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        let user = await User.findById(context.user._id).populate({
          path: 'orders.parts',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Please, log in first!");
    },
    // All parts query
    parts: async (parent, { category, name }) => {
      let params = {};

      if (category) params.category = category;

      if (name) params.name = name;

      const parts = await Part.find(params).populate("category");

      return parts;
    },
    categories: async () => {
      const categories = await Category.find({});

      return categories;
    },
    models: async () => {
      const models = await Model.find({}).populate("parts")

      return models;
    },
    makes: async () => {
      const makes = await Make.find({}).populate("models")

      return makes;
    },
    //single resolvers
    make: async (parent, args) => {
      const make = await Make.findById(args._id).populate("models");

      return make;
    },
    model: async (parent, { name }) => {
      const model = await Model.findOne({ name: name }).populate("parts");

      return model;
    },
    part: async (parents, { _id }) => {
      const part = await Part.findById(_id).populate("category");

      return part;
    },
    category: async (parents, args) => {
      const category = await Category.findById(args._id);

      return category;
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.parts',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Please, log in first!');
    },
    // Stripe
    checkout: async (parent, args, context) => {
      // Verifying user is on our site
      const url = new URL(context.headers.referer).origin;
      // Creating new order with parts
      const order = new Order({ parts: args.parts });
      // Defining empty line items
      const line_items = [];
      // Populating the parts on the order and deconstrucing the parts array
      const { parts } = await order.populate('parts').execPopulate();
      // for each part create a stripe part, pricing, and line
      for (let i = 0; i < parts.length; i++) {
        const part = await stripe.parts.create({
          name: parts[i].name,
          description: parts[i].description,
          images: [`${url}/images/${parts[i].image}`]
        });
        const price = await stripe.prices.create({
          part: part.id,
          unit_amount: parts[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }
      // create stripe checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/`,
        cancel_url: `${url}/`
      });
      // return the session
      return { session: session.id };
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

      throw new AuthenticationError("Please, log in first!");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Email and/or password is incorrect!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Email and/or password is incorrect!");
      }

      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { parts }, context) => {
      if (context.user) {
        const order = new Order({ parts });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Please, log in first!');
    }
  },
};

module.exports = resolvers;
