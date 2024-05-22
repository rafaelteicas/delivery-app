import { describe, expect, it, beforeEach } from 'vitest'
import { GetUserByIdUseCase } from './get-user-by-id-use-case'
import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository'
import { MissingParamsError } from '@/core/errors/missing-params-error'
import { NotFoundError } from '@/core/errors/not-found-error'

let userRepository: InMemoryUserRepository
let sut: GetUserByIdUseCase

describe('Get User By Id Use Case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    sut = new GetUserByIdUseCase(userRepository)
  })
  it('should throw MissingParamsError if query is not provided', async () => {
    const result = await sut.handle({
      userId: '',
    })
    expect(result.isLeft).toBeTruthy()
    expect(result.value).toBeInstanceOf(MissingParamsError)
  })

  it('should throw NotFoundError if user does not exist', async () => {
    const result = await sut.handle({
      userId: '123456',
    })
    expect(result.value).toBeInstanceOf(NotFoundError)
  })

  it('should return user data if correct id is provided', async () => {
    const user = await userRepository.createUser({
      email: 'any@mail.com',
      fullName: 'Any Name',
      password: '1234567',
    })

    const result = await sut.handle({
      userId: user.id,
    })

    expect(result.isRight()).toBeTruthy()

    expect(userRepository.users[0]).toEqual({
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
