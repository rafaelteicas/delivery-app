import { prisma } from '@/infra'
import { hash } from 'bcrypt'
import { FastifyInstance } from 'fastify'
import request from 'supertest'

type AuthenticateProps = {
  app: FastifyInstance
  role: 'ADMIN' | 'USER'
}

export async function authenticate({ app, role }: AuthenticateProps) {
  await prisma.user.create({
    data: {
      email: 'any_mail@mail.com',
      fullName: 'Any Name',
      password: await hash('12345678', 6),
      role,
    },
  })
  const auth = await request(app.server).post('/user/auth').send({
    email: 'any_mail@mail.com',
    password: '12345678',
  })

  const { token } = auth.body

  return {
    token,
  }
}
