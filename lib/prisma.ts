import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    console.log('Checking if prisma is present?')
    if (!global.prisma) {
        console.log('Prisma not found! Creating a new instance.')
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;
