import { UserRepository } from '@/repositories/user-repository'
import { UseCase } from '../use-case'
import { MissingParamsError, NotFoundError } from '@/errors'

export class GetUserByIdUseCase implements UseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string) {
    if (!userId) {
      throw new MissingParamsError()
    }

    const user = await this.userRepository.findById(userId)

    if (!user) {
      throw new NotFoundError()
    }

    return user
  }
}
