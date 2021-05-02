import { components } from "../api/interfaces"
import styles from "../styles/cvc_card.module.css"

interface Props {
    data: components["schemas"]["CVCResponseData"]
}

export default function CvcCard(props:Props) {
    return (
        // <>
            <div className={styles.cvc_card}>
                Hello
            </div>
        // </>
    )
}