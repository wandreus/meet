import Head from 'next/head'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { ThemeProvider } from 'styled-components'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Studio availability</title>
        <link rel="shortcut icon" href="/img/tuddu-logo.ico" />
        <link rel="apple-touch-icon" href="/img/tuddu-logo.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Studio availability" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
