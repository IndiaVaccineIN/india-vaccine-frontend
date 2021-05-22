import Link from "next/link";
import { components } from "../api/interfaces";
import { getDay, useTranslation } from "../helpers";
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
   * Add the age_limits
   */
  let age_limits: Array<string | number> = data.sessions.map(
    (e) => e.min_age_limit
  );
  //@ts-expect-error Ignore this error
  age_limits = [...new Set(age_limits)];
  // age_limits = age_limits.map((e) => `${e}+`);

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

  return (
    // <>
    <div key={data.cowin_center_id} className={styles.cvc_card}>
      <b className={styles.cvcName}>{data.name}</b> <br />
      <div className={styles.subText}>
        <div className={styles.address}>
          {data.address.block}, {data.address.district}, {data.address.pincode}
        </div>

        <a
          className={styles.directions}
          target="_blank"
          href={"https://www.google.com/maps/search/?api=1&query=" + address}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7678 3.06085C10.7915 2.08453 9.2086 2.08454 8.23229 3.06085L3.06072 8.23241C2.08441 9.20872 2.08441 10.7916 3.06073 11.7679L8.23229 16.9395C9.2086 17.9158 10.7915 17.9158 11.7678 16.9395L16.9394 11.7679C17.9157 10.7916 17.9157 9.20872 16.9394 8.23241L11.7678 3.06085ZM10.6465 6.14668C10.8418 5.95142 11.1583 5.95142 11.3536 6.14668L12.8536 7.64671C13.0489 7.84197 13.0489 8.15855 12.8536 8.35382L11.3536 9.85385C11.1583 10.0491 10.8418 10.0491 10.6465 9.85385C10.4512 9.65858 10.4512 9.342 10.6465 9.14674L11.293 8.50028H10.5001C9.67163 8.50028 9.00006 9.17185 9.00006 10.0003V12.5003C9.00006 12.7764 8.7762 13.0003 8.50006 13.0003C8.22392 13.0003 8.00006 12.7764 8.00006 12.5003V10.0003C8.00006 8.61957 9.11935 7.50028 10.5001 7.50028H11.293L10.6465 6.85379C10.4512 6.65852 10.4512 6.34194 10.6465 6.14668Z"
              fill="#000080"
            />
          </svg>
          {translationData.cvc_card.directions}
        </a>
      </div>
      <br />
      {/* <div className={styles.cvcFlexEnd}>
        <span>Ages: 18-45</span>
        <span>
          {translationData.cvc_card.ages}:{" "}
          <span className={styles.field}>{age_limits.map((e) => `${e}+`).join(", ")}</span>
        </span>
        <div>
          {translationData.cvc_card.cost}:{" "}
          <span className={styles.field}>{vaccine_cost_type}</span>
        </div>
      </div> */}
      {vaccines.map((e) => {
        const text = e.cost ? `${e.name} (₹${e.cost})` : `${e.name} (Free)`;

        return (
          <div>
            <span className={styles.vaccine_names}>
              {translationData.cvc_card.vaccine_type}: {text}
            </span>
            {age_limits.map((age) => {
              const sessions = data.sessions.filter(
                (i) => i.vaccine === e.name && i.min_age_limit === age
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
      {/* <br /> */}
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
    // </>
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
              {dateString} {date.getDate()}
            </div>
            <div className={styles.session_availability}>
              {session.available_capacity}
            </div>
          </div>
        );
      })}
    </div>
  );
}
