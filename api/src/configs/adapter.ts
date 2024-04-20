import { Controller } from '@/controllers/controller'
import { FastifyReply, FastifyRequest } from 'fastify'

export const fastifyAdapter = (controller: Controller) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const response = await controller.handler(request)
    return reply.status(response.status).send(response.body)
  }
}
