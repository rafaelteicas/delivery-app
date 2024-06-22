import { PrismaClient } from '@prisma/client'
import { execSync } from 'node:child_process'
import { randomUUID } from 'node:crypto'
import type { Environment } from 'vitest'

const prisma = new PrismaClient()

function generateDatabaseURL(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Missing DATABASE_URL')
  }

  const url = new URL(process.env.DATABASE_URL)
  url.searchParams.set('schema', schema)

  return url.toString()
}

export default <Environment>{
  name: 'e2e',
  transformMode: 'ssr',
  setup() {
    const schema = randomUUID()
    const databaseURL = generateDatabaseURL(schema)
    process.env.DATABASE_URL = databaseURL
    execSync('npx prisma migrate deploy')
    return {
      async teardown() {
        await prisma.$executeRawUnsafe(
          `DROP SCHEMA IF EXISTS "${schema}" CASCADE`,
        )
        await prisma.$disconnect()
      },
    }
  },
}