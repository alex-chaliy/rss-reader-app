'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// @info: FeedPost mean data object with parsed data(originalLink, text, imgLink)
// from tumblr or other site, rss-feed, etc.
const FeedPostSchema = new Schema({
  type: { type: String, default: 'tumblr' },
  originalLink: { type: String, default: 'https://www.tumblr.com/' },
  text: { type: String, default: 'Some text parsed from a tumblr post' },
  imgLink: { type: String, default: 'http://localhost:3000/public/img/sample-article-img.jpg' },
})


const PostSchema = new Schema({
  title: { type: String, default: 'Title' },
  feedPost: { type: FeedPostSchema, default: () => ({}) }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;