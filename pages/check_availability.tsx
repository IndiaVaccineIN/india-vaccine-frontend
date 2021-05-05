import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { isNum } from "../helpers";

import styles from '../styles/check_availability.module.css'
import { Districts } from "../api/district";


export default function CheckAvailability() {
    const { push } = useRouter()

    const [search, setSearch] = useState<string>();
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);
    const listContainerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const showResults = () => {
        if (!search) {
            return "Input is null"
        }

        if (search.length === 0) {
            return "Input is empty"
        }

        if (isNum(search)) {
            push({
                pathname: "/availability_results",
                query: {
                    pincode: search
                }
            })
        } else {
            push({
                pathname: "/availability_results",
                query: {
                    district: search
                }
            })
        }
    }

    const handleSelectSuggestionClick = (event) => {
        handleSelectSuggestion(event.target.value);
    }

    const handleSelectSuggestion = (suggestionIndex) => {
        setSearch(Districts[suggestionIndex].district_name);
        inputRef.current.blur();
        setShowSuggestions(false);
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
                <div className="flex mobileCol center" ref={dropdownRef}>
                    <div className={styles.searchContainer}>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            type="text" className={styles.searchBar}
                            placeholder="Enter your Pincode or District name"
                            ref={inputRef}
                            onFocus={() => setShowSuggestions(true)}
                        />
                        {showSuggestions && (
                            <ul className={styles.suggestionsContainer} id="list-container"
                                ref={listContainerRef}
                                onClick={handleSelectSuggestionClick}
                            >
                                {Districts.map((district, index) => {
                                    return (
                                        <li className={styles.suggestion}
                                            key={district.district_name + index}
                                            value={index}
                                        >{district.district_name}</li>
                                    )
                                })}
                            </ul>
                        )}
                    </div>
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
