import * as React from "react"
import * as styles from '../styles/_menunav.module.scss'
import { Link } from "gatsby"
import { MdClose } from "react-icons/md";
import { GoHome } from "react-icons/go";
import ThemeToggleBtn from "./themeToggler"

const MenuNav = ({toggleMenu}) => {
  return (
    <nav className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.closeIcon} onClick={toggleMenu}>
          <MdClose />
        </div>
      </div>
      <ul>
        <li>
          <Link to="/" activeClassName={styles.active}><GoHome/>Home</Link>
        </li>
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
      <div className={styles.themeToggleBtn}>
        <ThemeToggleBtn position="MenuNav" />
      </div>
    </nav>
  )
}

export default MenuNav
