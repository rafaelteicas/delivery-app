import { Category, Prisma } from '@prisma/client'
import { randomUUID } from 'crypto'
import { Page } from '@/core/entities/page'
import { CategoryRepository } from '@/repositories/category-repository'

export class InMemoryCategoryRepository implements CategoryRepository {
  items: Category[] = []

  async create(category: Prisma.CategoryCreateInput) {
    const createdCategory = {
      id: randomUUID().toString(),
      name: category.name,
      image: category.image!,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.items.push(createdCategory)
    return createdCategory
  }

  async getAllCategories({
    page = 1,
    perPage = 10,
  }): Promise<{ categoryList: Page<Category[]> }> {
    const items = this.items
    const data = items.slice((page - 1) * perPage, page * perPage)

    return {
      categoryList: {
        data,
        metadata: { page, perPage, total: items.length },
      },
    }
  }

  async remove(category: Category) {
    const categoryIndex = this.items.findIndex(
      (categoryToDelete) => categoryToDelete.id === category.id,
    )
    this.items.splice(categoryIndex, 1)
  }

  async findById(categoryId: string) {
    const item = this.items.find((item) => item.id === categoryId)
    if (!item) {
      return null
    }
    return item
  }
}
