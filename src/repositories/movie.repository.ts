import { Movie } from '@/entities/movie.entity.js'
import { MovieModel } from '@/models/movies.model.js'
import { Op, WhereOptions } from 'sequelize'

export class MovieRepository {
  public async list(
    filters: { title?: string; releaseDate?: string; directorId?: number } = {},
    orderBy: keyof Movie = 'id',
    order: 'ASC' | 'DESC' = 'ASC',
    page: number = 1,
    pageSize: number = 10
  ) {
    const where: WhereOptions<Movie> = {}

    if (filters.title) {
      where.title = { [Op.like]: `%${filters.title}%` }
    }

    if (filters.releaseDate) {
      where.releaseDate = filters.releaseDate
    }

    if (filters.directorId) {
      where.directorId = filters.directorId
    }

    const { count, rows } = await MovieModel.findAndCountAll({
      where,
      order: [[orderBy, order]],
      limit: pageSize,
      offset: (page - 1) * pageSize
    })

    const totalPages = Math.ceil(count / pageSize)

    return {
      rows,
      count,
      page,
      totalPages
    }
  }
}
