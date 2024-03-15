'use strict';

/************
* Connect DB *
*************/

const dbConfig = require('./db-config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbAddress = dbConfig.protocol + dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.dbName;
mongoose.connect(dbAddress);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', () => {
  console.log(`Successfully connected to MongoDBv on : ${dbAddress}`);
});

const UserModel = require('./models/user.model');
const testUserData = require('./data/user.data.js');
UserModel(testUserData).save()
  .then(userDoc => {
    console.log('success when create new User : ', userDoc);
  })
  .catch(err => {
    console.log('error when create new User : ', err);
  });


const PostModel = require('./models/post.model');
const testPostsData = require('./data/posts.data.js');

PostModel.create(testPostsData)
  .then((result) => {
    console.log(`success when create new Posts : `, result);
  })
  .catch((err) => {
    console.log(`success when create new Post : `, err);
  });
