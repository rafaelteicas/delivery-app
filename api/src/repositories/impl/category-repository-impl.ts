import { Prisma } from '@prisma/client'
import { CategoryRepository } from '../category-respository'
import { prisma } from '@/libs/db/prisma'

type CategoryParams = {
  page?: number
  perPage?: number
}

export class CategoryRepositoryImpl implements CategoryRepository {
  async create(category: Prisma.CategoryCreateInput) {
    const createdCategory = await prisma.category.create({
      data: category,
    })
    return createdCategory
  }

  async getAllCategories({ page = 1, perPage = 10 }: CategoryParams) {
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      skip: (page - 1) * perPage,
      take: perPage,
    })

    return {
      data: categories,
      metadata: {
        page,
        perPage,
        total: categories.length,
      },
    }
  }

  async remove(categoryId: string) {
    await prisma.category.delete({
      where: {
        id: categoryId,
      },
    })
  }
}
