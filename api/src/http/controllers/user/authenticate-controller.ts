import { makeAuthentication } from '@/factories/user/make-authenticate'
import { FastifyReply, FastifyRequest } from 'fastify'
import { authenticateSchema } from './schemas/authenticate-schema'
import { env } from '@/configs/env'

export async function authenticateController(
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

    const refreshToken = await reply.jwtSign(
      {},
      {
        sub: user.id,
        expiresIn: env.JWT_REFRESH_EXPIRES_IN,
      },
    )

    reply
      .setCookie('refreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .status(200)
      .send({
        token,
      })
  } catch (error) {
    console.error(error)
  }
}
