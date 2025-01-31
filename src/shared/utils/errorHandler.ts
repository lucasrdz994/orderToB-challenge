import { NextFunction, Request, Response } from 'express'

export class CustomError extends Error {
  public readonly statusCode: number
  public readonly data?: object

  constructor({
    error,
    message,
    statusCode,
    data = {}
  }: {
    error: string
    message: string
    statusCode: number
    data?: object
  }) {
    super(message)
    this.name = error
    this.statusCode = statusCode
    this.data = data

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }
  }
}

export const appOnError = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ error: err.name, message: err.message, data: err.data })
    return
  }

  // Note: here we can handle specific errors
  res.status(500).json({ error: err.name, message: err.message })
}
