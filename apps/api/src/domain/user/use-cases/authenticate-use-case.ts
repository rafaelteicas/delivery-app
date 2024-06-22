import { compare } from 'bcrypt'
import { NotFoundError } from '@/core/errors/not-found-error'
import { Either, left, right } from '@/core/protocols/either'
import { User } from '@prisma/client'
import { UseCase } from '@/core/protocols/use-case'
import { UserRepository } from '../repositories/user-repository'

type AuthenticateUseCaseRequest = {
  email: string
  password: string
}

type AuthenticateUseCaseResponse = Either<NotFoundError, { user: User }>

export class AuthenticateUseCase
  implements UseCase<AuthenticateUseCaseRequest, AuthenticateUseCaseResponse>
{
  constructor(private readonly userRepository: UserRepository) {}

  async handle({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      return left(new NotFoundError())
    }

    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      return left(new NotFoundError())
    }

    return right({ user })
  }
}
