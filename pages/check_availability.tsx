import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { isNum } from "../helpers";

import styles from "../styles/check_availability.module.css";
import { Districts } from "../api/district";

export default function CheckAvailability() {
  const { push } = useRouter();

  const [state, setState] = useState<string>();

  const showResults = () => {
    if (!state) {
      return "Input is null";
    }

    if (state.length === 0) {
      return "Input is empty";
    }

    if (isNum(state)) {
      push({
        pathname: "/availability_results",
        query: {
          pincode: state,
        },
      });
    } else {
      push({
        pathname: "/availability_results",
        query: {
          district: state,
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
          Find a COVID-19 vaccination center for yourself or a loved one
        </h1>
        <div className="flex mobileCol center">
          <label className={styles.label}>
            <input
              list="districts"
              onChange={(e) => setState(e.target.value)}
              type="text"
              className={styles.searchBar}
              placeholder="Enter your Pincode or District name"
            />
            <datalist id="districts">
              {Districts.map((district) => {
                return <option value={district.district_name} />;
              })}
            </datalist>
          </label>
          <button
            onClick={showResults}
            type="submit"
            className={styles.searchButton}
          >
            Find Centers
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
          All Indians over 18 are now eligible for safe, and reliable COVID-19 vaccines in India. Enter your PIN-code or district name and find verified vaccination centre locations near you to make an appointment on CoWIN.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
