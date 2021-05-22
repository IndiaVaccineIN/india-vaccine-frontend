import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { useAPIRequest } from "../../api";
import { components } from "../../api/interfaces";
import { cleanObj, isEmpty, useTranslation } from "../../helpers";
import { isNum } from "../../helpers";

import SearchDropdown from "../../components/search_dropdown";
import AidCvcCard from "./aid_cvc_card";

import styles from "../../styles/availability_results.module.css";
import { Districts } from "../../api/district";
import { mockData } from "./mockData"; // TODO: remove when crowded and confidence data is available

export default function AidCvcResults() {
  const { query, push } = useRouter();
  const { data: localeTranslation } = useTranslation();

  //for searching/editing new state/pincode *STARTS*
  const [searchBarContent, setSearchBarContent] = useState<string>(
    query?.pincode?.toString() ?? query.district?.toString()
  );

  const showNewResults = () => {
    if (!searchBarContent) {
      return "Input is null";
    }

    if (searchBarContent.length === 0) {
      return "Input is empty";
    }

    if (isNum(searchBarContent)) {
      push({
        pathname: "/aid",
        query: {
          pincode: searchBarContent,
        },
      });
    } else {
      push({
        pathname: "/aid",
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
      <div className={styles.container}>
        <main className={styles.main}>
          <h3 className="textCenter">
            Showing {error && <span>0</span>}
            {!data && <span>Unknown</span>}
            {data && data.results.length} Vaccination Centers
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
              Find Centers
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
            {data.results.map((e, index) => (
              <AidCvcCard
                key={`${e.cowin_center_id}-${index}`}
                data={{ ...e, ...mockData }} // TODO: should remove when data is available from api
                localeTranslation={localeTranslation.cvc_card}
              />
            ))}
          </div>
        )}
      </div>
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
        destination: "/aid",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};
