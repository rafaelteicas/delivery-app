import { MissingParamsError } from '@/core/errors/missing-params-error'
import { NotFoundError } from '@/core/errors/not-found-error'
import { Either, left, right } from '@/core/protocols/either'
import { UserRepository } from '@/repositories/user-repository'
import { User } from '@prisma/client'

type GetUserByIdUseCaseRequest = {
  userId: string
}

type GetUserByIdUseCaseResponse = Either<
  MissingParamsError | NotFoundError,
  { user: User }
>

export class GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    userId,
  }: GetUserByIdUseCaseRequest): Promise<GetUserByIdUseCaseResponse> {
    if (!userId) {
      return left(new MissingParamsError())
    }

    const user = await this.userRepository.findById(userId)

    if (!user) {
      return left(new NotFoundError())
    }

    return right({
      user,
    })
  }
}
