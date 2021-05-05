import { GetServerSideProps, NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { useAPIRequest } from "../api";
import { components } from "../api/interfaces";
import { cleanObj, isEmpty } from "../helpers";

import CvcCard from "../components/cvc_card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import styles from "../styles/availability_results.module.css";

export default function AvailabilityResults(context: NextPageContext) {
  const { query } = useRouter();

  const searchBarContent = query?.pincode ?? query.district;

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
            Showing {error && <span>0</span>}
            {!data && <span>Unknown</span>}
            {data && data.results.length} Vaccination Centers
          </h3>
          <div className="flex mobileCol center">
            <label className={styles.label}>
              <input
                disabled
                type="text"
                className={styles.searchBar}
                placeholder="Enter your Pincode or Area"
                value={searchBarContent}
              />
            </label>
            <button type="submit" className={styles.searchButton}>
            Find Centers
            </button>
          </div>
        </main>
        {error && <div>Failed to Load</div>}
        {!data && <div>Loading Data...</div>}
        {data && (
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
