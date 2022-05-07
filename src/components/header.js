import React from "react"
import { Link } from "gatsby"
import * as styles from '../styles/_header.module.scss'
import { BiMenu } from "react-icons/bi";
import ThemeToggleBtn from "./themeToggler"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({location, title, toggleMenu}) => {
  return (
    <header className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <BiMenu />
          </div>
          <h1>
            <Link to="/" className={styles.logo}>
              <StaticImage
                className={styles.avatar}
                layout="fixed"
                formats={["AUTO", "WEBP", "AVIF"]}
                src="../images/pengin13.png"
                width={50}
                height={50}
                alt="Profile picture"
              />
              <div className={styles.logotext}>
                <span className={styles.logo_omomuro}>omomuro</span>
                <span className={styles.logo_dot}>.</span>
                <span className={styles.logo_dev}>dev</span>
              </div>
            </Link>
          </h1>
          <div className={styles.rightSpan}></div>
          <ul>
            <li>
              <Link to="/blog" activeClassName={styles.active}>Blog</Link>
            </li>
            <li>
              <Link to="/works" activeClassName={styles.active}>Works</Link>
            </li>
            <li>
              <Link to="/about" activeClassName={styles.active}>About</Link>
            </li>
          </ul>
        </div>
        <div className={styles.themeToggleBtn}>
          <ThemeToggleBtn position="Header" />
        </div>
      </div>
    </header>
  )
}

export default Header
