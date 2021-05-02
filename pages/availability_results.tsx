import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/availability_results.module.css'

export default function AvailabilityResults() {
    const { query } = useRouter();

    console.log(query)

    return (
        <div>
            <Head>
                <title>
                    India Vaccine - Results
                </title>
            </Head>
            <Navbar />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className="textCenter">Results</h1>
                    <div className="flex mobileCol center">
                        <label className={styles.label}>
                            <input type="text" className={styles.searchBar} placeholder="Enter your Pincode or Area" /></label>
                        <button type="submit" className={styles.searchButton}>Find Vaccine</button></div>
                </main>
            </div>
            <Footer />
        </div>
    )
}