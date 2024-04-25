import { beforeEach, describe, expect, it } from 'vitest'
import { RemoveCategoryUseCase } from './remove-category-use-case'
import { InMemoryCategoryRepository } from '@/repositories/in-memory/in-memory-category-repository'
import { NotFoundError } from '@/errors'

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

    await sut.execute(createdCategory.id)
    expect(categoryRepository.items).toEqual([])
  })

  it('should throws if category not found', async () => {
    await expect(() => sut.execute('invalid id')).rejects.toBeInstanceOf(
      NotFoundError,
    )
  })
})
