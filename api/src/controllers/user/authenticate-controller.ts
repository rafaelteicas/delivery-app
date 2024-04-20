import { UserRepository } from '@/repositories/user-repository'
import { Controller, HttpRequest, HttpResponse } from '../controller'
import { compare } from 'bcrypt'
import { badRequest, serverError } from '../errors'
import { NotFoundError } from '@/errors/not-found-error'

export class AuthenticateController implements Controller {
  constructor(private readonly userRepository: UserRepository) {}

  async handler(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = request.body

      const user = await this.userRepository.findByEmail(email)

      if (!user) {
        return badRequest(new NotFoundError())
      }

      const isPasswordValid = await compare(password, user.password)

      if (!isPasswordValid) {
        return badRequest(new NotFoundError())
      }

      return {
        body: {},
        status: 200,
      }
    } catch (error) {
      return serverError()
    }
  }
}
