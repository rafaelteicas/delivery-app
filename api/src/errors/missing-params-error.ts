export class MissingParamsError extends Error {
  constructor() {
    super('Missing')
    this.name = 'MissingParamsError'
  }
}
