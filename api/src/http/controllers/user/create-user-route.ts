import { makeCreateUser } from '@/factories/make-create-user'
import { FastifyReply, FastifyRequest } from 'fastify'
import { createUserSchema } from './schemas/create-user-schema'

export async function createUserRoute(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const createUserUseCase = makeCreateUser()
    const schema = createUserSchema(request.body)
    const user = await createUserUseCase.execute(schema)

    const token = await reply.jwtSign(
      {},
      {
        sub: user.id,
      },
    )

    return reply.status(201).send({
      token,
    })
  } catch (err) {
    return reply.status(500).send({})
  }
}
