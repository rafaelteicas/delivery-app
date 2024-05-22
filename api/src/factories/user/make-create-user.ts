import { UserRepositoryImpl } from '@/infra/repositories/user-repository-impl'
import { CreateUserUseCase } from '@/domain/user/use-cases/create-user-use-case'

export function makeCreateUser() {
  const userRepository = new UserRepositoryImpl()
  return new CreateUserUseCase(userRepository)
}
