import { DefaultError } from '../protocols/error'

export class UserAlreadyExistsError extends Error implements DefaultError {
  statusCode: number

  constructor() {
    super('User already exists')
    this.name = 'UserAlreadyExistsError'
    this.statusCode = 400
  }
}
