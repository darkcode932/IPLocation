const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);

/*This model defines a User schema with the following fields:

name: a string, required
email: a string, required and unique
password: a string, required
username: a string, required and unique
phone: a string, required and unique
date: a date, defaults to the current date
The User model can be used to create and read documents from the users collection in the database.*/



