import { describe, expect, it, beforeEach } from 'vitest'
import { GetUserByIdUseCase } from './get-user-by-id-use-case'
import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-user-repository'
import { MissingParamsError, NotFoundError } from '@/errors'

let userRepository: InMemoryUserRepository
let sut: GetUserByIdUseCase

describe('Get User By Id Use Case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    sut = new GetUserByIdUseCase(userRepository)
  })
  it('should throw MissingParamsError if query is not provided', () => {
    expect(() => sut.execute('')).rejects.toBeInstanceOf(MissingParamsError)
  })

  it('should throw NotFoundError if user does not exist', () => {
    expect(() => sut.execute('123456')).rejects.toBeInstanceOf(NotFoundError)
  })

  it('should return user data if correct id is provided', async () => {
    const createdUser = await userRepository.createUser({
      email: 'any@mail.com',
      fullName: 'Any Name',
      password: '1234567',
    })

    const user = await sut.execute(createdUser.id)

    expect(user).toMatchObject({
      id: expect.any(String),
      email: expect.any(String),
      fullName: expect.any(String),
      role: expect.any(String),
      password: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    })
  })
})
