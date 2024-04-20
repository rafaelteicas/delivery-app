import { prisma } from '@/libs/prisma'
import { Prisma } from '@prisma/client'
import { UserRepository } from '../user-repository'

export class UserRepositoryImpl implements UserRepository {
  async createUser(data: Prisma.UserCreateInput) {
    return await prisma.user.create({
      data,
    })
  }

  async findByEmail(email: string) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    })
  }
}
