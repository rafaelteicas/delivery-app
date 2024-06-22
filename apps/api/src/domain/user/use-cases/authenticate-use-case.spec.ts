import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository'
import { NotFoundError } from '@/core/errors/not-found-error'
import { AuthenticateUseCase } from './authenticate-use-case'

let usersRepository: InMemoryUserRepository
let sut: AuthenticateUseCase

describe('Authenticate Controller', () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUserRepository()
    sut = new AuthenticateUseCase(usersRepository)
  })

  it('should throws not found exception if user does not exist', async () => {
    const result = await sut.handle({
      email: 'john2@example.com',
      password: '123456',
    })
    expect(result.isLeft()).toBeTruthy()
    expect(result.value).toBeInstanceOf(NotFoundError)
  })

  it('should throws not found if exception password does not match', async () => {
    await usersRepository.createUser({
      email: 'john@example.com',
      fullName: 'John Doe',
      password: '123456',
    })

    const result = await sut.handle({
      email: 'john@example.com',
      password: '1234567',
    })

    expect(result.isLeft()).toBeTruthy()
    expect(result.value).toBeInstanceOf(NotFoundError)
  })

  it('should return user if correct data is provided', async () => {
    await usersRepository.createUser({
      email: 'john@example.com',
      fullName: 'John Doe',
      password: '123456',
    })

    const result = await sut.handle({
      email: 'john@example.com',
      password: '123456',
    })

    expect(result.isRight()).toBeTruthy()

    expect(usersRepository.users[0]).toEqual(
      expect.objectContaining({
        email: 'john@example.com',
        fullName: 'John Doe',
        password: expect.any(String),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      }),
    )
  })
})
