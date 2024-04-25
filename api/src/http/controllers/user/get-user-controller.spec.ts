import { app } from '@/configs/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'

describe('Get User Controller', () => {
  beforeAll(async () => await app.ready())
  afterAll(async () => await app.close())
  it('should be able to get self profile data when authenticated', async () => {
    await request(app.server).post('/user/sign-up').send({
      email: 'john@example.com',
      fullName: 'John Doe',
      password: '12345678',
      confirmPassword: '12345678',
    })

    const createdUser = await request(app.server).post('/user/auth').send({
      email: 'john@example.com',
      password: '12345678',
    })

    const req = await request(app.server)
      .get('/user')
      .set('Authorization', `Bearer ${createdUser.body.token}`)

    expect(req.body).toEqual(
      expect.objectContaining({
        email: expect.any(String),
      }),
    )
  })
})
