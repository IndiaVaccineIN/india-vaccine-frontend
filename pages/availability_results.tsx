import { GetServerSideProps, NextPageContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import useRequest from '../api'
// import { useVaccineAvailability } from '../api'
import { components } from '../api/interfaces'
import CvcCard from '../components/cvc_card'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { isEmpty } from '../helpers'
import styles from '../styles/availability_results.module.css'


export default function AvailabilityResults(context: NextPageContext) {
    const { query } = useRouter();

    const {data, error} = useRequest({
        url: "v1/cvc",
        baseURL: process.env.NEXT_PUBLIC_API_ROOT,
        method: "post",
        // data: {
        //     pincode: 400095
        // }
    })

    console.log(data, "SWR Result")

    console.log(error)

    console.log(query)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

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
                            <input type="text" className={styles.searchBar} placeholder="Enter your Pincode or Area" value={query.pincode}/></label>
                        <button type="submit" className={styles.searchButton}>Find Vaccine</button>
                    </div>

                </main>
                <div className={styles.results}>
                    {
                        //@ts-expect-error Fix this
                        data.results.map((e) => <CvcCard data={e} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // console.log(context)
    // console.log(context.params)
    // console.log(context)

    const { query } = context

    // console.log(query)

    /**
     * If no query params are present go
     * to the search page
     */
    if (isEmpty(query)) {
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