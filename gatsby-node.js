const createBlogPages = require("./gatsby_config/create_blog_page.js")
const createWorksPages = require("./gatsby_config/create_works_page.js")
const createTagPages = require("./gatsby_config/create_tag_page.js")
const createCategoryPages = require("./gatsby_config/create_category_page.js")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPages(graphql, actions, reporter)
  await createWorksPages(graphql, actions, reporter)
  await createTagPages(graphql, actions, reporter)
  await createCategoryPages(graphql, actions, reporter)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // const slug = createFilePath({ node, getNode })
    const slug = `/${getNode(node.parent).name}/`
    const sourceDirName = getNode(node.parent).sourceInstanceName
    const urlPath = `/${sourceDirName}${slug}`

    createNodeField({
        name: `slug`,
        node,
        value: slug,
      }
    )
    createNodeField(
      {
        name: `sourceDirName`,
        node,
        value: sourceDirName,
      }
    )
    createNodeField(
      {
        name: `urlPath`,
        node,
        value: urlPath,
      }
    )
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
      sourceDirName: String
      urlPath: String
    }
  `)
}
