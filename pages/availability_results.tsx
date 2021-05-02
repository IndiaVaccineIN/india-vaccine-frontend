import { GetServerSideProps, NextPageContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useVaccineAvailability } from '../api'
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
                block: "test",
                district: "test",
                pincode: "test",
                state: "test",
                city: "test"
            },
            cowin_center_id: 67,
            google_maps_url: "https://google.com",
            id: "hpvuyhbhil",
            last_verified_at: Date.now().toString(),
            name: "test",
            operation_timings: {
                end_time: Date.now().toString(),
                start_time: Date.now().toString(),
            },
            slots: [],
            status: "ACTIVE",
            type: "CENTRAL",
            vaccine_count: 100,
            vaccines: [
                {
                    cost: 200,
                    count: 100,
                    name: "tst",
                    type: "COVAXIN"
                }
            ],
        }
    ]
}

export default function AvailabilityResults(context: NextPageContext) {
    const { query } = useRouter();

    const { data, error } = useSWR(`v1/cvc`, {
        initialData: temp
    })

    console.log(data, "SWR Result")

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
                        <button type="submit" className={styles.searchButton}>Find Vaccine</button>
                    </div>

                </main>
                <div className={styles.results}>
                    {
                        data.results.map((e) => <CvcCard />)
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