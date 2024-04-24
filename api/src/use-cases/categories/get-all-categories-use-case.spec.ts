import { beforeEach, describe, expect, it } from 'vitest'
import { GetAllCategoriesUseCase } from './get-all-categories-use-case'
import { InMemoryCategoryRepository } from '@/repositories/in-memory/in-memory-category-repository'

let categoryRepository: InMemoryCategoryRepository
let sut: GetAllCategoriesUseCase

describe('Get All Categories Use Case', () => {
  beforeEach(() => {
    categoryRepository = new InMemoryCategoryRepository()
    sut = new GetAllCategoriesUseCase(categoryRepository)
  })

  it('should return all categories', async () => {
    categoryRepository.create({
      name: 'Category 1',
    })
    categoryRepository.create({
      name: 'Category 2',
    })
    const categories = await sut.execute()

    expect(categories).toHaveLength(2)
    expect(categories).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          status: expect.any(Boolean),
        }),
      ]),
    )
  })
})
