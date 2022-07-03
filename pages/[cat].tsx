import * as MuiIcon from '@mui/icons-material'
import { Box, Card, Container, Grid, IconButton, Tab, Tabs, Typography } from '@mui/material'
import { Category as Cat } from '@prisma/client'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout'
import prisma from '../lib/prisma'
import Product from '../interface/product'


interface CategoryProps {
    category: Cat[],
    currentTab: string,
    products?: Product[],
    imgPrefix: string
}

export default function Category(props: CategoryProps) {
    return <Layout>
        <Box bgcolor='white' sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={props.currentTab}>
                {
                    props.category.map((tab, index) => {
                        return <Tab value={tab.slug} LinkComponent='a' href={`/${tab.slug}`} key={index} iconPosition='top' label={tab.name} />
                    })
                }
            </Tabs>
        </Box>
        <Container maxWidth='xl'>
            <Grid container spacing={2} paddingY={2}>
                {
                    props.products?.map(product => {
                        return <Link key={product.id} href={`/p/${product.slug}`}>
                            <Grid item xs={6} sm={4} md={3} lg={2}>
                                <Card>
                                    <Image alt={product.ProductImage[0].altTitle} src={`${props.imgPrefix}h_500,w_500/${product.ProductImage[0].url}`} height={500} width={500} />
                                    <Box padding={1}>
                                        <Typography component='a' href={`/p/${product.slug}`}>{product.name}</Typography>
                                        <Grid container>
                                            <Grid item flex={1}>
                                                <Typography>₹{product?.sellingPrice}</Typography>
                                                <Typography>₹{product?.regularPrice}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <IconButton>
                                                    <MuiIcon.Add />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Card>
                            </Grid>
                        </Link>
                    })
                }
            </Grid>
        </Container>
    </Layout>
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const currentTab = context.params!.cat as string
    const categories = await prisma.category.findMany({
        select: {
            iconString: true,
            name: true,
            slug: true,
        }
    })
    const products = await prisma.product.findMany({
        where: {
            category: {
                slug: currentTab
            }
        },
        select: {
            id: true,
            name: true,
            sellingPrice: true,
            regularPrice: true,
            slug: true,
            ProductImage: {
                take: 1,
                select: {
                    altTitle: true,
                    url: true
                }
            }
        },
    })

    if (!categories) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            category: categories,
            imgPrefix: process.env.CLOUDINARY_URL,
            currentTab,
            products
        }
    }
}