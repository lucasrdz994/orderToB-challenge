export interface Director {
  id: number
  name: string
  birthdate: Date
  createdAt: Date
  updatedAt: Date
}

export class DirectorEntity implements Director {
  private constructor(
    readonly id: number,
    readonly name: string,
    readonly birthdate: Date,
    readonly createdAt: Date,
    readonly updatedAt: Date
  ) {}

  public static create({ id, name, birthdate, createdAt, updatedAt }: Director) {
    return new DirectorEntity(id, name, birthdate, createdAt, updatedAt)
  }
}
