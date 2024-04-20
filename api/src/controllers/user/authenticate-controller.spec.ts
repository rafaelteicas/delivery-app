import { describe, it, beforeEach, expect } from 'vitest'
import { AuthenticateController } from './authenticate-controller'
import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-user-repository'
import { badRequest } from '../errors'
import { NotFoundError } from '@/errors/not-found-error'

let usersRepository: InMemoryUserRepository
let sut: AuthenticateController

describe('Authenticate Controller', () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUserRepository()
    sut = new AuthenticateController(usersRepository)
  })

  it('should return not found if user does not exist', async () => {
    const response = await sut.handler({
      body: {
        email: 'john2@example.com',
        password: '123456',
      },
    })

    expect(response).toEqual(badRequest(new NotFoundError()))
  })

  it('should return not found if password does not match', async () => {
    await usersRepository.createUser({
      email: 'john@example.com',
      fullName: 'John Doe',
      password: '123456',
    })

    const response = await sut.handler({
      body: {
        email: 'john@example.com',
        password: '1234567',
      },
    })

    expect(response).toEqual(badRequest(new NotFoundError()))
  })

  it('should return 200 if correct data is provided', async () => {
    await usersRepository.createUser({
      email: 'john@example.com',
      fullName: 'John Doe',
      password: '123456',
    })

    const response = await sut.handler({
      body: {
        email: 'john@example.com',
        password: '123456',
      },
    })

    expect(response.status).toEqual(200)
  })
})
