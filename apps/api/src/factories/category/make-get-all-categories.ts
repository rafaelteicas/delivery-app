import { CategoryRepositoryImpl } from '@/infra/repositories/category-repository-impl'
import { GetAllCategoriesUseCase } from '@/domain/categories/use-cases/get-all-categories-use-case'

export function makeGetAllCategories() {
  const categoryRepository = new CategoryRepositoryImpl()
  return new GetAllCategoriesUseCase(categoryRepository)
}
