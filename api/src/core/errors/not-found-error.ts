import { DefaultError } from '../protocols'

export class NotFoundError extends Error implements DefaultError {
  statusCode: number
  constructor() {
    super('Not found error')
    this.name = 'NotFoundError'
    this.statusCode = 500
  }
}
