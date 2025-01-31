export interface Movie {
  id: number
  title: string
  releaseDate: Date
  directorId: number
  createdAt: Date
  updatedAt: Date
}

export class MovieEntity implements Movie {
  private constructor(
    readonly id: number,
    readonly title: string,
    readonly releaseDate: Date,
    readonly directorId: number,
    readonly createdAt: Date,
    readonly updatedAt: Date
  ) {}

  public static create({ id, title, releaseDate, directorId, createdAt, updatedAt }: Movie) {
    return new MovieEntity(id, title, releaseDate, directorId, createdAt, updatedAt)
  }
}
