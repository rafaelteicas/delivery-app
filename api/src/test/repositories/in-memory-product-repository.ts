import { Prisma, Product } from '@prisma/client'
import { randomUUID } from 'crypto'
import { Decimal } from '@prisma/client/runtime/library'
import { ProductRepository } from '@/domain/products/repositories/product-repository'

export class InMemoryProductRepository implements ProductRepository {
  products: Product[] = []

  async create(product: Prisma.ProductCreateInput & { categoryId: string }) {
    const createdProduct = {
      id: randomUUID(),
      name: product.name,
      image: product.image! as string[],
      value: product.value as Decimal,
      categoryId: product.categoryId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.products.push(createdProduct)
    return createdProduct
  }
}
