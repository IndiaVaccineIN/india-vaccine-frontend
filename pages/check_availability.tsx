import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import styles from '../styles/check_availability.module.css'

export default function CheckAvailability() {
    return (
        <div>
            <Head>
                <title>
                    India Vaccine - Check Availability
                </title>
            </Head>
            <Navbar />
            <div className={styles.container}>
            <main className={styles.main}>
                Hello
            </main>

            </div>
            <Footer />
        </div>
    )
}