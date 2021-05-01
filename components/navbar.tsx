import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";

import styles from "../styles/navbar.module.css"

export default function Navbar() {
    /**
     * @reference https://gist.github.com/remy/0dde38897d6d660f0b63867c2344fb59#gistcomment-3714984
     */
    const router = useRouter();
    const activeLink = (path,locale, content, activeClass = styles.active_route, normalClass = '') => {
        let className = router.pathname === path ? activeClass : normalClass;
        return <Link href={path} locale={locale}><a className={className}>{content}</a></Link>        
    }

    return (
        <nav className={styles.navbar_wrapper}>
            <div className={styles.navbar_content}>
                <div className={styles.logo_wrapper}>
                    <Image src={"/assets/logo.svg"} height={200} width={200}></Image>
                </div>
                <div className={styles.routes}>
                    {activeLink('/',router.locale, 'About')}
                    <a
                        href={"https://forms.gle/HeH3xrvjP1VfFUzM7"}
                        rel="noreferrer noopener" target="_blank">
                        Volunteer
                    </a>
                     {router.locale=="en-us"?activeLink('/','hi-in', 'Hindi'):activeLink('/', 'en-us','English')}
                    {/* {activeLink('/volunteer', 'Volunteer')} */}
                </div>
            </div>
        </nav>
    )
}
// import Link from "next/link"
// import Image from "next/image"

// import style from "../styles/Navbar.module.scss"

// import Logo from "./logo"

// interface Props {
//     page: "speakers" | "sponsors" | "home"
// }

// export default function Navbar(props: Props) {
//     return (
//         <nav className={style.navbar_wrapper}>
//             <div className={style.logo}>
//                 <Logo />
//             </div>
//             <div className={style.routes}>
//                 <Link href="/speakers"><a className={props.page === "speakers" ? "inRed" : null}>Speakers</a></Link>
//                 {/* <Link href="/team">Team</Link> */}
//                 <Link href="/sponsors"><a className={props.page === "sponsors" ? "inRed" : null}>Sponsors</a></Link>
//             </div>
//             <div className={style.social}>
//                 <a href="https://linkedin.com/company/tedxxie" rel="noreferrer noopener" target="_blank">
//                     <Image layout={"fixed"}
//                         src="/assets/linkedin.svg"
//                         width={20}
//                         height={20}
//                         alt={"linkedin icon"} />
//                 </a>
//                 <a href="https://instagram.com/tedxxie/" rel="noreferrer noopener" target="_blank">
//                     <Image layout={"fixed"}
//                         src="/assets/instagram.svg"
//                         width={20}
//                         height={20}
//                         alt={"instagram icon"} />
//                 </a>
//             </div>

//         </nav>
//     )
// }