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
    for (let i = 1; i <= 20; i++) {
      await categoryRepository.create({
        name: `Category ${i}`,
      })
    }

    const { data, metadata } = await sut.execute({
      page: 2,
      perPage: 19,
    })

    expect(data).toHaveLength(1)
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          status: expect.any(Boolean),
        }),
      ]),
    )
    expect(metadata).toEqual({
      page: 2,
      perPage: 19,
      total: 20,
    })
  })
})
