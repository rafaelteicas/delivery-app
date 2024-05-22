import { CreateCategoryUseCase } from './create-category-use-case'
import { InMemoryCategoryRepository } from '@/test/repositories/in-memory-category-repository'

let categoryRepository: InMemoryCategoryRepository
let sut: CreateCategoryUseCase

describe('Create Category Use Case', () => {
  beforeEach(() => {
    categoryRepository = new InMemoryCategoryRepository()
    sut = new CreateCategoryUseCase(categoryRepository)
  })

  it('should be able to create a category using a name', async () => {
    const result = await sut.handle({
      value: 'New Category',
    })

    expect(result.value?.category).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        status: expect.any(Boolean),
      }),
    )
  })
})
