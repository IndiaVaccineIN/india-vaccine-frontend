import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { isNum } from "../../helpers";

import checkAvailabilityStyles from "../../styles/check_availability.module.css";
import SearchDropdown from "../search_dropdown";
import { Districts } from "../../api/district";

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
  }, []);

  useEffect(() => {
    console.log("sssss---", router.query);
  }, [router.query]);

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
              Did you recently get vaccinated? Do you want to take 1 min of your
              time to help another person get vaccinated? Then you are at the
              right spot. <br />
              We know getting verified vaccination information like "Weather
              there is crowding at the center" "Are they turning people away who
              walk-in" can be difficult to obtain without an in-person visit to
              the center. So, do use the information that you learnt during your
              visit to the vaccination center to help others get that
              information! <br />
              Thank you so much for taking the time to help India get
              vaccinated, one verified information at a time.
            </p>
          </div>
        </div>
        {/* <div className={styles.container} dangerouslySetInnerHTML={{ __html: tripettoHtml }}/> */}
      </div>
    </div>
  );
}
