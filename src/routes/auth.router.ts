import { Router } from 'express'
import { AuthController } from '@/controllers/auth.controller.js'

export class AuthRouter {
  constructor(
    readonly router = Router(),
    readonly authController = new AuthController()
  ) {
    this.router.post('/login', (req, res, next) => this.authController.login(req, res, next))

    this.router.get('/refresh-token', (req, res, next) => this.authController.refreshToken(req, res, next))
  }
}
