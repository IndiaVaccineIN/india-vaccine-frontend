import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { isNum } from "../../helpers";

import checkAvailabilityStyles from '../../styles/check_availability.module.css';
import SearchDropdown from '../search_dropdown';
import { Districts } from '../../api/district';

export default function Aid() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const showCvcResults = () => {
    // Triggered when the user clicks on the find vaccine centers button
    if (!search) {
      return "Input is null";
    }

    if (search.length === 0) {
      return "Input is empty";
    }

    if (isNum(search)) {
      router.push({
        pathname: "/aid",
        query: {
          pincode: search,
        },
      });
    } else {
      router.push({
        pathname: "/aid",
        query: {
          district: search,
        },
      });
    }
  };

  useEffect(() => {
    console.log("component did mount --->", router.query);
  }, [])

  useEffect(() => {

    console.log("sssss---", router.query)
  }, [router.query])

  return (
    <div>
      <div>
        <Head>
          <title>India Vaccine Project | Volunteer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={checkAvailabilityStyles.container}>
        <main className={checkAvailabilityStyles.main}></main>
        <h1 className="textCenter">
          Share information. Save someone's life.
        </h1>
        <div className="flex mobileCol center">
          <SearchDropdown
            search={search}
            setSearch={setSearch}
            listItems={Districts}
            keyValue="district_name"
          />
          <button
            onClick={showCvcResults}
            type="submit"
            className={checkAvailabilityStyles.searchButton}
          >
            Show Centers
          </button>
        </div>
        <div className="flex mobileCol center max-w-4xl">
          <img
            src={"/assets/avatar_landing.svg"}
            className={checkAvailabilityStyles.heroImage}
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
        {/* <div className={styles.container} dangerouslySetInnerHTML={{ __html: tripettoHtml }}/> */}
      </div>
    </div>
  );
}
