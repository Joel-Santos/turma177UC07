// import {PrismaClient} from "@prisma/client";
// // Instância única do Prisma Client
// const prisma = new PrismaClient();

import pkg from '@prisma/client'

const { PrismaClient } = pkg

const prisma = new PrismaClient()

export default prisma;
