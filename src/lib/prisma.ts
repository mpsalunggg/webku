// import { PrismaClient } from '@prisma/client'

// // PrismaClient is attached to the `global` object in development to prevent
// // exhausting your database connection limit.
// // Learn more: https://pris.ly/d/help/next-js-best-practices

// declare global {
//   var prisma: PrismaClient | undefined
// }

// export const prisma =
//   global.prisma ??
//   new PrismaClient({
//     log:
//       process.env.NODE_ENV === 'development'
//         ? ['query', 'error', 'warn']
//         : ['error'],
//   })

// if (process.env.NODE_ENV !== 'production') {
//   global.prisma = prisma
// }

import { PrismaClient } from "@/generated/client"

import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
})

declare global {
  var __prisma: PrismaClient | undefined
}

export const prisma = globalThis.__prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma
}