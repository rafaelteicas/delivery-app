import { UserRepositoryImpl } from '@/repositories/impl/user-repository-impl'
import { GetUserByIdUseCase } from '@/use-cases/user/get-user-by-id-use-case'

export function makeGetUser() {
  const userRepository = new UserRepositoryImpl()
  return new GetUserByIdUseCase(userRepository)
}
