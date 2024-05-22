import { CategoryRepositoryImpl } from '@/infra/repositories/category-repository-impl'
import { RemoveCategoryUseCase } from '@/domain/categories/use-cases/remove-category-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { removeCategorySchema } from './schemas/remove-category-schema'

export async function removeCategoryController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const categoryRepository = new CategoryRepositoryImpl()
    const removeCategoryUseCase = new RemoveCategoryUseCase(categoryRepository)
    const { id } = removeCategorySchema(request.params)
    await removeCategoryUseCase.handle({ categoryId: id })
    return reply.status(200).send()
  } catch (error) {
    console.log(error)
  }
}
