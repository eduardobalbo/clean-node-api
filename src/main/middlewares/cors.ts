import { Request, Response, NextFunction } from 'express'

export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('access-control-allow-origin', '*') // setar um header
  res.set('access-control-allow-headers', '*') // setar um header
  res.set('access-control-allow-methods', '*') // setar um header
  next()
}
