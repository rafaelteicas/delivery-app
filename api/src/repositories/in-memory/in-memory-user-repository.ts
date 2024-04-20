import { Prisma, User } from '@prisma/client'
import { UserRepository } from '../user-repository'
import { randomUUID } from 'crypto'
import { hash } from 'bcrypt'

export class InMemoryUserRepository implements UserRepository {
  users: User[] = []

  async createUser(data: Prisma.UserCreateInput) {
    const hashedPassword = await hash(data.password, 6)

    const user: User = {
      id: randomUUID(),
      email: data.email,
      fullName: data.fullName,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.users.push(user)

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email)
    if (!user) {
      return null
    }
    return user
  }
}
