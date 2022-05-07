const path = require(`path`)

module.exports = async function(graphql, actions, reporter){
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
    {
      allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: ASC}
        limit: 1000
        filter: {fields: {sourceDirName: {eq: "blog"}}}
      ) {
        nodes {
          id
          fields {
            slug
            sourceDirName
            urlPath
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: `${post.fields.urlPath}`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}
