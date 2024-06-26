import { DefaultError } from '../protocols'

export class MissingParamsError extends Error implements DefaultError {
  statusCode: number

  constructor() {
    super('Missing')
    this.name = 'MissingParamsError'
    this.statusCode = 400
  }
}
