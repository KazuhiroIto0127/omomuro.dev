import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from '../styles/_blog-post.module.scss'

const TagPageTemplate = ({ data, location, pageContext }) => {
  const tagName = pageContext.slug
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const defaultImage = data.imageSharp.gatsbyImageData

  return (
    <Layout
      location={location}
      title={siteTitle}
      main={
        <React.Fragment>
          <Seo
            title={tagName}
            description={tagName}
          />
          <h1>
            <span>#{tagName}</span>
          </h1>
          <ol className={styles.blogs}>
            {posts.map(post => {
              const thumbnail = post.frontmatter.thumbnailPath?.childImageSharp?.gatsbyImageData || defaultImage

              return (
                <li key={post.fields.slug} >
                  <Link to={`${post.fields.urlPath}`} itemProp="url">
                    <article
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <GatsbyImage
                        formats={["AUTO", "WEBP", "AVIF"]}
                        image={getImage(thumbnail)}
                        quality={95}
                        className={styles.thumbnail}
                      />
                      <header>
                        <h2>
                          <span itemProp="headline">{post.frontmatter.title}</span>
                        </h2>
                        <small>{post.frontmatter.date}</small>
                      </header>
                    </article>
                  </Link>
                </li>
              )
            })}
          </ol>
        </React.Fragment>
      }
    >
    </Layout>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    imageSharp(fluid: {originalName: {eq: "omomuro.dev.png"}}) {
      gatsbyImageData
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$slug] } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      nodes {
        fields {
          sourceDirName
          slug
          urlPath
        }
        excerpt
        frontmatter {
          date(formatString: "YYYY年MM月DD日")
          title
          thumbnailPath {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                formats: [AUTO, WEBP, AVIF]
                transformOptions: {fit: COVER}
              )
            }
          }
        }
      }
    }
  }
`

