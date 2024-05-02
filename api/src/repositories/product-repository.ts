import { Prisma, Product } from '@prisma/client'

export interface ProductRepository {
  create(product: Prisma.ProductCreateInput): Promise<Product>
}
