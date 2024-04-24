import { describe, expect, it, beforeEach } from 'vitest'
import { CreateCategoryUseCase } from './create-category-use-case'
import { InMemoryCategoryRepository } from '@/repositories/in-memory/in-memory-category-repository'

let categoryRepository: InMemoryCategoryRepository
let sut: CreateCategoryUseCase

describe('Create Category Use Case', () => {
  beforeEach(() => {
    categoryRepository = new InMemoryCategoryRepository()
    sut = new CreateCategoryUseCase(categoryRepository)
  })

  it('should be able to create a category using a name', async () => {
    const response = await sut.execute({
      name: 'New Category',
    })
    expect(response).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        status: expect.any(Boolean),
      }),
    )
  })
})
