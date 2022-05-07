module.exports = {
  siteMetadata: {
    title: `omomuro.dev`,
    author: {
      name: `Kazuhiro Ito`,
      summary: `東京在住のえんじにあん。主にWeb系サーバーサイドとフロントエンド。`,
    },
    description: `おもむろにdevしたい。Kazuhiro ItoのTech系ブログでありポートフォリオです。`,
    siteUrl: `https://omomuro.dev`,
    social: {
      twitter: `kazuhiroIto0127`,
    },
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark',
        classNameLight: 'light',
        storageKey: 'darkMode',
        minify: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'omomuro.dev',
        protocol: "https",
        hostname: "omomuro.dev",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/works`,
        name: `works`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-prismjs-title`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            }
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.urlPath,
                  guid: site.siteMetadata.siteUrl + node.fields.urlPath,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      sourceDirName
                      slug
                      urlPath
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "omomuro.dev's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `omomuro.dev`,
        short_name: `omomuro`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6488f6`,
        display: `minimal-ui`,
        icon: `src/images/profile-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-YBD2S57910", // Google Analytics / GA
        ],
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-sitemap`,
  ],
}
