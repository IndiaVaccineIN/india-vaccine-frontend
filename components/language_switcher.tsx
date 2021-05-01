import styles from "../styles/language_switcher.module.css"

const localesMap = {
    'en-us': "English",
    'hi-in': "हिंदी"
}

export default function LanguageSwitcher() {
    return (
        <div className={styles.language_wrapper}>
            {Object.values(localesMap).map((e, i, a) => {
                return (
                    <>
                        <span key={`${e}_lang`} className={styles.language}>{e}</span>
                        {i === (a.length - 1) ? null : <div className={styles.dot} />}
                    </>
                )
            })}
        </div>
    )
}
