'use strict';

/************
* Connect DB *
*************/

const dbConfig = require('./db-config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.protocol + dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.dbName);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', () => {
  console.log("Successfully connected to MongoDB");
});

const UserModel = require('./models/user.model');

const user = new UserModel({
  login: 'superrssreader',
  salt: '1qw23er45ty6',
  token: '27ea8bf3eeed087e368825798951ab90fb98b3349ae52d0ac30caded45b6aed3'
});

user.save()
  .then(userDoc => {
    console.log('success when create new User : ', userDoc);
  })
  .catch(err => {
    console.log('error when create new User : ', err);
  });