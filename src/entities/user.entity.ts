export interface User {
  id: number
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

export class UserEntity implements User {
  private constructor(
    readonly id: number,
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly createdAt: Date,
    readonly updatedAt: Date
  ) {}

  public static create({ id, name, email, password, createdAt, updatedAt }: User) {
    return new UserEntity(id, name, email, password, createdAt, updatedAt)
  }
}
