import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository'
import { Prisma } from '@prisma/client'
import { UserAlreadyExistsError } from '@/core/errors/user-already-exists-error'
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
    await sut.handle(data)

    const result = await sut.handle(data)
    expect(result.isLeft).toBeTruthy()
    expect(result.value).toBeInstanceOf(UserAlreadyExistsError)
  })

  it('should throws an error if password and confirmPassword not match', async () => {
    expect(() =>
      sut.handle({
        email: 'john@example.com',
        fullName: 'John Doe',
        password: '12345678',
        confirmPassword: '123456789',
      }),
    ).rejects.toThrow()
  })
})
