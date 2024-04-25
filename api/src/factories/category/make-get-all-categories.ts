import { CategoryRepositoryImpl } from '@/repositories/impl/category-repository-impl'
import { GetAllCategoriesUseCase } from '@/use-cases/categories/get-all-categories-use-case'

export function makeGetAllCategories() {
  const categoryRepository = new CategoryRepositoryImpl()
  return new GetAllCategoriesUseCase(categoryRepository)
}
