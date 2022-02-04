import '../src/styles/globals.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import '../src/styles/nprogress/nprogress.css'

import Head from 'next/head'
import Footer from 'src/components/footer/footer.ts';

import { SessionProvider } from "next-auth/react"
import Header from 'src/components/header/Header.ts';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        </Head>
        <Header />
        <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  )
}

export default MyApp
