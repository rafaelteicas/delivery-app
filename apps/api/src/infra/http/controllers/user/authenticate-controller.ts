import { makeAuthentication } from '@/factories/user/make-authenticate'
import { FastifyReply, FastifyRequest } from 'fastify'
import { authenticateSchema } from './schemas/authenticate-schema'
import { env } from '@/infra'

export async function authenticateController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateUseCase = makeAuthentication()
  const schema = authenticateSchema(request.body)

  const result = await authenticateUseCase.handle(schema)

  if (result.isLeft()) {
    return reply
      .send({
        message: result.value.message,
      })
      .status(result.value.statusCode)
  }

  const token = await reply.jwtSign(
    {
      role: result.value.user.role,
    },
    {
      sub: result.value.user.id,
    },
  )

  const refreshToken = await reply.jwtSign(
    {},
    {
      sub: result.value.user.id,
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
}
