import { Either, right } from '@/core/protocols/either'
import { CategoryRepository } from '@/repositories/category-repository'

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

export class CreateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async execute({
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
