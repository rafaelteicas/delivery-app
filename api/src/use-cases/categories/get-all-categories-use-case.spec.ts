import { GetAllCategoriesUseCase } from './get-all-categories-use-case'
import { InMemoryCategoryRepository } from '@/test/repositories/in-memory-category-repository'

let categoryRepository: InMemoryCategoryRepository
let sut: GetAllCategoriesUseCase

describe('Get All Categories Use Case', () => {
  beforeEach(() => {
    categoryRepository = new InMemoryCategoryRepository()
    sut = new GetAllCategoriesUseCase(categoryRepository)
  })

  it('should return all categories', async () => {
    for (let i = 1; i <= 20; i++) {
      await categoryRepository.create({
        name: `Category ${i}`,
      })
    }

    const result = await sut.execute({
      page: 2,
      perPage: 19,
    })

    expect(result.value?.categoryList.data).toHaveLength(1)
    expect(result.value?.categoryList.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          status: expect.any(Boolean),
        }),
      ]),
    )
    expect(result.value?.categoryList.metadata).toEqual({
      page: 2,
      perPage: 19,
      total: 20,
    })
  })
})
