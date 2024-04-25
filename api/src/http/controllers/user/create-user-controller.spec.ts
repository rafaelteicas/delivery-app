import { app } from '@/configs/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'

describe('Create User Controller', () => {
  beforeAll(async () => await app.ready())
  afterAll(async () => await app.close())
  it('should be able to create a user when correct data is provided', async () => {
    const response = await request(app.server).post('/user/sign-up').send({
      email: 'john@example.com',
      fullName: 'John Doe',
      password: '12345678',
      confirmPassword: '12345678',
    })
    expect(response.body).toEqual(
      expect.objectContaining({ token: expect.any(String) }),
    )
    expect(response.status).toBe(201)
  })
})
