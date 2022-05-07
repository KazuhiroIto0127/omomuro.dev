import React, { useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SideNav from "../components/sidenav"
import MenuNav from "../components/menunav"
import * as styles from '../styles/_layout.module.scss'

const Layout = ({ location, title, main, sideNav }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu(e) {
    e.preventDefault();
    setIsOpen(isOpen => !isOpen)
  }
  function closeMenu(e) {
    e.preventDefault();
    setIsOpen(isOpen => false)
  }

  return (
    <div className={styles.wrap}
      data-is-root-path={isRootPath}
      data-is-menu-open={isOpen}
    >
      <div className={styles.siteOverlay} onClick={closeMenu}></div>
      <MenuNav toggleMenu={toggleMenu}></MenuNav>
      <div className={styles.contentWrap}>
        <Header location={location} title={title} toggleMenu={toggleMenu}/>
        <div className={styles.mainWrap}>
          <main>{main}</main>
          {sideNav && (
            <SideNav content={sideNav}></SideNav>
          )}
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
