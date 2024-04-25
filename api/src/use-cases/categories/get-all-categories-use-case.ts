import { CategoryRepository } from '@/repositories/category-respository'
import { UseCase } from '../use-case'

type GetAllCategoriesUseCaseRequest = {
  page?: number
  perPage?: number
}

export class GetAllCategoriesUseCase implements UseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async execute({ page = 1, perPage = 10 }: GetAllCategoriesUseCaseRequest) {
    const categories = await this.categoryRepository.getAllCategories({
      page,
      perPage,
    })

    return categories
  }
}
