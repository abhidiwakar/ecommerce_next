import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F3460'
    },
    secondary: {
      main: '#d23f57'
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
  </Head>
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
