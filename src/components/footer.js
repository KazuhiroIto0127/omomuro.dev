import React from "react"
import * as styles from '../styles/_footer.module.scss'
import { FaRss } from "react-icons/fa"
import { SiFeedly } from "react-icons/si";
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={styles.wrap}>
      <p>© {new Date().getFullYear()}, Kazuhiro Ito.</p>
      <p>All Rights Reserved.</p>
      <div>
        <a href='https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fomomuro.dev%2Frss.xml'
              target='blank' rel="noopener noreferrer" aria-label="feedly">
          <SiFeedly />
        </a>
        <Link to="/rss.xml" aria-label="rss"><FaRss /></Link>
      </div>
    </footer>
  )
}

export default Footer

