import { FeedPostType } from '@/interfaces/types/feed-post-type.type';
import { IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { isUrlOptions } from './constants/is-url-options';

// @info: FeedPost mean data object with parsed data(originalLink, text, imgLink)
// from tumblr or other site, rss-feed, etc.
class FeedPost {
  @IsNotEmpty()
  @IsString()
  type: FeedPostType;

  @IsUrl(isUrlOptions)
  originalLink: string;

  @IsNotEmpty()
  @IsString()
  text: String;

  @IsUrl(isUrlOptions)
  imgLink: String;
}

export class CreatePostDto {
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public title: string;

  public feedPost: FeedPost;
}

export class UpdatePostDto extends CreatePostDto {}
