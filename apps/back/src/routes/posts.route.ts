import { Router } from 'express';
import { PostController } from '@controllers/posts.controller';
import { CreatePostDto, UpdatePostDto } from '@dtos/posts.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class PostRoute implements Routes {
  public path = '/api/posts/';
  public router = Router();
  public postController = new PostController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}create`, ValidationMiddleware(CreatePostDto), this.postController.create);
    this.router.get(`${this.path}`, this.postController.getAll);
    this.router.get(`${this.path}:id`, this.postController.getOneById);
    this.router.put(`${this.path}update`, ValidationMiddleware(UpdatePostDto), this.postController.update);
    this.router.delete(`${this.path}delete`, this.postController.dalete);
  }
}
