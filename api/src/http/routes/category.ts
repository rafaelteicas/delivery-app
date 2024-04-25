import { FastifyInstance } from 'fastify'
import { createCategoryController } from '../controllers/category/create-category-controller'
import { getAllCategoriesController } from '../controllers/category/get-all-categories-controller'

export async function categoriesRoutes(app: FastifyInstance) {
  app.post('/', createCategoryController)
  app.get('/', getAllCategoriesController)
}
