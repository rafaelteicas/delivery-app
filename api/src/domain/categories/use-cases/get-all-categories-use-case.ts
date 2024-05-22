import { Either, right } from '@/core/protocols/either'
import { Page } from '@/core/entities/page'
import { Category } from '@prisma/client'
import { CategoryRepository } from '../repositories/category-repository'
import { UseCase } from '@/core/protocols/use-case'

type GetAllCategoriesUseCaseRequest = {
  page?: number
  perPage?: number
}

type GetAllCategoriesUseCaseResponse = Either<
  null,
  { categoryList: Page<Category[]> }
>

export class GetAllCategoriesUseCase
  implements
    UseCase<GetAllCategoriesUseCaseRequest, GetAllCategoriesUseCaseResponse>
{
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async handle({
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
