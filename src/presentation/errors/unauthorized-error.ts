export class UnauthorizedError extends Error {
  constructor () {
    super('Aconteceu um erro! (Unauthorized)')
    this.name = 'UnauthorizedError'
  }
}
