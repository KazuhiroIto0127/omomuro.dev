import * as React from "react"
import * as styles from '../styles/_sidenav.module.scss'

const SideNav = ({content}) => {
  return (
    <aside className={styles.wrap}>
      <div className={styles.news}>
        <section>{content}</section>
      </div>
    </aside>
  )
}

export default SideNav
