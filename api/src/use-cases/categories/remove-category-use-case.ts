import { CategoryRepository } from '@/repositories/category-respository'
import { UseCase } from '../use-case'
import { NotFoundError } from '@/errors'

export class RemoveCategoryUseCase implements UseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async execute(categoryId: string) {
    const removeCategory = await this.categoryRepository.remove(categoryId)

    if (removeCategory === null) {
      throw new NotFoundError()
    }

    return removeCategory
  }
}
