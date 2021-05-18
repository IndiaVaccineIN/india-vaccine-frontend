import { components } from "../../api/interfaces";
import styles from "../../styles/cvc_card.module.css";

import { stringify } from "query-string"

interface Props {
  data: components["schemas"]["CVCResponseData"];
}

export default function AidCvcCard({ data }: Props) {
  const aidQueryString = stringify({
    cvc_id: data.id,
    cvc_name: data.name
  });

  return (
    <div key={data.cowin_center_id} className={styles.cvc_card}>
      <b className={styles.cvcName}>{data.name}</b> <br/>
      <div className={styles.subText}>
        <div className={styles.address}>
          {data.address.block}, {data.address.district}, {data.address.pincode}
        </div>
      </div>
      <br />
      <div className={styles.subText}>
        <a
          href={`/submit_data?${aidQueryString}`}
          rel="noreferrer noopener"
          target="_blank"
        >
          <button className={styles.registerButton}>Update Info</button>
        </a>
      </div>
    </div>
  );
}
