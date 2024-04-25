import { app } from '@/configs/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'

describe('Create Category', () => {
  beforeAll(async () => await app.ready())
  afterAll(async () => await app.close())

  it('should create a new category', async () => {
    const response = await request(app.server).post('/category').send({
      name: 'New Category',
    })
    expect(response.status).toEqual(201)
  })
})
