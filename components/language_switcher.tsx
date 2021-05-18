import { useRouter } from "next/router";
import { LocalesMap } from "../shared/LocalesMap";
import styles from "../styles/language_switcher.module.css";

export default function LanguageSwitcher() {
  const { locales, push, pathname, query } = useRouter();

  const changeLocale = (e: string) => {
    return push(
      {
        pathname,
        query,
      },
      {
        pathname,
        query,
      },
      {
        locale: e,
      }
    );
  };

  return (
    <div className={styles.language_wrapper}>
      {locales.map((e, i, a) => {
        return (
          <>
            <span
              onClick={() => changeLocale(e)}
              key={`${e}_lang`}
              className={styles.language}
            >
              {LocalesMap[e]}
            </span>
            {i === a.length - 1 ? null : <div className={styles.dot} />}
          </>
        );
      })}
    </div>
  );
}
