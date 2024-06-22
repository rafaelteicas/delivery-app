import { makeGetUser } from '@/factories/user/make-get-user'
import { FastifyReply, FastifyRequest } from 'fastify'
import { getUserSchema } from './schemas/get-user-schema'

export async function getUserController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    await request.jwtVerify()

    const getUserUseCase = makeGetUser()

    const { id } = getUserSchema({ id: request.user.sub } || request.params)

    const result = await getUserUseCase.handle({ userId: id })

    if (result.isLeft()) {
      return reply
        .send({
          message: result.value.message,
        })
        .status(result.value.statusCode)
    }

    reply.status(200).send(result.value.user)
  } catch (error) {
    console.error(error)
  }
}
