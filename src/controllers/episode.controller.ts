import { NextFunction, Request, Response } from 'express'
import { EpisodeUseCases } from '@/use-cases/episode.use-case.js'
import { CustomError } from '@/shared/utils/errorHandler.js'

export class EpisodeController {
  constructor(private episodeUseCases = new EpisodeUseCases()) {}

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id ? Number(req.params.id) : null

      if (!id) {
        throw new CustomError({ error: 'Not Found', message: 'ID is not provided', statusCode: 404 })
      }

      const movies = await this.episodeUseCases.getById(id)

      res.json(movies)
    } catch (error) {
      next(error)
    }
  }
}
