import { ProductRepository } from '@/repositories/product-repository'
import { UseCase } from '../use-case'

type CreateProductRequest = {
  name: string
  categoryId: string
  value: number
  productImagePath: string[]
}

export class CreateProductUseCase implements UseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute({
    name,
    categoryId,
    productImagePath,
    value,
  }: CreateProductRequest) {
    const product = await this.productRepository.create({
      name,
      category: {
        connect: {
          id: categoryId,
        },
      },
      image: productImagePath,
      value,
    })

    return product
  }
}
