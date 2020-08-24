export class ServerError extends Error {
  constructor (stack: string) {
    super('Aconteceu um erro inesperado! (Internal Server Error)')
    this.name = 'ServerError'
    this.stack = stack
  }
}
