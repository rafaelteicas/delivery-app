import { beforeEach, describe, expect, it } from 'vitest'
import { CreateProductUseCase } from './create-product-use-case'
import { InMemoryProductRepository } from '@/test/repositories/in-memory-product-repository'

let productRepository: InMemoryProductRepository
let sut: CreateProductUseCase

describe('Create Product Use Case', () => {
  beforeEach(() => {
    productRepository = new InMemoryProductRepository()
    sut = new CreateProductUseCase(productRepository)
  })
  it('should be able to create a product passing categoryId', async () => {
    const result = await sut.execute({
      name: 'Any name',
      categoryId: '1234',
      productImagePath: ['image1', 'image2'],
      value: 1000,
    })

    expect(result.isRight()).toBeTruthy()
    expect(result.value?.product).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        value: expect.any(Number),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      }),
    )
  })
})
