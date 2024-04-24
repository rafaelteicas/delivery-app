import { Category, Prisma } from '@prisma/client'
import { CategoryRepository } from '../category-respository'
import { randomUUID } from 'crypto'

export class InMemoryCategoryRepository implements CategoryRepository {
  items: Category[] = []

  async create(category: Prisma.CategoryCreateInput) {
    const createdCategory = {
      id: randomUUID(),
      name: category.name,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.items.push(createdCategory)
    return createdCategory
  }
}
