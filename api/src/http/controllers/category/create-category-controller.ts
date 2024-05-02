import { makeCreateCategory } from '@/factories/category/make-create-category'
import { FastifyReply, FastifyRequest } from 'fastify'
import { createCategorySchema } from './schemas/create-category-schema'
import fs from 'node:fs'
import path from 'node:path'
import { randomUUID } from 'node:crypto'
import { MultipartFile } from '@fastify/multipart'

export type CategoryControllerRequestBodyType = {
  body: MultipartFile & {
    value: string
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
  try {
    if (request.user.role === 'ADMIN') {
      const createCategoryUseCase = makeCreateCategory()
      const { body, image } = request.body as CategoryControllerRequestBodyType
      const { value } = createCategorySchema(body)
      const imagePath = (randomUUID() + image.filename).trim()
      const buffer = Buffer.from(image._buf)
      if (!image.mimetype.startsWith('image/')) {
        return reply.status(415).send({
          message: 'Unsupported Media Type',
        })
      }
      const category = await createCategoryUseCase.execute({
        value,
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
  } catch (error) {
    console.log(error)
  }
}
