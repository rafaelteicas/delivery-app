import { UserAlreadyExistsError } from '@/errors/user-already-exists-error'
import { createUserSchema } from '@/http/controllers/user/schemas/create-user-schema'
import { hash } from 'bcrypt'
import { UserRepository } from '@/repositories/user-repository'
import { UseCase } from '../use-case'

const SALT = 6

export type CreateUserUseCaseRequest = {
  email: string
  fullName: string
  password: string
  confirmPassword: string
}

export class CreateUserUseCase implements UseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserUseCaseRequest) {
    const { email, fullName, password } = createUserSchema(data)

    const userEmailAlreadyExists = await this.userRepository.findByEmail(email)

    if (userEmailAlreadyExists) {
      throw new UserAlreadyExistsError()
    }

    const hashedPassword = await hash(password, SALT)

    const user = await this.userRepository.createUser({
      email,
      fullName,
      password: hashedPassword,
    })

    return user
  }
}
