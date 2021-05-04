import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import LanguageSwitcher from "./language_switcher";
import styles from '../styles/navbar.module.css'
import { appSWRFetcher } from "../helpers"

export default function Navbar() {
  /**
   * @reference https://gist.github.com/remy/0dde38897d6d660f0b63867c2344fb59#gistcomment-3714984
   */
  const [isMenuOpen, setMenu] = useState(false)
  const router = useRouter()
  const locale = router.locale;
  const { data, error } = useSWR(`/locales/${locale}.json`, appSWRFetcher)
  const activeLink = (path, content, activeClass = styles.active_route, normalClass = '') => {
    const className = router.pathname === path ? activeClass : normalClass
    return <Link href={path}><a className={className}>{content}</a></Link>
  }
  return (
    <>
    <nav className={styles.navbar_wrapper}>
      <div className={`${styles.navbar_content} ${isMenuOpen ? styles.navbar_content_mobile : styles.navbar_content}`}>
        <div className={styles.logo_wrapper}>
          <Image src={'/assets/logo.svg'} height={200} width={200}></Image>
          {isMenuOpen && 
            <button className={styles.cross} onClick={()=> setMenu(false)}>
              <div className={`${styles.cross_line} ${styles.cross_1}`}></div>
              <div className={`${styles.cross_line} ${styles.cross_2}`}></div>
            </button>
          }
        </div>

        {!isMenuOpen && 
            <button className={styles.hamburger} onClick={()=> setMenu(true)}>
              <div className={styles.hamburger_line}></div>
              <div className={styles.hamburger_line}></div>
              <div className={styles.hamburger_line}></div>
            </button>
        }
        <div className={`${styles.routes} ${isMenuOpen ? null : styles.routes_mobile}`}>
          {activeLink('/', data?.about)}
          <a
            href={'https://forms.gle/HeH3xrvjP1VfFUzM7'}
            rel="noreferrer noopener" target="_blank">
              {data?.volunteer}
          </a>
          {/* {activeLink('/volunteer', 'Volunteer')} */}
        </div>
      </div>
    </nav>
    <LanguageSwitcher />
    </>
  )
}
