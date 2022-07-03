import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../../components/layout'
import Product from '../../interface/product'
import prisma from '../../lib/prisma'
import { generateProductSchema } from '../../lib/util'

interface ProductInfoView {
    imgPrefix: string,
    product: Product,
    schema: object
}

export default function ProductInfo(props: ProductInfoView) {
    return (
        <Layout productSchema={props.schema}>

        </Layout>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.params!.slug as string
    const product = await prisma.product.findFirst({
        where: {
            slug
        },
        select: {
            brand: {
                select: {
                    name: true,
                    slug: true
                }
            },
            category: {
                select: {
                    name: true,
                    slug: true
                }
            },
            ProductImage: {
                select: {
                    altTitle: true,
                    url: true
                }
            },
            id: true,
            name: true,
            regularPrice: true,
            sellingPrice: true,
            description: true,
            slug: true,
            stock: true,
        }
    })

    if (!product) {
        return {
            notFound: true
        }
    }



    return {
        props: {
            imgPrefix: process.env.CLOUDINARY_URL,
            product,
            schema: generateProductSchema(product)
        }
    }
}