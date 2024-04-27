import { CategoryRepository } from '@/repositories/category-respository'
import { UseCase } from '../use-case'

type CreateCategoryUseCaseRequest = {
  name: string
  imagePath?: string
}

type CreateCategoryUseCaseResponse = {
  id: string
  name: string
  status: boolean
  createdAt: Date
  updatedAt: Date
}

export class CreateCategoryUseCase implements UseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async execute({
    name,
    imagePath,
  }: CreateCategoryUseCaseRequest): Promise<CreateCategoryUseCaseResponse> {
    const createdCategory = await this.categoryRepository.create({
      name,
      image: imagePath,
    })
    if (!createdCategory) {
      throw new Error()
    }
    return createdCategory
  }
}
