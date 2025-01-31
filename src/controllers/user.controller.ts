import { NextFunction, Request, Response } from 'express'
import { UserUseCases } from '@/use-cases/user.use-case.js'

export class UserController {
  constructor(private userUseCases = new UserUseCases()) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body

      const user = await this.userUseCases.create(name, email, password)

      res.json(user)
    } catch (error) {
      next(error)
    }
  }
}
