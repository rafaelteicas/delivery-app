import { Either, right } from '@/core/protocols/either'
import { ProductRepository } from '@/repositories/product-repository'
import { Product } from '@prisma/client'

type CreateProductRequest = {
  name: string
  categoryId: string
  value: number
  productImagePath: string[]
}

type CreateProductResponse = Either<
  null,
  {
    product: Product
  }
>

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute({
    name,
    categoryId,
    productImagePath,
    value,
  }: CreateProductRequest): Promise<CreateProductResponse> {
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

    return right({ product })
  }
}
