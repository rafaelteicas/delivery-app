import { UserRepositoryImpl } from '@/repositories/impl/user-repository-impl'
import { CreateUserUseCase } from '@/use-cases/user/create-user-use-case'

export function makeCreateUser() {
  const userRepository = new UserRepositoryImpl()
  return new CreateUserUseCase(userRepository)
}
