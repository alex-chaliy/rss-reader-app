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
const testUserData = require('./data/user.json');
const user = new UserModel(testUserData);

user.save()
  .then(userDoc => {
    console.log('success when create new User : ', userDoc);
  })
  .catch(err => {
    console.log('error when create new User : ', err);
  });


const PostModel = require('./models/post.model');
const testPostsData = require('./data/posts.json');
const post = new PostModel(testPostsData[0]);

post.save()
  .then(postDoc => {
    console.log('success when create new Post : ', postDoc);
  })
  .catch(err => {
    console.log('error when create new Post : ', err);
  });