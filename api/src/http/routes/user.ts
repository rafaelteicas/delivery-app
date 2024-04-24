import { FastifyInstance } from 'fastify'
import { createUserRoute } from '../controllers/user/create-user-route'
import { authenticateRoute } from '../controllers/user/authenticate-route'
import { getUserRoute } from '../controllers/user/get-user-route'

export async function userRoutes(app: FastifyInstance) {
  app.post('/sign-up', createUserRoute)
  app.post('/auth', authenticateRoute)
  app.get('/:id', getUserRoute)
  app.get('/', getUserRoute)
}
