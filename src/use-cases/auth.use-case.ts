import { CustomError } from '@/shared/utils/errorHandler.js'
import { UserRepository } from '@/repositories/user.repository.js'
import { Auth, AuthEntity } from '@/entities/auth.entity.js'
import { TokenGenerator } from '@/shared/utils/tokenGenerator.js'
import bcrypt from 'bcrypt'

export class AuthUseCases {
  constructor(private readonly userRepository: UserRepository) {}

  public async login(email: string, password: string): Promise<Auth> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new CustomError({ error: 'Invalid credentials', message: 'Email or password are invalid', statusCode: 404 })
    }

    await this.comparePassword(password, user.password)

    const accessToken = TokenGenerator.generateAccessToken(user.id)

    const refreshToken = TokenGenerator.generateRefreshToken(user.id)

    const authEntity = await AuthEntity.create({
      userId: user.id,
      token: accessToken,
      refreshToken
    })

    return authEntity
  }

  public async refreshToken(token: string) {
    const auth = TokenGenerator.verifyRefreshToken(token) as Auth

    const accessToken = TokenGenerator.generateAccessToken(auth.userId)

    const refreshToken = TokenGenerator.generateRefreshToken(auth.userId)

    const authEntity = await AuthEntity.create({
      userId: auth.userId,
      token: accessToken,
      refreshToken
    })

    return authEntity
  }

  private async comparePassword(password: string, encryptedPassword: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, encryptedPassword)

    if (!isMatch) {
      throw new CustomError({ error: 'Invalid credentials', message: 'Email or password are invalid', statusCode: 401 })
    }

    return true
  }
}
