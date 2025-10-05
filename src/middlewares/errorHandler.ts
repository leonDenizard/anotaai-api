import { Request, Response, NextFunction } from "express"
import sendResponse from "../utils/response"

interface CustomError {
  message: string
  statusCode?: number
  details?: string | object
  data?: any
}

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  //console.error(`[ERROR] ${req.method} ${req.originalUrl}`, err)

  let status = 500
  let message = "Internal server error"
  let details: string | object | null = null
  let data: any = null


  if (err instanceof Error) {
    message = err.message
  }

  if (typeof err === "object" && err !== null) {
    const e = err as CustomError
    if (e.statusCode) status = e.statusCode
    if (e.message) message = e.message
    if (e.details) details = e.details
    if (e.data) data = e.data
  }

  return sendResponse(res, status, false, message, data, details)
}
