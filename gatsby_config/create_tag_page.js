const path = require(`path`)

module.exports = async function(graphql, actions, reporter){
  const { createPage } = actions

  const tagPage = path.resolve(`./src/templates/tag-index.js`)
  const result = await graphql(
    `
    {
      allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: ASC}
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
            sourceDirName
            urlPath
          }
          frontmatter {
            tags
            category
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
    // tagページ //
    const tagListTemp = []
    posts.forEach(post => {
      const tags = post.frontmatter.tags
      tags.forEach(tag => {
        tagListTemp.push(tag)
      })
    })
    // 被ってるタグを削除して配列に再変換 //
    const tagSet = new Set(tagListTemp)
    const tagList = Array.from(tagSet)
    // タグページ生成 //
    if (tagList.length !== 0) {
      tagList.forEach(tag => {
        createPage({
          path: `/tag/${tag}/`,
          component: tagPage,
          context: {
            slug: tag,
          },
        })
      })
    }
  }
}
