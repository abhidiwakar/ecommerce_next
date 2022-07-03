import { EmailOutlined, LocalPhoneOutlined, PersonOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import { Box, Divider, Grid, IconButton, InputBase, Paper, Tab, Tabs, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.css'
import TypoCon from './typocon'
import React from 'react'

interface HeaderProps {

}

export default function Header(props: HeaderProps) {
    const theme = useTheme()
    const router = useRouter()

    const handleRedirect = (link: string) => {
        router.push(link)
    }

    return (
        <Box bgcolor='white'>
            {/* Notification section start */}
            <Box bgcolor='red' color='white' paddingX={2} paddingY={.5}><Typography variant='subtitle2' className={styles.text_center}>Disclaimer: This is a demo website and is not intended to provide any services or products. Do not make payments for anything you see on this website. <Link href="/policy"><a className={`${styles.text_underline} next-link`}>Read more</a></Link></Typography></Box>
            {/* Notification section end */}

            {/* subnav section start */}
            <Box sx={{
                display: {
                    xs: 'none',
                    md: 'block'
                }
            }} bgcolor={theme.palette.primary.main} paddingX={2} paddingY={1}>
                <Grid container justifyContent='space-between' color="white">
                    <Grid item>
                        <Grid container spacing={2} alignItems='center'>
                            <Grid item>
                                <Link href="tel:+9100000000">
                                    <a>
                                        <TypoCon label="+91 0000000000">
                                            <LocalPhoneOutlined fontSize='small' />
                                        </TypoCon>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="mailto:abc@example.com">
                                    <a>
                                        <TypoCon label="abc@example.com">
                                            <EmailOutlined fontSize='small' />
                                        </TypoCon>
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Link href="/faq">
                                    <a className='next-link'>
                                        <Typography variant='caption'>FAQs</Typography>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/help">
                                    <a className='next-link'>
                                        <Typography variant='caption'>Need help?</Typography>
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            {/* subnav section end */}

            {/* nav section start */}
            <Box paddingX={2}>
                <Grid container alignItems='center' spacing={5} >
                    <Grid item>
                        <Link href='/'>
                            <Image src="/assets/logos/light.svg" height={80} width={200} />
                        </Link>
                    </Grid>
                    <Grid item flex={1}>
                        <Paper elevation={0} sx={{
                            borderRadius: 100,
                            paddingX: 5,
                            paddingY: 1,
                            display: 'flex',
                            backgroundColor: theme.palette.divider,
                            alignItems: 'center',
                            border: 1,
                            borderColor: 'transparent',
                        }}>
                            <InputBase fullWidth placeholder='Search a product' />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item>
                                <IconButton sx={{
                                    backgroundColor: theme.palette.divider
                                }}>
                                    <PersonOutlined />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{
                                    backgroundColor: theme.palette.divider
                                }}>
                                    <ShoppingBagOutlined />
                                </IconButton>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <Paper>
                </Paper>
            </Box>
            <Divider />
            {/* nav section end */}
        </Box>
    )
}
