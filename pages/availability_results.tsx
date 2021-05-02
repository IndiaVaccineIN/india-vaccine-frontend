import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { isEmpty } from '../helpers'
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(context)
    console.log(context.params)
    // console.log(context)

    const { query } = context

    console.log(query)

    /**
     * If no query params are present go
     * to the search page
     */
    if(isEmpty(query)) {
        return {
            redirect: {
                destination: '/check_availability',
                permanent: true
            }
        }
    }

    return {
        props: {}, // will be passed to the page component as props
    }
}