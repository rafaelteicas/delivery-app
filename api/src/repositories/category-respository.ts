import { Category, Prisma } from '@prisma/client'

export interface CategoryRepository {
  create: (category: Prisma.CategoryCreateInput) => Promise<Category | null>
  getAllCategories: () => Promise<Category[] | null>
}
