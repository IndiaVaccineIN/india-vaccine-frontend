import { GetServerSideProps, NextPageContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
// import { useVaccineAvailability } from '../api'
import { components } from '../api/interfaces'
import CvcCard from '../components/cvc_card'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { isEmpty } from '../helpers'
import styles from '../styles/availability_results.module.css'

const temp: components["schemas"]["PaginatedCVCData"] = {
    page_number: 0,
    page_size: 5,
    total: 200,
    results: [
        {
            address: {
                block: "Andheri",
                district: "23",
                pincode: "400095",
                state: "Maharashtra",
                city: "Mumbai"
            },
            cowin_center_id: 67,
            google_maps_url: "https://google.com",
            id: "56",
            last_verified_at: "2021-05-02T09:16:22.698Z",
            name: "BKC Jumbo CVC",
            operation_timings: {
                end_time: Date.now().toString(),
                start_time: Date.now().toString(),
            },
            slots: [{
                end_time: "2021-05-02T09:16:22.698Z",
                start_time: "2021-05-02T09:16:22.698Z"
            }],
            status: "ACTIVE",
            type: "CENTRAL",
            vaccine_count: 100,
            vaccines: [
                {
                    cost: 200,
                    count: 100,
                    name: "COVAXIN",
                    type: "COVAXIN"
                }
            ],
            next_stock_refresh_on: "2021-05-02T09:16:22.698Z",
            geo: {
                latitude: "19.1364",
                longitude: "72.8296"
            }
        }
    ]
}

export default function AvailabilityResults(context: NextPageContext) {
    const { query } = useRouter();

    const { data, error } = useSWR([`v1/cvc`, { method: "post" }], {
        dedupingInterval: 500000,
        shouldRetryOnError: false
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
                            <input type="text" className={styles.searchBar} placeholder="Enter your Pincode or Area" /></label>
                        <button type="submit" className={styles.searchButton}>Find Vaccine</button>
                    </div>

                </main>
                <div className={styles.results}>
                    {
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