import { beforeEach, describe, expect, it } from 'vitest'
import { RemoveCategoryUseCase } from './remove-category-use-case'
import { InMemoryCategoryRepository } from '@/test/repositories/in-memory-category-repository'
import { NotFoundError } from '@/core/errors/not-found-error'

let categoryRepository: InMemoryCategoryRepository
let sut: RemoveCategoryUseCase

describe('Remove Category Use Case', () => {
  beforeEach(() => {
    categoryRepository = new InMemoryCategoryRepository()
    sut = new RemoveCategoryUseCase(categoryRepository)
  })

  it('should remove a category by id', async () => {
    const createdCategory = await categoryRepository.create({
      name: 'Category',
    })

    const result = await sut.execute({ categoryId: createdCategory.id })
    expect(result.value).toEqual({})
  })

  it('should throws if category not found', async () => {
    const result = await sut.execute({ categoryId: 'invalid id' })
    await expect(result.value).toBeInstanceOf(NotFoundError)
  })
})
