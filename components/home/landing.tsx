import Image from "next/image"

import styles from "../../styles/home/landing.module.css"
import Button from "../button"

export default function Landing() {
    return (
        <>
            <div className={styles.landing_wrapper}>
                <div className={styles.landingText}>
                    <h1>
                        We’re <span className={styles.greenUnderline}> Making it Easier </span>to Locate Vaccination Centers
                </h1>
                    <p>We're building out a verified list of Vaccination Centers across the country so that you can get reliable information for getting a vaccine for you or your loved ones in a quick & easy manner. </p>
                    <div className={styles.button_wrapper}>
                        <a
                            href={"https://forms.gle/HeH3xrvjP1VfFUzM7"}
                            rel="noreferrer noopener" target="_blank">
                            <Button type={"solid"}>Join the Team</Button>
                        </a>
                        <a href="#how">
                        <Button type={"outline"}> <div> Learn More</div></Button>
                        </a>
                    </div>

                </div>
                <div className={styles.avatar}>
                    <img className={styles.heroImage} src={"/assets/avatar_landing_animated.svg"}
                        height={407.08} width={423} />
                </div>
            </div>


            <div id={"how"} className={styles.landing_wrapper_dark}>
                <div className={styles.avatar}>
                    <img src={"/assets/diagram.svg"}
                        height={407.08} width={423} />
                </div>
                <div className={styles.landingText}>
                    <h1>
                        <span className={styles.greenUnderline}>
                            How are we doing this? </span>
                    </h1>
                    <p>
                       With COVID-19 vaccination opening up for all individuals over 18 years there will be additional rush at public health facilities all over the country. We want to help you get near real-time information on stocks at vaccination centers and crowding. 
  </p>
                    <p>
Our 100+ volunteers are contributing information to keep this list up to date. We would love for you to join the effort so that individuals don't have to call these centers but can instead rely on this information to find the safest, closest vaccination center.              </p>
                    <div className={styles.button_wrapper}>
                        <a
                            href={"https://forms.gle/HeH3xrvjP1VfFUzM7"}
                            rel="noreferrer noopener" target="_blank"
                        >
                            <Button type={"solid"}>Join the Team</Button>
                        </a>
                    </div>

                </div>

            </div>
            <div className={styles.landing_wrapper}>
                <div className={styles.landingText}>
                    <h1>
                        <span className={styles.greenUnderline}>  How can you help? </span>
                    </h1>
                    <p>
                        Glad you asked! We are completely community and volunteer driven. We have several areas where we are looking for volunteers and here are couple of ways you can help us:- 
                </p>
                 <p> <b> 1. Tech:</b> If you have 2-3 hrs to spare everyday and have amazing React JS or Mongo skills, you can volunteer with our tech team. </p>
                                     <p> <b>2. Calling Centers</b> If you have 20 mins everyday, you can sign-up to call 5-6 vaccination centers everyday and help 1000s of people who would be benefit from a verified information 
If you think there is something we could be doing better, you can absolutely send us a DM on instagram, twitter and that would be a great help as well! </p>

                    <div className={styles.button_wrapper}>
                        <a
                            href={"https://forms.gle/HeH3xrvjP1VfFUzM7"}
                            rel="noreferrer noopener" target="_blank">
                            <Button type={"solid"}>Join the Team</Button>
                        </a>
                    </div>

                </div>
                <div className={styles.avatar}>
                    <img src={"/assets/avatar_people.svg"}
                        height={200} width={200} />
                </div>
            </div>

        </>

    )
}
