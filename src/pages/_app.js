import Head from 'next/head'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { ThemeProvider } from 'styled-components'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Meet Palestras</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Meet Palestras - O mais completo e diversificado banco de palestrantes e mestres de cerimônia"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
