import { makeCreateUser } from '@/factories/user/make-create-user'

import { FastifyReply, FastifyRequest } from 'fastify'
import { createUserSchema } from './schemas/create-user-schema'

export async function createUserController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createUserUseCase = makeCreateUser()
  const schema = createUserSchema(request.body)
  const result = await createUserUseCase.execute(schema)

  if (result.isRight()) {
    const token = await reply.jwtSign(
      {},
      {
        sub: result.value.user.id,
      },
    )

    return reply.status(201).send({
      token,
    })
  }

  if (result.isLeft()) {
    return reply.status(result.value.statusCode).send({
      message: result.value.message,
    })
  }
}
