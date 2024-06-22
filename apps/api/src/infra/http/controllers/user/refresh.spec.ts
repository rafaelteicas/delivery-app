import { app } from '@/infra/configs/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'

describe('Authenticate Controller', () => {
  beforeAll(async () => await app.ready())
  afterAll(async () => await app.close())
  it('should be able to authenticate with correct credentials', async () => {
    await request(app.server).post('/user/sign-up').send({
      email: 'john@example.com',
      fullName: 'John Doe',
      password: '12345678',
      confirmPassword: '12345678',
    })

    const authResponse = await request(app.server).post('/user/auth').send({
      email: 'john@example.com',
      password: '12345678',
    })

    const cookies = authResponse.get('Set-Cookie')

    const response = await request(app.server)
      .patch('/user/token/refresh')
      .set('Cookie', cookies!)
      .send()

    expect(response.body).toEqual(
      expect.objectContaining({
        token: expect.any(String),
      }),
    )
    expect(response.get('Set-Cookie')).toEqual([
      expect.stringContaining('refreshToken='),
    ])
  })
})
