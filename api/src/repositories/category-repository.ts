import { Page } from '@/core/entities/page'
import { Category, Prisma } from '@prisma/client'

type CategoryParams = {
  page?: number
  perPage?: number
}

type CategoryResponse = {
  categoryList: Page<Category[]>
}

export interface CategoryRepository {
  findById: (categoryId: string) => Promise<Category | null>
  create: (category: Prisma.CategoryCreateInput) => Promise<Category>
  getAllCategories: ({
    page,
    perPage,
  }: CategoryParams) => Promise<CategoryResponse>
  remove: (category: Category) => Promise<void>
}
