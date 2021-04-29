import Head from 'next/head'
import Footer from '../components/footer'
import Landing from '../components/home/landing'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
        <Head>
          <title>India Vaccine Project</title>
          <link rel="icon" href="/favicon.ico" />
          
          {/* <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
<link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
<link rel="manifest" href="/favicons/manifest.json">*/}
        </Head>

        <main className={styles.main}>
          <Landing/>

          {/* <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p> */}

          {/* <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
            </a>
          </div> */}
        </main>

        <Footer/>

        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer> */}
      </div>
    </div>
  )
}
