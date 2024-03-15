import { model, Schema, Document, Model } from 'mongoose';
import { Post } from '@interfaces/posts.interface';

const FeedPostSchema: Schema = new Schema({
  type: { type: String, default: 'tumblr', required: true },
  originalLink: { type: String, default: 'https://www.tumblr.com/', required: true },
  text: { type: String, default: 'Some text parsed from a tumblr post', required: true },
  imgLink: { type: String, default: 'http://localhost:3000/public/img/sample-article-img.jpg', required: true },
});

const PostSchema: Schema = new Schema({
  title: { type: String, default: 'Title' },
  feedPost: { type: FeedPostSchema, default: () => ({}) },
});

export const PostModel = model<Post & Document>('Post', PostSchema);
