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
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          rel="stylesheet"
        />
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
