import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

prisma.$connect();

export default prisma;

process.on('beforeExit', async () => {
    await prisma.$disconnect();
    console.log("Desconectando la base de datos");
})