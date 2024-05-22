import { CategoryRepositoryImpl } from '@/infra/repositories/category-repository-impl'
import { CreateCategoryUseCase } from '@/domain/categories/use-cases/create-category-use-case'

export function makeCreateCategory() {
  const categoryRepository = new CategoryRepositoryImpl()
  return new CreateCategoryUseCase(categoryRepository)
}
