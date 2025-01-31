export interface Auth {
  userId: number
  token: string
  refreshToken: string
}

export class AuthEntity implements Auth {
  private constructor(
    readonly userId: number,
    readonly token: string,
    readonly refreshToken: string
  ) {}

  public static async create({ userId, token, refreshToken }: Auth): Promise<AuthEntity> {
    return new AuthEntity(userId, token, refreshToken)
  }
}
