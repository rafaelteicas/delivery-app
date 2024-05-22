import { UserAlreadyExistsError } from '@/core/errors/user-already-exists-error'
import { createUserSchema } from '@/infra/http/controllers/user/schemas/create-user-schema'
import { hash } from 'bcrypt'
import { Either, left, right } from '@/core/protocols/either'
import { User } from '@prisma/client'
import { UserRepository } from '../repositories/user-repository'
import { UseCase } from '@/core/protocols/use-case'

const SALT = 6

export type CreateUserUseCaseRequest = {
  email: string
  fullName: string
  password: string
  confirmPassword: string
}

type CreateUserUseCaseResponse = Either<
  UserAlreadyExistsError,
  {
    user: User
  }
>

export class CreateUserUseCase
  implements UseCase<CreateUserUseCaseRequest, CreateUserUseCaseResponse>
{
  constructor(private userRepository: UserRepository) {}

  async handle(
    data: CreateUserUseCaseRequest,
  ): Promise<CreateUserUseCaseResponse> {
    const { email, fullName, password } = createUserSchema(data)

    const userEmailAlreadyExists = await this.userRepository.findByEmail(email)

    if (userEmailAlreadyExists) {
      return left(new UserAlreadyExistsError())
    }

    const hashedPassword = await hash(password, SALT)

    const user = await this.userRepository.createUser({
      email,
      fullName,
      password: hashedPassword,
    })

    return right({ user })
  }
}
