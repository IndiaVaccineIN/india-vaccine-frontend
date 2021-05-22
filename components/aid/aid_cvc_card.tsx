import { components } from "../../api/interfaces";
import styles from "../../styles/cvc_card.module.css";
import { LocaleSchema } from "../../shared/LocalesMap";
import { stringify } from "query-string";

interface Props {
  data: components["schemas"]["CVCResponseData"];
  localeTranslation: LocaleSchema["cvc_card"];
}

export default function AidCvcCard({ data, localeTranslation }: Props) {
  const aidQueryString = stringify({
    cvc_id: data.id,
    cvc_name: data.name,
  });

  const {
    address: { block, district, pincode },
    crowded,
   confidence,
  } = data;


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
    <div className={styles.cvc_card}>
      <b className={styles.cvcName}>{data.name}</b> <br />
      <div className={styles.subText}>
        <div className={styles.address}>
          {`${block}, ${district}, ${pincode}`}
        </div>
      </div>
      <div className={styles.cvcCrowdedWrapper}>
        <div className={crowdedStyle[crowded]}>
          {localeTranslation.crowded[crowded]}
        </div>
        <div className={confidenceStyle[confidence]}>
         {localeTranslation.confidence[confidence]}
        </div>
      </div>
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
