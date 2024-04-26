import { makeCreateCategory } from '@/factories/category/make-create-category'
import { FastifyReply, FastifyRequest } from 'fastify'
import { createCategorySchema } from './schemas/create-category-schema'

export async function createCategoryController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    await request.jwtVerify()
    console.log(request.user)

    const { name } = createCategorySchema(request.body)
    const createCategoryUseCase = makeCreateCategory()
    if (request.user.role === 'ADMIN') {
      const category = await createCategoryUseCase.execute({
        name,
      })
      return reply.status(201).send({
        category,
      })
    }
    return reply.status(401).send({
      message: 'Unauthorized',
    })
  } catch (err) {
    console.log(err)
  }
}
