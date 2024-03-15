import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { Post } from '@interfaces/posts.interface';
import { PostModel } from '@models/posts.model';
import { PagedData } from '@/interfaces/paging.interface';

@Service()
export class PostService {
  public async create(postData: Post): Promise<Post> {
    const createPostData: Post = await PostModel.create(postData);

    return createPostData;
  }

  public async getAll(offsetStart: number, offsetEnd: number): Promise<PagedData<Post[]>> {
    // TODO make sorting by needed params and limiting from offsetStart to offsetEnd
    const postsData: Post[] = await PostModel.find();
    return <PagedData<Post[]>> {
      data: postsData,
      offsetStart: offsetStart,
      offsetEnd: offsetEnd
    };
  }

  public async getOneById(postId: string): Promise<Post> {
    const findUser: Post = await PostModel.findOne({ _id: postId });
    if (!findUser) throw new HttpException(409, "Post doesn't exist");

    return findUser;
  }

  public async update(postId: string, postData: Post): Promise<Post> {
    const updatePostById: Post = await PostModel.findByIdAndUpdate(postId, postData, { new: true });
    if (!updatePostById) throw new HttpException(409, "Post doesn't exist");

    return updatePostById;
  }

  public async dalete(postId: string): Promise<Post> {
    const deletePostById: Post = await PostModel.findByIdAndDelete(postId);
    if (!deletePostById) throw new HttpException(409, "Post doesn't exist");

    return deletePostById;
  }
}
