import { FastifyInstance } from 'fastify'
import { createCategoryController } from '../controllers/category/create-category-controller'

export async function categoriesRoutes(app: FastifyInstance) {
  app.post('/', createCategoryController)
}
