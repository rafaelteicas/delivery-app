import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '@/infra/configs/app'
import { authenticate } from '@/test/test-utils'

describe('Remove Category Controller', () => {
  beforeAll(async () => await app.ready())
  afterAll(async () => await app.close())
  it('should remove category when correct categoryId is provided', async () => {
    const { token } = await authenticate({
      app,
      role: 'ADMIN',
    })

    const requestBody = {
      body: {
        value: {
          name: 'New Category',
        },
      },
      image: {
        _buf: '',
        filename: '',
        mimetype: 'image/test',
      },
    }

    const category = await request(app.server)
      .post('/category')
      .set('Authorization', `Bearer ${token}`)
      .send(requestBody)

    const response = await request(app.server).delete(
      `/category/${category.body.id}`,
    )

    expect(response.statusCode).toEqual(200)
  })
})
