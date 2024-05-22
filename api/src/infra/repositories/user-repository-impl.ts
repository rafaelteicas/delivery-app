import { Prisma } from '@prisma/client'
import { UserRepository } from '../../domain/user/repositories/user-repository'
import { prisma } from '../database/prisma'

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

  async findById(userId: string) {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
  }
}
