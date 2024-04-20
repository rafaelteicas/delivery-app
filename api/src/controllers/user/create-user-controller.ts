import { UserAlreadyExistsError } from '@/errors/user-already-exists-error'
import { createUserSchema } from '@/schemas/create-user-schema'
import { hash } from 'bcrypt'
import { Controller, HttpRequest, HttpResponse } from '../controller'
import { ZodError } from 'zod'
import { UserRepository } from '@/repositories/user-repository'
import { badRequest, serverError } from '../errors'

const SALT = 6

export type CreateUserControllerModel = {
  email: string
  fullName: string
  password: string
  confirmPassword: string
}

export class CreateUserController implements Controller {
  constructor(private userRepository: UserRepository) {}

  async handler(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, fullName, password } = createUserSchema(request.body)

      const userEmailAlreadyExists =
        await this.userRepository.findByEmail(email)

      if (userEmailAlreadyExists) {
        return badRequest(new UserAlreadyExistsError())
      }

      const hashedPassword = await hash(password, SALT)

      await this.userRepository.createUser({
        email,
        fullName,
        password: hashedPassword,
      })

      return {
        body: '',
        status: 201,
      }
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          body: {
            message: error.format()._errors.toString(),
          },
          status: 400,
        }
      }

      return serverError()
    }
  }
}
