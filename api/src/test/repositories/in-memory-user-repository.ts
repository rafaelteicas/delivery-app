import { Prisma, User } from '@prisma/client'
import { randomUUID } from 'crypto'
import { hash } from 'bcrypt'
import { UserRepository } from '@/repositories/user-repository'

export class InMemoryUserRepository implements UserRepository {
  users: User[] = []

  async createUser(data: Prisma.UserCreateInput) {
    const hashedPassword = await hash(data.password, 6)

    const user: User = {
      id: randomUUID(),
      email: data.email,
      role: 'USER',
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

  async findById(query: string) {
    const user = this.users.find((user) => user.id === query)
    if (!user) {
      return null
    }
    return user
  }
}
