import { Either, right } from '@/core/protocols/either'
import { Page } from '@/core/entities/page'
import { Category } from '@prisma/client'
import { CategoryRepository } from '@/repositories/category-repository'

type GetAllCategoriesUseCaseRequest = {
  page?: number
  perPage?: number
}

type GetAllCategoriesUseCaseResponse = Either<
  null,
  { categoryList: Page<Category[]> }
>

export class GetAllCategoriesUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async execute({
    page = 1,
    perPage = 10,
  }: GetAllCategoriesUseCaseRequest): Promise<GetAllCategoriesUseCaseResponse> {
    const { categoryList } = await this.categoryRepository.getAllCategories({
      page,
      perPage,
    })

    return right({ categoryList })
  }
}
