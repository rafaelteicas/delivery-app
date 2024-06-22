import { Either, right } from '@/core/protocols/either'
import { CategoryRepository } from '../repositories/category-repository'
import { UseCase } from '@/core/protocols/use-case'

type CreateCategoryUseCaseRequest = {
  value: string
  imagePath?: string
}

type CreateCategoryUseCaseResponse = Either<
  null,
  {
    category: {
      id: string
      name: string
      status: boolean
      createdAt: Date
      updatedAt: Date
    }
  }
>

export class CreateCategoryUseCase
  implements
    UseCase<CreateCategoryUseCaseRequest, CreateCategoryUseCaseResponse>
{
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async handle({
    value,
    imagePath,
  }: CreateCategoryUseCaseRequest): Promise<CreateCategoryUseCaseResponse> {
    const category = await this.categoryRepository.create({
      name: value,
      image: imagePath,
    })
    return right({ category })
  }
}
