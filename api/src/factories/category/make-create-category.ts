import { CategoryRepositoryImpl } from '@/repositories/impl/category-repository-impl'
import { CreateCategoryUseCase } from '@/use-cases/categories/create-category-use-case'

export function makeCreateCategory() {
  const categoryRepository = new CategoryRepositoryImpl()
  return new CreateCategoryUseCase(categoryRepository)
}
