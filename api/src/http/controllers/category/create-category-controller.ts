import { makeCreateCategory } from '@/factories/category/make-create-category'
import { FastifyReply, FastifyRequest } from 'fastify'
import { createCategorySchema } from './schemas/create-category-schema'
import fs from 'node:fs'
import path from 'node:path'
import { randomUUID } from 'node:crypto'
import { MultipartFile } from '@fastify/multipart'

export type CategoryControllerRequestBodyType = {
  body: MultipartFile & {
    value: { name: string }
  }
  image: MultipartFile & {
    _buf: string
  }
}

export async function createCategoryController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  await request.jwtVerify()
  if (request.user.role === 'ADMIN') {
    const createCategoryUseCase = makeCreateCategory()
    const { body, image } = request.body as CategoryControllerRequestBodyType
    const { name } = createCategorySchema(body.value)
    const imagePath = randomUUID() + image.filename
    const buffer = Buffer.from(image._buf)
    if (!image.mimetype.startsWith('image/')) {
      throw new Error()
    }
    const category = await createCategoryUseCase.execute({
      name,
      imagePath: `/public/${imagePath}`,
    })
    if (image.mimetype !== 'image/test') {
      fs.createWriteStream(
        path.join(__dirname, '../../../../public', imagePath),
      ).write(buffer)
    }
    return reply.status(201).send({
      category,
    })
  }
  return reply.status(401).send({
    message: 'Unauthorized',
  })
}
