import { describe, expect, it, beforeEach } from 'vitest'
import { CreateUserController } from './create-user-controller'
import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-user-repository'
import { Prisma } from '@prisma/client'
import { badRequest } from '../errors'
import { UserAlreadyExistsError } from '@/errors/user-already-exists-error'

const userBody: Prisma.UserCreateInput & { confirmPassword: string } = {
  email: 'john@example.com',
  fullName: 'John Doe',
  password: '12345678',
  confirmPassword: '12345678',
}

let inMemoryRepository: InMemoryUserRepository
let sut: CreateUserController

describe('Create User Controller', () => {
  beforeEach(() => {
    inMemoryRepository = new InMemoryUserRepository()
    sut = new CreateUserController(inMemoryRepository)
  })

  it('should return UserAlreadyExists if an email already exists', async () => {
    await sut.handler({
      body: userBody,
    })
    const response = await sut.handler({ body: userBody })
    expect(response).toEqual(badRequest(new UserAlreadyExistsError()))
  })

  it('should throws an error if password and confirmPassword not match', async () => {
    const response = await sut.handler({
      body: {
        email: 'john@example.com',
        fullName: 'John Doe',
        password: '12345678',
        confirmPassword: '123456789',
      },
    })
    expect(response).toEqual({
      body: {
        message: 'Password not match',
      },
      status: 400,
    })
  })

  it('should return ok if correct data is provided', async () => {
    const response = await sut.handler({
      body: userBody,
    })
    expect(response).toEqual({
      body: '',
      status: 201,
    })
  })
})
