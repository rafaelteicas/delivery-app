import { makeGetUser } from '@/factories/make-get-user'
import { FastifyReply, FastifyRequest } from 'fastify'
import { getUserSchema } from './schemas/get-user-schema'

export async function getUserRoute(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    await request.jwtVerify()

    const getUserUseCase = makeGetUser()

    const { id } = getUserSchema({ id: request.user.sub } || request.params)

    const user = await getUserUseCase.execute(id)

    reply.status(200).send(user)
  } catch (error) {
    console.error(error)
  }
}
