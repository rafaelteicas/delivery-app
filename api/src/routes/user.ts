import { FastifyInstance } from 'fastify'
import { CreateUserController } from '@/controllers/user/create-user-controller'
import { UserRepositoryImpl } from '@/repositories/impl/user-repository-impl'
import { fastifyAdapter } from '@/configs/adapter'

export async function userRoutes(app: FastifyInstance) {
  const createUserRepositoryImpl = new UserRepositoryImpl()
  const createUserController = new CreateUserController(
    createUserRepositoryImpl,
  )

  app.post('/', fastifyAdapter(createUserController))
}
