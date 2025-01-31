import { Router } from 'express'
import { UserController } from '@/controllers/user.controller.js'
import { AuthMiddleware } from '@/middlewares/auth.middleware.js'
import { validateSchema } from '@/middlewares/validateSchema.middleware.js'
import { createUserSchema } from '@/schemas/user.schema.js'

export class UserRouter {
  constructor(
    readonly router = Router(),
    readonly userController = new UserController()
  ) {
    this.router.post('/', AuthMiddleware.authorize, validateSchema(createUserSchema), (req, res, next) =>
      this.userController.create(req, res, next)
    )
  }
}
