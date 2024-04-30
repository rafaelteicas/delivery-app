import { makeCreateUser } from '@/factories/user/make-create-user'

import { FastifyReply, FastifyRequest } from 'fastify'
import { createUserSchema } from './schemas/create-user-schema'
import { UserAlreadyExistsError } from '@/errors'

export async function createUserController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const createUserUseCase = makeCreateUser()
    const schema = createUserSchema(request.body)
    const user = await createUserUseCase.execute(schema)

    if (!user) {
      throw new Error()
    }

    const token = await reply.jwtSign(
      {},
      {
        sub: user.id,
      },
    )

    return reply.status(201).send({
      token,
    })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({
        message: error.message,
      })
    }
    throw error
  }
}
