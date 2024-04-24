import { CategoryRepository } from '@/repositories/category-respository'
import { UseCase } from '../use-case'

export class GetAllCategoriesUseCase implements UseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async execute() {
    const categories = await this.categoryRepository.getAllCategories()
    return categories
  }
}
