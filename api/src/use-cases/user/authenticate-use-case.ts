import { UserRepository } from '@/repositories/user-repository'
import { compare } from 'bcrypt'
import { NotFoundError } from '@/errors/not-found-error'
import { UseCase } from '../use-case'

type AuthenticateUseCaseRequest = {
  email: string
  password: string
}

export class AuthenticateUseCase implements UseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ email, password }: AuthenticateUseCaseRequest) {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new NotFoundError()
    }

    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      throw new NotFoundError()
    }

    return user
  }
}
