import { makeGetAllCategories } from '@/factories/category/make-get-all-categories'
import { FastifyReply, FastifyRequest } from 'fastify'
import { getAllCategoriesSchema } from './schemas/get-all-categories-schema'

export async function getAllCategoriesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const getAllCategoriesUseCase = makeGetAllCategories()
    const { page, perPage } = getAllCategoriesSchema(request.params)

    const categories = await getAllCategoriesUseCase.execute({
      page,
      perPage,
    })

    return reply.status(200).send({ categories })
  } catch (error) {
    console.log(error)
  }
}
