'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  login: { type: String, default: 'username' },
  salt: { type: String, default: 'wdd44f3eder' },
  token: { type: String, default: 'aeeaeaeaeaeaeaeaeaeea' }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;