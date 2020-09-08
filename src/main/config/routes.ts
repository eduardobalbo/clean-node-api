import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export default (app: Express): void => {
  // ler todos os arquivos dentro da pasta 'routes' dinamicamente, pela extensao routes.ts fazer import
  const router = Router()
  app.use('/api', router)

  readdirSync(`${__dirname}/../routes`).map(async file => {
    if (!file.includes('.test.')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
