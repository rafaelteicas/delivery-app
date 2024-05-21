import { UserAlreadyExistsError } from '@/core/errors/user-already-exists-error'
import { createUserSchema } from '@/http/controllers/user/schemas/create-user-schema'
import { hash } from 'bcrypt'
import { UserRepository } from '@/repositories/user-repository'
import { Either, left, right } from '@/core/protocols/either'
import { User } from '@prisma/client'

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

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
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
