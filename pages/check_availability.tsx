import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image"

import styles from '../styles/check_availability.module.css'
import { useRouter } from "next/router";
import { useState } from "react";


export default function CheckAvailability() {
    const { push } = useRouter()

    const [state, setState] = useState<string>()

    const showResults = () => {
        if (!state) {
            return "Input is null"
        }

        if(state.length === 0) {
            return "Input is empty"
        }

        push({
            pathname: "/availability_results",
            query: {
                pincode: state
            }
        })
    }

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
                </main>
                <h1 className="textCenter">Find a COVID-19 vaccine for yourself or a loved one</h1>
                <div className="flex mobileCol center">
                    <label className={styles.label}>
                        <input onChange={(e) => setState(e.target.value)} type="text" className={styles.searchBar} placeholder="Enter your Pincode or Area" /></label>
                    <button onClick={showResults} type="submit" className={styles.searchButton}>Find Vaccine</button></div>
                <div className="flex mobileCol center max-w-4xl">
                    <img src={'/assets/avatar_landing.svg'} className={styles.heroImage} height={300.08} width={303} alt="Illustration" ></img>

                    <p className={"pad-20"}>Everyone over 18 is now eligible for free, safe, and reliable COVID-19 vaccines in India. But it can be difficult to find out where and how to get a shot. Enter your zip code or area to find confirmed vaccination locations near you, and learn how to make an appointment.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}