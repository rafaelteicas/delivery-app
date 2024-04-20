import fastify from 'fastify'
import { userRoutes } from '@/routes/user'
import { env } from './env'
import { serverError } from '@/controllers/errors'

export const app = fastify()

app.register(userRoutes, {
  prefix: '/user',
})

app.setErrorHandler((error, _, reply) => {
  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }
  const _serverError = serverError()
  return reply.status(_serverError.status).send(_serverError.body)
})
