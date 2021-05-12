import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import SearchDropdown from "../components/search_dropdown";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { isNum, useTranslation } from "../helpers";

import styles from "../styles/check_availability.module.css";
import { Districts } from "../api/district";

export default function CheckAvailability() {
  const { push } = useRouter();

  const [search, setSearch] = useState("");

  const { data } = useTranslation()

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

  return (
    <div>
      <Head>
        <title>India Vaccine - Check Availability</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}></main>
        <h1 className="textCenter">
          {data.check_availability.heading}
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
            {data.check_availability.find_vaccine_button}
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
            {data.check_availability.description}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
