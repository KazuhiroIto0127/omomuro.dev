import * as React from "react"
import { graphql } from "gatsby"
import * as styles from '../styles/_404.module.scss'

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const emojis = ["🐾","👽","🐭","👻"];

  return (
    <Layout
      location={location}
      title={siteTitle}
      main={
        <React.Fragment>
          <Seo title="404 Not Found" />
          <div className={styles.wrap}>
            <h1>404 Not Found</h1>
            <p>ページがないよ〜</p>
            <p className={styles.emoji}>{emojis[Math.floor(Math.random() * emojis.length)]}</p>
          </div>
        </React.Fragment>
      }
    >
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
