import Image from "next/image";
import { ReactNode } from "react";

import styles from "../styles/button.module.css"

interface ButtonInterface {
    children: ReactNode,
    type: "solid" | "outline"
}

export default function Button({ children, type }: ButtonInterface) {
    /**
     * Filter out null strings
     * 
     * @reference https://stackoverflow.com/a/41346932/12241836
     */
    const classNames = [styles.button, type === "outline" ? styles.button_outline : styles.button_solid].filter(x => !!x).reduce((a, b) => a + ' ' + b)
    return (
        <div className={classNames}>
            {
            type === "solid" ?
                <div className={styles.button_avatar}>
                    <Image src={"/assets/small_human.svg"} height={25.22} width={20.66} />
                </div> 
            : null
            }
            
            { children}

            {
            type === "outline" ?
                <div className={styles.button_avatar}>
                    <Image src={"/assets/arrow-right-circle.svg"} height={24} width={24} />
                </div>
            : null
            }
        </div>
    )
}