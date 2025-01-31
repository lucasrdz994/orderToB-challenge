import { UserRepository } from '@/repositories/user.repository.js'
import { CustomError } from '@/shared/utils/errorHandler.js'
import { AuthUseCases } from '@/use-cases/auth.use-case.js'
import { NextFunction, Request, Response } from 'express'

export class AuthController {
  constructor(private authUseCases = new AuthUseCases(new UserRepository())) {}

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body

      const auth = await this.authUseCases.login(email, password)

      res.json(auth)
    } catch (error) {
      next(error)
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(' ')[1]

      if (!token) {
        throw new CustomError({ error: 'Unauthorized', message: 'Access token is not valid', statusCode: 401 })
      }

      const auth = await this.authUseCases.refreshToken(token)

      res.json(auth)
    } catch (error) {
      next(error)
    }
  }
}
