'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, default: 'examole@eeeee.com' },
  salt: { type: String, default: 'wdd44fsjkdfsjkdsfkjf3eder' },
  token: { type: String, default: 'aeeaeaeaeaeaeaeaeaeea' },
  name: { type: String, default: 'Name' },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;