export interface Episode {
  id: number
  title: string
  seasonId: number
  directorId: number
  createdAt: Date
  updatedAt: Date
}

export class EpisodeEntity implements Episode {
  private constructor(
    readonly id: number,
    readonly title: string,
    readonly seasonId: number,
    readonly directorId: number,
    readonly createdAt: Date,
    readonly updatedAt: Date
  ) {}

  public static create({ id, title, seasonId, directorId, createdAt, updatedAt }: Episode) {
    return new EpisodeEntity(id, title, seasonId, directorId, createdAt, updatedAt)
  }
}
