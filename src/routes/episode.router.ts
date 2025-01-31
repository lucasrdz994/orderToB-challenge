import { Router } from 'express'
import { EpisodeController } from '@/controllers/episode.controller.js'
import { AuthMiddleware } from '@/middlewares/auth.middleware.js'

export class EpisodeRouter {
  constructor(
    readonly router = Router(),
    readonly episodeController = new EpisodeController()
  ) {
    this.router.get('/:id', AuthMiddleware.authorize, (req, res, next) =>
      this.episodeController.getById(req, res, next)
    )
  }
}
