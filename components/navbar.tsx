import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import LanguageSwitcher from "./language_switcher";
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  /**
   * @reference https://gist.github.com/remy/0dde38897d6d660f0b63867c2344fb59#gistcomment-3714984
   */
  const router = useRouter()
  const activeLink = (path, content, activeClass = styles.active_route, normalClass = '') => {
    const className = router.pathname === path ? activeClass : normalClass
    return <Link href={path}><a className={className}>{content}</a></Link>
  }
  return (
    <>
    <nav className={styles.navbar_wrapper}>
      <div className={`${styles.navbar_content} ${styles.navbar_content_mobile}`}>
        <div className={styles.logo_wrapper}>
          <Image src={'/assets/logo.svg'} height={200} width={200}></Image>
          <button className={styles.cross}>
            <div className={`${styles.cross_line} ${styles.cross_1}`}></div>
            <div className={`${styles.cross_line} ${styles.cross_2}`}></div>
          </button>
        </div>
        <button className={styles.hamburger}>
          <div className={styles.hamburger_line}></div>
          <div className={styles.hamburger_line}></div>
          <div className={styles.hamburger_line}></div>
        </button>
        <div className={`${styles.routes} ${styles.routes_mobile}`}>
          {activeLink('/', 'About')}
          <a
            href={'https://forms.gle/HeH3xrvjP1VfFUzM7'}
            rel="noreferrer noopener" target="_blank">
              Volunteer
          </a>
          {/* {activeLink('/volunteer', 'Volunteer')} */}
        </div>
      </div>
    </nav>
    <LanguageSwitcher />
    </>
  )
}
