import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import SearchDropdown from "../components/search_dropdown";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { isNum } from "../helpers";

import styles from "../styles/check_availability.module.css";
import { Districts } from "../api/district";

export default function CheckAvailability() {
  const { push } = useRouter();

  const [search, setSearch] = useState("");

  const showResults = () => {
    if (!search) {
      return "Input is null";
    }

    if (search.length === 0) {
      return "Input is empty";
    }

    if (isNum(search)) {
      push({
        pathname: "/availability_results",
        query: {
          pincode: search,
        },
      });
    } else {
      push({
        pathname: "/availability_results",
        query: {
          district: search,
        },
      });
    }
  };
//==================================================================================
// function for getting user district and displaying CVCs
function getUserLocation() {
  const success= async(pos)=>{
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    try {
      const result = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.NEXT_PUBLIC_GEOCODING_API_KEY}`);
      const resultJSON = await result.json();
      const pincode= resultJSON.results[0].components.postcode;
      setSearch(pincode);  
      push({
        pathname: "/availability_results",
        query: {
          pincode: pincode,
        },
      });
      
    } catch (e) {
      console.log(e);
    }
  }    

  const fail= ()=>{
    console.log('failed');
    alert('Error. Try Searching for your Location');
  }

  if (window.navigator.geolocation) window.navigator.geolocation.getCurrentPosition(success, fail);

}
// =============================================================================  

  return (
    <div>
      <Head>
        <title>India Vaccine - Check Availability</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}></main>
        <h1 className="textCenter">
          Find a COVID-19 vaccine for yourself or a loved one
        </h1>
        <div className="flex mobileCol center">
          <SearchDropdown
            search={search}
            setSearch={setSearch}
            listItems={Districts}
            keyValue="district_name"
          />
          <button
            onClick={showResults}
            type="submit"
            className={styles.searchButton}
          >
            Find Vaccine
          </button>
          <button
            onClick={getUserLocation}
            type="submit"
            className={styles.searchButton}
          >
            CVCs Near You
          </button>
        </div>
        <div className="flex mobileCol center max-w-4xl">
          <img
            src={"/assets/avatar_landing.svg"}
            className={styles.heroImage}
            height={300.08}
            width={303}
            alt="Illustration"
          ></img>
          <p className={"pad-20"}>
            Everyone over 18 is now eligible for free, safe, and reliable
            COVID-19 vaccines in India. But it can be difficult to find out
            where and how to get a shot. Enter your zip code or area to find
            confirmed vaccination locations near you, and learn how to make an
            appointment.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
