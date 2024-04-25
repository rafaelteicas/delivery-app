import { makeCreateCategory } from '@/factories/category/make-create-category'
import { FastifyReply, FastifyRequest } from 'fastify'
import { createCategorySchema } from './schemas/create-category-schema'

export async function createCategoryController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { name } = createCategorySchema(request.body)
    const createCategoryUseCase = makeCreateCategory()
    const category = await createCategoryUseCase.execute({
      name,
    })
    return reply.status(201).send({
      category,
    })
  } catch (err) {
    console.log(err)
  }
}
