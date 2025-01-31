import { NextFunction, Request, Response } from 'express'
import { TokenGenerator } from '@/shared/utils/tokenGenerator.js'
import { CustomError } from '@/shared/utils/errorHandler.js'

export class AuthMiddleware {
  public static authorize(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      throw new CustomError({ error: 'Unauthorized', message: 'Access token is not valid', statusCode: 401 })
    }

    const decoded = TokenGenerator.verifyAccessToken(token)

    res.locals.user = decoded

    next()
  }
}
