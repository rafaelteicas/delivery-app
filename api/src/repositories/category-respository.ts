import { Category, Prisma } from '@prisma/client'

type CategoryParams = {
  page?: number
  perPage?: number
}

type CategoryResponse = {
  data: Category[]
  metadata: {
    page: number
    perPage: number
    total: number
  }
}

export interface CategoryRepository {
  create: (category: Prisma.CategoryCreateInput) => Promise<Category | null>
  getAllCategories: ({
    page,
    perPage,
  }: CategoryParams) => Promise<CategoryResponse>
  remove: (categoryId: string) => Promise<void | null>
}
