import { makeAuthentication } from '@/factories/make-authenticate'
import { FastifyReply, FastifyRequest } from 'fastify'
import { authenticateSchema } from './schemas/authenticate-schema'

export async function authenticateRoute(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const authenticateUseCase = makeAuthentication()
    const schema = authenticateSchema(request.body)

    const user = await authenticateUseCase.execute(schema)

    const token = await reply.jwtSign(
      {},
      {
        sub: user.id,
      },
    )

    reply.status(200).send({
      token,
    })
  } catch (error) {
    console.error(error)
  }
}
