import { describe, it, beforeEach, expect } from 'vitest'
import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-user-repository'
import { NotFoundError } from '@/errors/not-found-error'
import { AuthenticateUseCase } from './authenticate-use-case'

let usersRepository: InMemoryUserRepository
let sut: AuthenticateUseCase

describe('Authenticate Controller', () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUserRepository()
    sut = new AuthenticateUseCase(usersRepository)
  })

  it('should throws not found exception if user does not exist', async () => {
    await expect(() =>
      sut.execute({
        email: 'john2@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(NotFoundError)
  })

  it('should throws not found if exception password does not match', async () => {
    await usersRepository.createUser({
      email: 'john@example.com',
      fullName: 'John Doe',
      password: '123456',
    })

    await expect(() =>
      sut.execute({
        email: 'john@example.com',
        password: '1234567',
      }),
    ).rejects.toThrow(NotFoundError)
  })

  it('should return user if correct data is provided', async () => {
    await usersRepository.createUser({
      email: 'john@example.com',
      fullName: 'John Doe',
      password: '123456',
    })

    const user = await sut.execute({
      email: 'john@example.com',
      password: '123456',
    })

    expect(user).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        email: expect.any(String),
        fullName: expect.any(String),
        password: expect.any(String),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      }),
    )
  })
})
