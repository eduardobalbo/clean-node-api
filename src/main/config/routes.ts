import { Express, Router } from 'express'
import fg from 'fast-glob'

export default (app: Express): void => {
  // ler todos os arquivos dentro da pasta 'routes' dinamicamente, pela extensao routes.ts fazer import
  const router = Router()
  app.use('/api', router)
  fg.sync('**/src/main/routes/**routes.ts').map(async file => (await import(`../../../${file}`)).default(router))
}
