import { UserRepositoryImpl } from '@/infra/repositories/user-repository-impl'
import { AuthenticateUseCase } from '@/domain/user/use-cases/authenticate-use-case'

export function makeAuthentication() {
  const userRepository = new UserRepositoryImpl()
  return new AuthenticateUseCase(userRepository)
}
