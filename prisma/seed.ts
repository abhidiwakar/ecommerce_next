import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const product = await prisma.product.create({
        data: {
            name: "ABC Product",
            regularPrice: 2000,
            sellingPrice: 1899
        }
    })

    console.log(product)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })