import { app } from '@/configs/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { authenticate } from '@/test/test-utils'

describe('Create Category', () => {
  beforeAll(async () => await app.ready())
  afterAll(async () => await app.close())

  it.only('should create a new category', async () => {
    const { token } = await authenticate({
      app,
      role: 'ADMIN',
    })

    const requestBody = {
      body: {
        value: 'New Category',
      },
      image: {
        _buf: '',
        filename: '',
        mimetype: 'image/test',
      },
    }

    const response = await request(app.server)
      .post('/category')
      .set('Authorization', `Bearer ${token}`)
      .send(requestBody)

    expect(response.status).toEqual(201)
    expect(response.body).toEqual(
      expect.objectContaining({
        category: expect.objectContaining({
          name: expect.any(String),
          status: expect.any(Boolean),
          image: expect.any(String),
        }),
      }),
    )
  })
})
