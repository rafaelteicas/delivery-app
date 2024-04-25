import { UserRepositoryImpl } from '@/repositories/impl/user-repository-impl'
import { AuthenticateUseCase } from '@/use-cases/user/authenticate-use-case'

export function makeAuthentication() {
  const userRepository = new UserRepositoryImpl()
  return new AuthenticateUseCase(userRepository)
}
