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
                        We're trying to build out a verified list of crowd-sourced list of Vaccination Centers across the country so that people can get reliable information in a quick & easy manner.
                </p>
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
                        As vaccination opens up for all individuals 18+, there will be greater pressure on public health facilities across the nation to vaccinate everyone.
                        Currently, one major source for information about vaccination centers is the CoWin Platform which is only shown after one registers. As of now, about 1% of the country’s population has used CoWin to register. It will be imperative to keep track of these locations & provide updates as required.
  </p>
                    <p>
                        This is where we are planning to step in & have volunteers call & get updates from various CVCs. We are building out the platforms for the volunteers to submit the data and then make it easily accessible to anyone.
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
                        Glad you asked. We are completely community and volunteer driven. If you have experience with technology then you can contribute to our tech team or you can sign up to volunteer a few hours every week in doing calls to verify supply. While the ideas are in place, there is no hard/fast rule about tech stack or approch. Anything that solves the problem quickly will be galdly accepted!

                </p>
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
