import fastify from 'fastify'
import { userRoutes } from '@/http/routes/user'
import { env } from './env'
import fastifyJwt from '@fastify/jwt'
import cors from '@fastify/cors'
import { categoriesRoutes } from '@/http/routes/category'

export const app = fastify()

app.register(cors, {
  origin: true,
  credentials: true,
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(userRoutes, {
  prefix: '/user',
})

app.register(categoriesRoutes, {
  prefix: '/category',
})

app.setErrorHandler((error, _, reply) => {
  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }
  return reply.status(500).send({
    message: 'Internal Server Error',
  })
})
