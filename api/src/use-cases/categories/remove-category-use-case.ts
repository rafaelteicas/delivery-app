import { NotFoundError } from '@/core/errors/not-found-error'
import { Either, left, right } from '@/core/protocols/either'
import { CategoryRepository } from '@/repositories/category-repository'

type RemoveCategoryUseCaseRequest = {
  categoryId: string
}

type RemoveCategoryUseCaseResponse = Either<NotFoundError, object>
export class RemoveCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async execute({
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
