import { Category, Prisma } from '@prisma/client'
import { CategoryRepository } from '../category-respository'
import { randomUUID } from 'crypto'

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

  async getAllCategories({ page = 1, perPage = 10 }) {
    const items = this.items
    const data = items.slice((page - 1) * perPage, page * perPage)

    return {
      data,
      metadata: {
        page,
        perPage,
        total: items.length,
      },
    }
  }

  async remove(categoryId: string) {
    const category = this.items.find((category) => category.id === categoryId)

    if (!category) {
      return null
    }

    const items = this.items.filter((item) => item.id !== categoryId)
    this.items = items
  }
}
