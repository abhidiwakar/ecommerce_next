// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product, PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product>
) {
    if (req.method === 'POST') {
        const { name, regularPrice, sellingPrice } = req.body
        
        return res.status(200).json(await prisma.product.create({
            data: {
                name,
                regularPrice,
                sellingPrice
            }
        }))
    }
}
