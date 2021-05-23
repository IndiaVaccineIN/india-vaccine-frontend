import Head from "next/head";
import Footer from "../components/footer";
import Landing from "../components/home/landing";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

import CheckAvailability from "./check_availability";

export default CheckAvailability;

function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>India Vaccine - About</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Landing />
        </main>

        <Footer />
      </div>
    </div>
  );
}
