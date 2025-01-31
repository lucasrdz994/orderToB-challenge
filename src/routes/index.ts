import { Router } from 'express'
import { AuthRouter } from './auth.router.js'
import { UserRouter } from './user.router.js'
import { MovieRouter } from './movie.router.js'
import { EpisodeRouter } from './episode.router.js'

export class AppRouter {
  constructor(
    private readonly router = Router(),
    private readonly authRouter = new AuthRouter(),
    private readonly userRouter = new UserRouter(),
    private readonly movieRouter = new MovieRouter(),
    private readonly episodeRouter = new EpisodeRouter()
  ) {}

  getRoutes() {
    this.router.use('/auth', this.authRouter.router)

    this.router.use('/users', this.userRouter.router)

    this.router.use('/movies', this.movieRouter.router)

    this.router.use('/episodes', this.episodeRouter.router)

    return this.router
  }
}
