import { NotFoundError } from '@/core/errors/not-found-error'
import { Either, left, right } from '@/core/protocols/either'
import { CategoryRepository } from '../repositories/category-repository'
import { UseCase } from '@/core/protocols/use-case'

type RemoveCategoryUseCaseRequest = {
  categoryId: string
}

type RemoveCategoryUseCaseResponse = Either<NotFoundError, object>
export class RemoveCategoryUseCase
  implements
    UseCase<RemoveCategoryUseCaseRequest, RemoveCategoryUseCaseResponse>
{
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async handle({
    categoryId,
  }: RemoveCategoryUseCaseRequest): Promise<RemoveCategoryUseCaseResponse> {
    const category = await this.categoryRepository.findById(categoryId)

    if (!category) {
      return left(new NotFoundError())
    }

    await this.categoryRepository.remove(category)

    return right({})
  }
}
