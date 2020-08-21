import { Express } from 'express'
import { bodyParser } from '../middlewares/body-parser'

// usando os middlewares
export default (app: Express): void => {
  app.use(bodyParser)
}
