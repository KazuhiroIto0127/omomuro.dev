/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../styles/_bio.module.scss'
import { AiOutlineTwitter } from "react-icons/ai";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className={styles.wrap}>
      <StaticImage
        className={styles.avatar}
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/nyan.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          <p>
            <strong>{author.name}</strong><br/>
            {author?.summary || null}
          </p>
          <p>
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              <AiOutlineTwitter /> @{social?.twitter}
            </a>
          </p>
        </div>
      )}
    </div>
  )
}

export default Bio
