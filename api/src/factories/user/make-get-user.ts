import { UserRepositoryImpl } from '@/infra/repositories/user-repository-impl'
import { GetUserByIdUseCase } from '@/domain/user/use-cases/get-user-by-id-use-case'

export function makeGetUser() {
  const userRepository = new UserRepositoryImpl()
  return new GetUserByIdUseCase(userRepository)
}
