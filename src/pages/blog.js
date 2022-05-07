import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GoHome } from "react-icons/go";

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from '../styles/_post-list-item.module.scss'
import * as titleStyles from '../styles/_section_title.module.scss'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.blog.nodes
  const defaultImage = data.imageSharp.gatsbyImageData

  return (
    <Layout
      location={location}
      title={siteTitle}
      main={
        <React.Fragment>
          <Seo title="Blog" />
          <div className={styles.contentWrap}>
            <div className={titleStyles.title}>
              <Link to="/" itemProp="url"><GoHome /></Link>
              <span>/</span>
              <h2>Blog</h2>
            </div>
            <ol className={styles.blogs}>
              {posts.map(post => {
                const thumbnail = post.frontmatter.thumbnailPath?.childImageSharp?.gatsbyImageData || defaultImage
                const thumbnail_alt = post.frontmatter.thumbnailPath?.childImageSharp?.fixed?.originalName || data.imageSharp.fixed?.originalName

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
                          alt={thumbnail_alt}
                          quality={95}
                          className={styles.thumbnail}
                        />
                        <header>
                          <h2>
                            <span itemProp="headline">{post.frontmatter.title}</span>
                          </h2>
                          <div className={styles.meta}>
                            <small>{post.frontmatter.date}</small>
                            <span className={styles.category}>{post.frontmatter.category}</span>
                          </div>
                        </header>
                      </article>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </div>
        </React.Fragment>
      }
    >
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  fragment markdownFragIndex on MarkdownRemark {
    id
    fields {
      sourceDirName
      slug
      urlPath
    }
    excerpt
    frontmatter {
      date(formatString: "YYYY.M.D")
      title
      category
      thumbnailPath {
        childImageSharp {
          gatsbyImageData(
           layout: FULL_WIDTH
           formats: [AUTO, WEBP, AVIF]
           transformOptions: {fit: COVER}
          )
          fixed {
            originalName
          }
        }
      }
    }
  }

  query {
    site {
      siteMetadata {
        title
      }
    }
    blog: allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {fields: {sourceDirName: {eq: "blog"}}}
      limit: 1000
    ) {
      nodes {
        ...markdownFragIndex
      }
    }
    imageSharp(fluid: {originalName: {eq: "omomuro.dev.png"}}) {
      gatsbyImageData
      fixed {
        originalName
      }
    }
  }
`
