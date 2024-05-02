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
  findById: (categoryId: string) => Promise<Category | null>
  create: (category: Prisma.CategoryCreateInput) => Promise<Category>
  getAllCategories: ({
    page,
    perPage,
  }: CategoryParams) => Promise<CategoryResponse>
  remove: (categoryId: string) => Promise<void | null>
}
