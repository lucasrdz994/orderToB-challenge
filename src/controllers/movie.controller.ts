import { NextFunction, Request, Response } from 'express'
import { MovieUseCases } from '@/use-cases/movie.use-case.js'
import { Movie } from '@/entities/movie.entity.js'

export class MovieController {
  constructor(private movieUseCases = new MovieUseCases()) {}

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const filters = {
        title: req.query.title as string,
        releaseDate: req.query.release_date as string,
        directorId: req.query.directorId ? Number(req.query.directorId) : undefined
      }

      const orderBy = req.query.orderBy as keyof Movie

      const order = req.query.order as 'ASC' | 'DESC'

      const page = req.query.page ? Number(req.query.page) : undefined

      const pageSize = req.query.pageSize ? Number(req.query.pageSize) : undefined

      const movies = await this.movieUseCases.list(filters, orderBy, order, page, pageSize)

      res.json(movies)
    } catch (error) {
      next(error)
    }
  }
}
