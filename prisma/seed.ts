import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // const category = await prisma.category.createMany({
    //     data: [
    //         {
    //             "name": 'Men',
    //             "iconString": 'Man',
    //             "slug": 'men'
    //         },
    //         {
    //             "name": 'Women',
    //             "iconString": 'Woman',
    //             "slug": 'women'
    //         },
    //         {
    //             "name": "Furniture",
    //             "slug": "furniture",
    //             "iconString": "TableBar"
    //         },
    //         {
    //             "name": "Sports",
    //             "slug": "sports",
    //             "iconString": "SportsCricket"
    //         },
    //         {
    //             "name": "Electronics",
    //             "slug": "electronics",
    //             "iconString": "PhotoCamera"
    //         },
    //         {
    //             "name": "Hardware",
    //             "slug": "hardware",
    //             "iconString": "Hardware"
    //         },
    //         {
    //             "name": "Automobile",
    //             "slug": "automobile",
    //             "iconString": "TwoWheeler"
    //         }
    //     ]
    // })

    // Create brand
    const brand = await prisma.brand.create({
        data: {
            name: "Roadster",
            slug: "roadster",
            Product: {
                create: {
                    name: "Men Grey Melange Solid T-shirt",
                    description: "Grey melange Tshirt for men\nSolid\nRegular length\nRound neck\nShort, regular sleeves\nWoven cotton fabric",
                    regularPrice: 499,
                    sellingPrice: 199,
                    categoryId: "312a9e90-ebce-42a3-8816-639b260eb85e",
                    slug: 'roadster-men-grey-melange-solid-t-shirt',
                    ProductImage: {
                        create: [
                            {
                                url: "v1656814586/Image-1_qyovwm.jpg",
                                altTitle: "Men Grey Melange Solid T-shirt"
                            },
                            {
                                url: "v1656814603/Image-2_xslnzd.jpg",
                                altTitle: "Men Grey Melange Solid T-shirt"
                            },
                            {
                                url: "v1656814606/Image-3_w4nbti.jpg",
                                altTitle: "Men Grey Melange Solid T-shirt"
                            },
                            {
                                url: "v1656814611/Image-4_h3naez.jpg",
                                altTitle: "Men Grey Melange Solid T-shirt"
                            },
                            {
                                url: "v1656814616/Image-5_o9vjce.jpg",
                                altTitle: "Men Grey Melange Solid T-shirt"
                            }
                        ]
                    }
                }
            }
        }
    })

    console.log(brand)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })