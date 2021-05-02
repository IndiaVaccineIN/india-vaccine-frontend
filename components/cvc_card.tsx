import { components } from "../api/interfaces"
import styles from "../styles/cvc_card.module.css"

export default function CvcCard(props: components["schemas"]["CVCResponseData"]) {
    return (
        // <>
            <div className={styles.cvc_card}>
                Hello
            </div>
        // </>
    )
}