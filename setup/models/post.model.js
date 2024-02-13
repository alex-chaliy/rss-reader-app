'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  imgUrl: { type: String, default: '/public/img/sample-article-img.jpg' },
  title: { type: String, default: 'Title' },
  text: { type: String, default: 'wdd44f3eder' },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;