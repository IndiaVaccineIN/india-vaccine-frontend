import Image from "next/image"

import styles from "../styles/footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer_wrapper}>
            <div className={styles.footer_content}>
                <div className={styles.logo_wrapper}>
                    
                    <img src={"/assets/logo.svg"} height={50} width={200}></img>
                   
                        <a className={styles.center} href="https://discord.gg/ZcStNzyFrj" target="_blank"> 
                     <Image
                            src="/assets/join_discord.svg"
                            width={150}
                            height={100}
                            alt={"discord icon"} />
                        {/* &nbsp;Join our Discord*/}</a> 
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
                    We are a volunteer driven organisation that tries to present information accurately but does not make any legal guarantees as to the accuracy of the information. We do not provide medical advice.
                </p>
            </div>
        </footer>
    )
}