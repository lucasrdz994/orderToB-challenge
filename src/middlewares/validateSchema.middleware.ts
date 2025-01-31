import { CustomError } from '@/shared/utils/errorHandler.js'
import { NextFunction, Request, Response } from 'express'
import { ZodSchema } from 'zod'

export const validateSchema = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      throw new CustomError({
        error: 'Validation error',
        message: 'Validation schema error',
        statusCode: 400,
        data: result.error.format()
      })
    }

    next()
  }
}
