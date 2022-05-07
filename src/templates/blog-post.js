import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from '../styles/_blog-post.module.scss'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const category = post.frontmatter.category
  const { previous, next } = data

  return (
    <Layout
      location={location}
      title={siteTitle}
      main={
        <React.Fragment>
          <Seo
            title={post.frontmatter.title}
            description={post.excerpt}
          />
          <div className={styles.contentWrap}>
            <article
              className={styles.post}
              itemScope
              itemType="http://schema.org/Article"
            >
              <div className={styles.category}>
                <Link to={`/category/${category}/`}>{category}</Link>
              </div>
              <header>
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
                <p>{post.frontmatter.date}</p>
                <div className={styles.tags}>
                  <div>
                    {post.frontmatter.tags.map(tag =>(
                      <Link key={`${tag}`} to={`/tag/${tag}/`}>#{tag}</Link>
                    ))}
                  </div>
                </div>
              </header>
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
              <hr />
              <footer>
                <Bio />
              </footer>
            </article>
            <nav className={styles.nav}>
              <ul>
                <li>
                  {previous && (
                    <Link to={`${previous.fields.urlPath}`} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={`${next.fields.urlPath}`} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </React.Fragment>
      }
    >
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        category
        date(formatString: "YYYY年MM月DD日 HH:mm")
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
        urlPath
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
        urlPath
      }
      frontmatter {
        title
      }
    }
  }
`
