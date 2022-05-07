import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../styles/_author_icon.module.scss'

const AuthorIcon = () => {
  return (
    <div className={styles.wrap}>
      <StaticImage
        className={styles.avatar}
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/nyan.png"
        width={100}
        height={100}
        quality={95}
        alt="Profile picture"
      />
    </div>
  )
}

export default AuthorIcon
