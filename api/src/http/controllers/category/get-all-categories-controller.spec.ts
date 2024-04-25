import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '@/configs/app'

describe('Get All Categories Controller', () => {
  beforeAll(async () => await app.ready())
  afterAll(async () => await app.close())
  it('should get all categories', async () => {
    for (let i = 1; i <= 3; i++) {
      await request(app.server)
        .post('/category')
        .send({
          name: 'New Category' + i,
        })
    }

    const response = await request(app.server)
      .get('/category')
      .query({ page: 1, perPage: 10 })

    expect(response.body).toEqual(
      expect.objectContaining({
        categories: expect.objectContaining({
          data: expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
              status: expect.any(Boolean),
            }),
          ]),
          metadata: expect.objectContaining({
            page: expect.any(Number),
            perPage: expect.any(Number),
            total: expect.any(Number),
          }),
        }),
      }),
    )
  })
})
