import { GetServerSideProps, NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { useAPIRequest } from "../api";
import { components } from "../api/interfaces";
import { cleanObj, isEmpty, useTranslation } from "../helpers";
import { isNum } from "../helpers";

import SearchDropdown from "../components/search_dropdown";
import CvcCard from "../components/cvc_card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import styles from "../styles/availability_results.module.css";
import { useState } from "react";
import { Districts } from "../api/district";

export default function AvailabilityResults(context: NextPageContext) {
  const { query, push } = useRouter();

  //for searching/editing new state/pincode *STARTS*
  const [searchBarContent, setSearchBarContent] = useState<string>(
    query?.pincode?.toString() ?? query.district?.toString()
  );

  const { data: translationData } = useTranslation()

  const showNewResults = () => {
    if (!searchBarContent) {
      return "Input is null";
    }

    if (searchBarContent.length === 0) {
      return "Input is empty";
    }

    if (isNum(searchBarContent)) {
      push({
        pathname: "/availability_results",
        query: {
          pincode: searchBarContent,
        },
      });
    } else {
      push({
        pathname: "/availability_results",
        query: {
          district: searchBarContent,
        },
      });
    }
  };
  //for searching/editing new state/pincode *ENDS*

  let APIQuery = {
    pincode: Number(query?.pincode),
    district: query?.district,
  };

  // console.log(APIQuery)

  const { data, error } = useAPIRequest<
    components["schemas"]["PaginatedCVCData"]
  >({
    url: "v1/cvc",
    method: "post",
    data: APIQuery,
  });
  console.log(data);
  return (
    <div>
      <Head>
        <title>India Vaccine - Results</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <h3 className="textCenter">
            {" "}
            {translationData.availability_results.showing} {error && <span>0</span>}
            {!data && <span>Unknown</span>}
            {data && data.results.length} {translationData.availability_results.vaccination_centers}
          </h3>
          <div className="flex mobileCol center">
            <SearchDropdown
              search={searchBarContent}
              setSearch={setSearchBarContent}
              listItems={Districts}
              keyValue="district_name"
            />
            <button
              onClick={showNewResults}
              type="submit"
              className={styles.searchButton}
            >
              {translationData.availability_results.find_centers_button}
            </button>
          </div>
        </main>
        {error ? (
          <div>Failed to Load</div>
        ) : !data ? (
          <div>Loading Data...</div>
        ) : data.results.length == 0 ? (
          <span style={{ marginTop: "1.5rem" }}>No results available</span>
        ) : (
          <div className={styles.results}>
            {data.results.map((e) => (
              <CvcCard key={e.cowin_center_id} data={e} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  /**
   * If no query params are present go
   * to the search page
   */
  if (isEmpty(query)) {
    return {
      redirect: {
        destination: "/check_availability",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};
