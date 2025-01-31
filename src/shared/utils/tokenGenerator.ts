import jwt from 'jsonwebtoken'
import { CustomError } from './errorHandler.js'

const ACCESS_TOKEN_SECRET = 'clave-secreta-access'
const REFRESH_TOKEN_SECRET = 'clave-secreta-refresh'
const ACCESS_TOKEN_EXPIRATION = '15m'
const REFRESH_TOKEN_EXPIRATION = '7d'

export class TokenGenerator {
  public static generateAccessToken(userId: number): string {
    return jwt.sign({ userId }, ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRATION
    })
  }

  public static generateRefreshToken(userId: number): string {
    return jwt.sign({ userId }, REFRESH_TOKEN_SECRET, {
      expiresIn: REFRESH_TOKEN_EXPIRATION
    })
  }

  public static verifyAccessToken(token: string) {
    try {
      return jwt.verify(token, ACCESS_TOKEN_SECRET)
    } catch (error) {
      const err = error as Error
      throw new CustomError({ error: err.name, message: err.message, statusCode: 401 })
    }
  }

  public static verifyRefreshToken(token: string) {
    try {
      return jwt.verify(token, REFRESH_TOKEN_SECRET)
    } catch (error) {
      const err = error as Error
      throw new CustomError({ error: err.name, message: err.message, statusCode: 401 })
    }
  }
}
