import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then((swReg) => swReg)
        .catch((error) => console.log('Service Worker Error', error))
    }
  }, [])

  return (
    <>
      <Head>
        <title>
          Meet Palestras - O mais completo e diversificado banco de palestrantes
          e mestres de cerimônia
        </title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#001781" />
        <meta
          name="description"
          content="Meet Palestras - O mais completo e diversificado banco de palestrantes e mestres de cerimônia"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
