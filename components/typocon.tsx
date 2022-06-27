import { useTheme } from '@mui/material'
import { Grid, Typography } from '@mui/material'

interface TypoConProps {
    children: JSX.Element,
    label: String
}

export default function TypoCon(props: TypoConProps) {
    return (
        <Grid color={'white'} container direction='row' spacing={1}>
            <Grid item>
                {
                    props.children
                }
            </Grid>
            <Grid item>
                <Typography variant='caption'>{props.label}</Typography>
            </Grid>
        </Grid>
    )
}
