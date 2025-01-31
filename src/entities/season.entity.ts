export interface Season {
  id: number
  number: number
  tvShowId: number
  createdAt: Date
  updatedAt: Date
}

export class SeasonEntity implements Season {
  private constructor(
    readonly id: number,
    readonly number: number,
    readonly tvShowId: number,
    readonly createdAt: Date,
    readonly updatedAt: Date
  ) {}

  public static create({ id, number, tvShowId, createdAt, updatedAt }: Season) {
    return new SeasonEntity(id, number, tvShowId, createdAt, updatedAt)
  }
}
