import { makeGetAllCategories } from '@/factories/category/make-get-all-categories'
import { FastifyReply, FastifyRequest } from 'fastify'
import { getAllCategoriesSchema } from './schemas/get-all-categories-schema'

export async function getAllCategoriesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getAllCategoriesUseCase = makeGetAllCategories()
  const { page, perPage } = getAllCategoriesSchema(request.params)

  const result = await getAllCategoriesUseCase.handle({
    page,
    perPage,
  })

  return reply.status(200).send({ categories: result.value?.categoryList })
}
