import Link from "next/link";
import { components } from "../api/interfaces";
import { getDay, getMonth, useTranslation } from "../helpers";
import styles from "../styles/cvc_card.module.css";
import Button from "./button";
import { parse } from "date-fns";
import { stringify } from "query-string";

interface Props {
  data: components["schemas"]["CVCResponseData"];
}

export default function CvcCard({ data }: Props) {
  const aidQueryString = stringify({
    cvc_id: data.id,
    cvc_name: data.name,
  });

  const { crowded, confidence } = data;
  const { data: translationData } = useTranslation();

  /**
   * If the vaccine_cost if coming from the API, store it here
   */
  let vaccine_cost: string | number = data.vaccines[0]?.cost;

  /**
   * The type of the cost
   */
  let vaccine_cost_type: "Free" | "Paid" = vaccine_cost ? "Paid" : "Free";

  /**
   * Add the age_limits, and select only the unique values
   */
  let age_limits: Array<string | number> = data.sessions.map(
    (e) => e.min_age_limit
  );
  //@ts-expect-error Ignore this error
  age_limits = [...new Set(age_limits)];

  /**
   * Empty array of the vaccines
   */
  let vaccines: Array<{
    name: string;
    cost?: number;
  }> = [];

  /**
   * If the type is free
   * load the data from sessions
   *
   * If the type is Paid get it from the vaccines object
   */
  if (vaccine_cost_type === "Free") {
    let temp_vaccines = data.sessions.map((e) => e.vaccine);

    //@ts-expect-error Ignore the error
    temp_vaccines = [...new Set(temp_vaccines)];

    vaccines = temp_vaccines.map((e) => {
      return {
        name: e,
      };
    });
  } else {
    vaccines = data.vaccines.map((e) => {
      return {
        name: e.type,
        cost: e.cost,
      };
    });
  }

  const address = [data.name, data.address.pincode].filter((x) => !!x);

  const crowdedStyle = {
    no_rush: styles.cvcCrowdedNoRush,
    moderate_rush: styles.cvcCrowdedMediumRush,
    heavy_rush: styles.cvcCrowdedHighRush,
  };

  const confidenceStyle = {
    low: styles.cvcConfidenceLow,
    medium: styles.cvcConfidenceMedium,
    high: styles.cvcConfidenceHigh,
  };

  return (
    <div key={data.cowin_center_id} className={styles.cvc_card}>
      <b className={styles.cvcName}>{data.name}</b> <br />
      <div className={styles.subText}>
        <div className={styles.address}>
          {data.address.block}, {data.address.district}, {data.address.pincode}
        </div>

        <a
          className={styles.directions}
          target="_blank"
          href={`https://www.google.com/maps/search/?api=1&query=${address}`}
        >
          {translationData.cvc_card.directions}
        </a>
      </div>
      <div className={styles.cvcCrowdedWrapper}>
        <div className={crowdedStyle[crowded]}>
          {translationData.cvc_card.crowded[crowded]}
        </div>
        <div className={confidenceStyle[confidence]}>
          {translationData.cvc_card.confidence[confidence]}
        </div>
      </div>
      <br />
      {vaccines.map(({ cost, name }) => {
        const text = cost ? `${name} (₹${cost})` : `${name} (Free)`;

        return (
          <div>
            <span className={styles.vaccine_names}>
              {translationData.cvc_card.vaccine_type}: {text}
            </span>
            {age_limits.map((age) => {
              const sessions = data.sessions.filter(
                (i) => i.vaccine === name && i.min_age_limit === age
              );

              if (sessions.length === 0) {
                return null;
              }

              return (
                <div className={styles.sessions_age_wrapper}>
                  <span
                    className={styles.sessions_age}
                  >{`${translationData.cvc_card.ages}: ${age}+`}</span>
                  <SessionsComponent data={sessions} />
                </div>
              );
            })}
          </div>
        );
      })}
      <div className={styles.subText}>
        <a
          href={"https://selfregistration.cowin.gov.in/"}
          rel="noreferrer noopener"
          target="_blank"
        >
          <button className={styles.registerButton}>
            {translationData.cvc_card.book_on_cowin}
          </button>
        </a>
      </div>
      <div className={styles.endRow}>
        <a
          target="_blank"
          href={`/submit_data?${aidQueryString}`}
          className={styles.add_info_cta}
        >
          {translationData.cvc_card.add_info}
        </a>
      </div>
      {/* <div>Operation Timings: {data.operation_timings.start_time}-{data.operation_timings.end_time}</div> */}
    </div>
  );
}

interface SessionsProps {
  data: components["schemas"]["CVCResponseData"]["sessions"];
}

function SessionsComponent({ data }: SessionsProps) {
  return (
    <div className={styles.sessions_wrapper}>
      {data.map((session) => {
        const newDate = new Date();
        const date = parse(session.date, "dd-MM-yyyy", newDate);

        let dateString = getDay(date);
        const monthString = getMonth(date);

        if (date.getDate() === newDate.getDate()) {
          dateString = "Today";
        } else if (date.getDate() === newDate.getDate() + 1) {
          dateString = "Tomm";
        }

        const classNames = [
          styles.session,
          session.available_capacity > 0
            ? styles.session_active
            : styles.session_inactive,
        ]
          .filter((x) => !!x)
          .reduce((a, b) => a + " " + b);

        return (
          <div className={classNames}>
            <div className={styles.session_date}>
              {date.getDate()} {monthString}
            </div>
            <div className={styles.session_day}>{dateString}</div>
            <div className={styles.session_availability}>
              {session.available_capacity}
            </div>
          </div>
        );
      })}
    </div>
  );
}
