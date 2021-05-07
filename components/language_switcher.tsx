import { useRouter } from "next/router";
import styles from "../styles/language_switcher.module.css";

const localesMap = {
  "en-us": "English",
  "hi-in": "हिंदी",
  "gu-in": "ગુજરાતી",
};

export default function LanguageSwitcher() {
  const { locales, push } = useRouter();

  return (
    <div className={styles.language_wrapper}>
      {locales.map((e, i, a) => {
        return (
          <>
            <span
              onClick={() =>
                push(
                  "",
                  {},
                  {
                    locale: e,
                  }
                )
              }
              key={`${e}_lang`}
              className={styles.language}
            >
              {localesMap[e]}
            </span>
            {i === a.length - 1 ? null : <div className={styles.dot} />}
          </>
        );
      })}
    </div>
  );
}
