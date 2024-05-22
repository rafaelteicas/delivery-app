import { Either, right } from '@/core/protocols/either'
import { Product } from '@prisma/client'
import { ProductRepository } from '../repositories/product-repository'
import { UseCase } from '@/core/protocols/use-case'

type CreateProductUseCaseRequest = {
  name: string
  categoryId: string
  value: number
  productImagePath: string[]
}

type CreateProductUseCaseResponse = Either<
  null,
  {
    product: Product
  }
>

export class CreateProductUseCase
  implements UseCase<CreateProductUseCaseRequest, CreateProductUseCaseResponse>
{
  constructor(private readonly productRepository: ProductRepository) {}

  async handle({
    name,
    categoryId,
    productImagePath,
    value,
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
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
