import { Category, Prisma } from '@prisma/client'
import { CategoryRepository } from '../category-repository'
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
    const data = await prisma.category.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      skip: (page - 1) * perPage,
      take: perPage,
    })

    return {
      categoryList: {
        data,
        metadata: {
          page,
          perPage,
          total: await prisma.category.count(),
        },
      },
    }
  }

  async remove(category: Category) {
    await prisma.category.delete({
      where: {
        id: category.id,
      },
    })
  }

  async findById(categoryId: string) {
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    })
    if (!category) {
      return null
    }
    return category
  }
}
