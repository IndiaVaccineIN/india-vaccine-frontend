import Image from "next/image"
import { useRouter } from 'next/router'
import useSWR from 'swr'

import styles from "../styles/footer.module.css"

export default function Footer() {
    const router = useRouter();
    const locale = router.locale;
    const { data, error } = useSWR(`/locales/${locale}.json`, fetcher)
    return (
        <footer className={styles.footer_wrapper}>
            <div className={styles.footer_content}>
                <div className={styles.logo_wrapper}>
                    
                    <img src={"/assets/logo.svg"} height={50} width={200}></img>
                   
                        {/* <a className={styles.center} href="https://discord.gg/ZcStNzyFrj" target="_blank"> 
                     <Image
                            src="/assets/join_discord.svg"
                            width={180}
                            height={100}
                            alt={"discord icon"} />
                        </a>  */}
                </div>
                
               
                <div className={styles.footer_social}>
                    <div className={styles.social_element}>
                        <a href="https://www.instagram.com/indiavaccine/" target="_blank"> <Image layout={"fixed"}
                            src="/assets/instagram.svg"
                            width={30}
                            height={30}
                            alt={"instagram icon"} /></a>
                        {/* &nbsp;Follow us on Instagram */}
                    </div>
                    <div className={styles.social_element}>
                        &nbsp;&nbsp;<a href="https://twitter.com/GetIndiaVaccine" target="_blank"><Image layout={"fixed"}
                            src="/assets/twitter.svg"
                            width={30}
                            height={30}
                            alt={"twitter icon"} /></a>
                        {/* &nbsp;Follow us on Twitter */}
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
            <p>
            {data?.disclaimer} 
                </p>
            </div>
        </footer>
    )
}

const fetcher = (...args) => fetch(...args).then(res => res.json());