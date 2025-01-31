import { Movie } from '@/entities/movie.entity.js'
import { MovieRepository } from '@/repositories/movie.repository.js'

export class MovieUseCases {
  constructor(private movieRepository = new MovieRepository()) {}

  public async list(
    filters: { title?: string; releaseDate?: string; directorId?: number },
    orderBy: keyof Movie,
    order?: 'ASC' | 'DESC',
    page?: number,
    pageSize?: number
  ) {
    const user = await this.movieRepository.list(filters, orderBy, order, page, pageSize)

    return user
  }
}
