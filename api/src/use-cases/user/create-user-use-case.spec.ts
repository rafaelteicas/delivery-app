import { describe, expect, it, beforeEach } from 'vitest'
import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-user-repository'
import { Prisma } from '@prisma/client'
import { UserAlreadyExistsError } from '@/errors/user-already-exists-error'
import { CreateUserUseCase } from './create-user-use-case'

const data: Prisma.UserCreateInput & { confirmPassword: string } = {
  email: 'john@example.com',
  fullName: 'John Doe',
  password: '12345678',
  confirmPassword: '12345678',
}

let inMemoryRepository: InMemoryUserRepository
let sut: CreateUserUseCase

describe('Create User Controller', () => {
  beforeEach(() => {
    inMemoryRepository = new InMemoryUserRepository()
    sut = new CreateUserUseCase(inMemoryRepository)
  })

  it('should return UserAlreadyExists if an email already exists', async () => {
    await sut.execute(data)
    expect(() => sut.execute(data)).rejects.toBeInstanceOf(
      UserAlreadyExistsError,
    )
  })

  it('should throws an error if password and confirmPassword not match', async () => {
    expect(() =>
      sut.execute({
        email: 'john@example.com',
        fullName: 'John Doe',
        password: '12345678',
        confirmPassword: '123456789',
      }),
    ).rejects.toThrow()
  })
})
