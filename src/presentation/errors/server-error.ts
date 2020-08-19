export class ServerError extends Error {
  constructor () {
    super('Aconteceu um erro inesperado! (Internal Server Error)')
    this.name = 'InvalidParamError'
  }
}
