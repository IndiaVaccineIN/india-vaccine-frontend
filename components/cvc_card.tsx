import { components } from "../api/interfaces"
import styles from "../styles/cvc_card.module.css"
import Button from "./button"


interface Props {
    data: components["schemas"]["CVCResponseData"]
}

export default function CvcCard(props: Props) {
    console.log(props)
    return (
        // <>
            <div className={styles.cvc_card}>
            {props.data.name} <br/>
            <a className={styles.directions} target="_blank" href={'https://www.google.com/maps/search/?api=1&query='+props.data.name}>Directions</a>
            <br/>
            <button className={styles.searchButton}>Register on Cowin</button>
            </div>
        // </>
    )
}