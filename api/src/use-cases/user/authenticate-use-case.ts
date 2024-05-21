import { UserRepository } from '@/repositories/user-repository'
import { compare } from 'bcrypt'
import { NotFoundError } from '@/core/errors/not-found-error'
import { Either, left, right } from '@/core/protocols/either'
import { User } from '@prisma/client'

type AuthenticateUseCaseRequest = {
  email: string
  password: string
}

type AuthenticateUseCaseResponse = Either<NotFoundError, { user: User }>

export class AuthenticateUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
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
