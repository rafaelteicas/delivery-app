import fastify from 'fastify'
import { userRoutes } from '@/http/routes/user'
import { env } from './env'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import cors from '@fastify/cors'
import { categoriesRoutes } from '@/http/routes/category'
import fastifyMultipart from '@fastify/multipart'
import fastifyStatic from '@fastify/static'
import path from 'path'

export const app = fastify()

// Plugins

app.register(cors, {
  origin: true,
  credentials: true,
})

app.register(fastifyCookie)

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: env.JWT_EXPIRES_IN,
  },
})

app.register(fastifyMultipart, {
  attachFieldsToBody: true,
  prefix: 'image',
})

app.register(fastifyStatic, {
  root: path.join(__dirname, '../../public'),
  prefix: '/public/',
})

// Routes

app.register(userRoutes, {
  prefix: '/user',
})

app.register(categoriesRoutes, {
  prefix: '/category',
})

app.setErrorHandler((error, _, reply) => {
  if (env.NODE_ENV !== 'production') {
    console.error('ERROR HANDLER ' + error)
  }

  if (
    error.code === 'FST_JWT_NO_AUTHORIZATION_IN_COOKIE' ||
    error.code === 'FST_JWT_AUTHORIZATION_TOKEN_EXPIRED'
  ) {
    return reply.status(401).send({
      message: 'Unauthorized',
    })
  }

  return reply.status(500).send({
    message: 'Internal Server Error',
  })
})
