<<<<<<< HEAD:api/src/infra/http/controllers/user/refresh.ts
import { env } from '@/infra'
=======
import { env } from '@/infra/configs'
>>>>>>> c61e4a694c663e1d1de21361300f19d16c62c931:api/src/http/controllers/user/refresh.ts
import { FastifyReply, FastifyRequest } from 'fastify'

export async function refreshController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  await request.jwtVerify({
    onlyCookie: true,
  })

  const token = await reply.jwtSign(
    {
      role: request.user.role,
    },
    {
      sub: request.user.sub,
    },
  )

  const refreshToken = await reply.jwtSign(
    {},
    {
      sub: request.user.sub,
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
