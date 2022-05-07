const path = require(`path`)

module.exports = async function(graphql, actions, reporter){
  const { createPage } = actions

  const categoryPage = path.resolve(`./src/templates/category-index.js`)
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
    const categoryListTemp = []
    posts.forEach(post => {
      const category = post.frontmatter.category
      categoryListTemp.push(category)
    })
    // 被ってるタグを削除して配列に再変換 //
    const categorySet = new Set(categoryListTemp)
    const categoryList = Array.from(categorySet)
    // タグページ生成 //
    if (categoryList.length !== 0) {
      categoryList.forEach(category => {
        createPage({
          path: `/category/${category}/`,
          component: categoryPage,
          context: {
            slug: category,
          },
        })
      })
    }
  }
}
