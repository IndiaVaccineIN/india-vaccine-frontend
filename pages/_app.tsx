import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return <>
  <Head>
      <title>India Vaccine</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="India Vaccine" key="title" />
      <meta name="Description" content="This is the home page for India Vaccine project" />
      <meta name="theme-color" content="#7373EC" />

      <link
        rel="preload"
        href="fonts/Gilroy/Gilroy-Regular.otf"
        as="font"
        type="font/otf"
        crossOrigin=""
      />

      <link
        rel="preload"
        href="fonts/Gilroy/Gilroy-Bold.ttf"
        as="font"
        crossOrigin=""
      />
    </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
