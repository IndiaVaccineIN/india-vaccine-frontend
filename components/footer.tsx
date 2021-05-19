import Image from "next/image";

import styles from "../styles/footer.module.css";

import { useTranslation } from "../helpers";

export default function Footer() {
  const { data } = useTranslation();

  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_content}>
        <div className={styles.logo_wrapper}>
          <img src={"/assets/logo.svg"} height={50} width={200}></img>

          <a className={styles.center} href="https://vercel.com/?utm_source=IndiaVaccine&utm_campaign=oss " target="_blank"> 
                     <img src="/assets/vercel.svg"
                            width="180px"
                            height="100px"
                            alt="vercel logo" ></img>
                        </a> 
        </div>

        <div className={styles.footer_social}>
          <div className={styles.social_element}>
            <a href="https://www.instagram.com/indiavaccine/" target="_blank">
              {" "}
              <Image
                layout={"fixed"}
                src="/assets/instagram.svg"
                width={30}
                height={30}
                alt={"instagram icon"}
              />
            </a>
          </div>
          <div className={styles.social_element}>
            &nbsp;&nbsp;
            <a href="https://twitter.com/GetIndiaVaccine" target="_blank">
              <Image
                layout={"fixed"}
                src="/assets/twitter.svg"
                width={30}
                height={30}
                alt={"twitter icon"}
              />
            </a>
          </div>
          {/* <div className={styles.social_element}>
                        <Image layout={"fixed"}
                            src="/assets/discord.svg"
                            width={43.92}
                            height={49.4}
                            alt={"discord icon"} />
                        &nbsp;Join our Discord
                    </div> */}
        </div>
        <p>{data?.disclaimer}</p>
      </div>
    </footer>
  );
}
