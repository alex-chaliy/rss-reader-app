import { PagedData } from './../interfaces/paging.interface';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Post } from '@interfaces/posts.interface';
import { PostService } from '@services/posts.service';
import { AuthService } from '@services/auth.service';
import { DEFAULT_OFFSET_END } from '@/constants/paging.constants';

export class PostController {
  private postService = Container.get(PostService);
  private authService = Container.get(AuthService);

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.authService.checkAuth(req.headers.authorization);
    } catch (error) {
      next(error);
    }
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.authService.checkAuth(req.headers.authorization);
    } catch (error) {
      next(error);
    }

    try {
      const offsetStart: number = +req.query?.offsetStart || 0;
      const offsetEnd: number = +req.query?.offsetEnd || DEFAULT_OFFSET_END;

      // TODO rename PagedData interface to ResponseData or remove this interface, maybe it's not needed 
      const pagedPostsData: PagedData<Post[]> = await this.postService.getAll(offsetStart, offsetEnd);

      res.status(200).json({ ...pagedPostsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  }

  public getOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.authService.checkAuth(req.headers.authorization);
    } catch (error) {
      next(error);
    }
  }

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.authService.checkAuth(req.headers.authorization);
    } catch (error) {
      next(error);
    }
  }

  public dalete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.authService.checkAuth(req.headers.authorization);
    } catch (error) {
      next(error);
    }
  }

}