import { FastifyInstance } from 'fastify'
import { createUserController } from '../controllers/user/create-user-controller'
import { authenticateController } from '../controllers/user/authenticate-controller'
import { getUserController } from '../controllers/user/get-user-controller'

export async function userRoutes(app: FastifyInstance) {
  app.post('/sign-up', createUserController)
  app.post('/auth', authenticateController)
  app.get('/:id', getUserController)
  app.get('/', getUserController)
}
