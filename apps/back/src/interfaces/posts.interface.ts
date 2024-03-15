import { FeedPostType } from './types/feed-post-type.type';

// @info: FeedPost mean data object with parsed data(originalLink, text, imgLink)
// from tumblr or other site, rss-feed, etc.
export interface FeedPost {
  type: FeedPostType;
  originalLink: string;
  text: string;
  imgLink: string;
}

export interface Post {
  title: string;
  feedPost: FeedPost;
}
