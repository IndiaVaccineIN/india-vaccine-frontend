import Image from "next/image"

import styles from "../../styles/home/landing.module.css"
import Button from "../button"

export default function Landing() {
    return (
        <>
            <div className={styles.landing_wrapper}>
                <div className={styles.landingText}>
                    <h1>
                        We’re <span className={styles.greenUnderline}> Making it Easier </span>to Find Vaccination Centers
                </h1>
                    <p>
We're building out a verified list of Vaccination Centers across the country so that people can find those centers in a quick & easy manner and thus enabling as many people to get vaccinated as possible                </p>
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
                       As vaccination opens up for all individuals 18+, there will be greater pressure on public health facilities across the nation to vaccinate everyone. Anticipating that, we want to help people get real-time information about which vaccination centers have stock, have less crowding we are which is only shown after one registers. 
  </p>
                    <p>
                        We are using our volunteer base of over 100+ volunteers to get up-to-date information about these centres as well as the power of crowd-sourcing to provide updates as required. We would love for you to join the effort so that individuals don't have to call these centers but can instead rely on this information to find the safest, closest vaccination center.
              </p>
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
