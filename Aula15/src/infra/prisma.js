// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();  

// export default prisma;

import "dotenv/config";
import pkg from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const { PrismaClient } = pkg

// Create a proper Postgres adapter using the official Prisma adapter package.
// Pass the connection string inside an object as `connectionString` so the
// underlying `pg.Pool` is configured correctly.
const pgAdapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })

const prisma = new PrismaClient({
  adapter: pgAdapter,
})

export default prisma;