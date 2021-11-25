const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  orders: [
    Order.schema
  ]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  // BeforeCreate and BeforeUpdate
  if (this.isNew || this.isModified('password')) {
    // Defining how many rounds of data slating we should do for the hash
    const saltRounds = 10;
    // Setting the new password to the encrypted version of itself
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  // Moving on to the next part of the data storing process
  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  // Compairing the incoming password to the encripted password stored in the database to make sure they match
  return await bcrypt.compare(password, this.password);
};
// Defining the User model
const User = mongoose.model('User', userSchema);

module.exports = User;