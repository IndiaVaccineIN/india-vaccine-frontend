import Head from 'next/head'
import { SWRConfig } from "swr"

import { swrConfig } from '../helpers'

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  return <SWRConfig value={swrConfig}>
    <Head>
      <title>India Vaccine</title>
      <link rel="icon" href="/favicon.ico" />
      {/* <meta property="og:title" content="India Vaccine" key="title" />
      <meta name="Description" content="This is the home page for India Vaccine project" /> */}
      <meta name="theme-color" content="#7373EC" />
      <title>IndiaVaccine — We’re Making it Easier to Find Vaccination Centers</title>
      <meta name="title" content="IndiaVaccine — We’re Making it Easier to Find Vaccination Centers" />
      <meta name="description" content="We're building out a verified list of Vaccination Centers across the country so that people can find those centers in a quick & easy manner and thus enabling as many people to get vaccinated as possible" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.indiavaccine.in" />
        <meta
          property="og:title"
          content="IndiaVaccine — We’re Making it Easier to Find Vaccination Centers"
        />
        <meta
          property="og:description"
          content="We're building out a verified list of Vaccination Centers across the country so that people can find those centers in a quick & easy manner and thus enabling as many people to get vaccinated as possible"
        />
        <meta property="og:image" content="https://i.imgur.com/b1MurNy.jpeg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://www.indiavaccine.in" />
        <meta
          property="twitter:title"
          content="IndiaVaccine — We’re Making it Easier to Find Vaccination Centers"
        />
        <meta
          property="twitter:description"
          content="We're building out a verified list of Vaccination Centers across the country so that people can find those centers in a quick & easy manner and thus enabling as many people to get vaccinated as possible"
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/b1MurNy.jpeg"
        />

      {/* 
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
      /> */}
      <link
        rel="preload"
        href="fonts/Poppins/Poppins-Regular.ttf"
        as="font"
        type="font"
        crossOrigin=""
      />

      <link
        rel="preload"
        href="fonts/Poppins/Poppins-SemiBold.ttf"
        as="font"
        crossOrigin=""
      />
    
    </Head>
    <Component {...pageProps} />
    
  </SWRConfig>
  
}

export default MyApp;
