import { Grid, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/layout'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function PageNotFound() {
    return (
        <Layout>
            <Grid mt={5} container justifyContent='center'>
                <Grid item textAlign='center'>
                    <SentimentVeryDissatisfiedIcon fontSize="large" />
                    <Typography variant='h2' color='error'>404</Typography>
                    <Typography>
                        Unfortunately, we couldn&apos;t find what you&apos;re looking for!
                    </Typography>
                </Grid>
            </Grid>
        </Layout>
    )
}
