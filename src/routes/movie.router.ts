import { Router } from 'express'
import { MovieController } from '@/controllers/movie.controller.js'
import { AuthMiddleware } from '@/middlewares/auth.middleware.js'

export class MovieRouter {
  constructor(
    readonly router = Router(),
    readonly movieController = new MovieController()
  ) {
    this.router.get('/', AuthMiddleware.authorize, (req, res, next) => this.movieController.list(req, res, next))
  }
}
