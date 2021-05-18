import Image from "next/image";

import styles from "../../styles/home/landing.module.css";
import Button from "../button";
import { useTranslation } from "../../helpers";

export default function Landing() {
  const { data } = useTranslation();

  return (
    <>
      <div className={styles.landing_wrapper}>
        <div className={styles.landingText}>
          <h1>
            {data?.we}{" "}
            <span className={styles.greenUnderline}> {data?.making} </span>
            {data?.locate}
          </h1>
          <p> {data?.description}</p>
          <div className={styles.button_wrapper}>
            <a
              href={"https://forms.gle/HeH3xrvjP1VfFUzM7"}
              rel="noreferrer noopener"
              target="_blank"
            >
              <Button type={"solid"}>{data?.join}</Button>
            </a>
            <a href="#how">
              <Button type={"outline"}>
                {" "}
                <div>{data?.learn} </div>
              </Button>
            </a>
          </div>
        </div>
        <div className={styles.avatar}>
          <img
            className={styles.heroImage}
            src={"/assets/avatar_landing_animated.svg"}
            height={407.08}
            width={423}
          />
        </div>
      </div>

      <div id={"how"} className={styles.landing_wrapper_dark}>
        <div className={styles.avatar}>
          <img src={"/assets/diagram.svg"} height={407.08} width={423} />
        </div>
        <div className={styles.landingText}>
          <h1>
            <span className={styles.greenUnderline}>{data?.how} </span>
          </h1>
          <p>{data?.with} </p>
          <p>{data?.our} </p>
          <div className={styles.button_wrapper}>
            <a
              href={"https://forms.gle/HeH3xrvjP1VfFUzM7"}
              rel="noreferrer noopener"
              target="_blank"
            >
              <Button type={"solid"}>{data?.join} </Button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.landing_wrapper}>
        <div className={styles.landingText}>
          <h1>
            <span className={styles.greenUnderline}> {data?.help} </span>
          </h1>
          <p>{data?.glad}</p>
          <p>
            {" "}
            <b> 1. {data?.tech} </b> {data?.techteam}{" "}
          </p>
          <p>
            {" "}
            <b>2. {data?.calling}</b> {data?.callteam}{" "}
          </p>

          <div className={styles.button_wrapper}>
            <a
              href={"https://forms.gle/HeH3xrvjP1VfFUzM7"}
              rel="noreferrer noopener"
              target="_blank"
            >
              <Button type={"solid"}>{data?.join} </Button>
            </a>
          </div>
        </div>
        <div className={styles.avatar}>
          <img src={"/assets/avatar_people.svg"} height={200} width={200} />
        </div>
      </div>
    </>
  );
}
