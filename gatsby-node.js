const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    const blogPosts = posts.filter( edge => edge.node.frontmatter.templateKey === 'blog-post' )
    const pages = posts.filter( edge => edge.node.frontmatter.templateKey !== 'blog-post' )

    blogPosts.forEach( (edge, index) => {
      const id = edge.node.id
      const next = index === 0 ? blogPosts[blogPosts.length - 1].node : blogPosts[index - 1].node
      const prev = index === blogPosts.length - 1 ? blogPosts[0].node : blogPosts[index + 1].node
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          next,
          prev,
        },
      })
    })
    pages.forEach( (edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach( (tag, index) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`
      const nextTagPath = index === 0 ? `/tags/${_.kebabCase(tags[posts.length - 1])}/` : `/tags/${_.kebabCase(tags[index - 1])}/`
      const prevTagPath = index === posts.length - 1 ? `/tags/${_.kebabCase(tags[0])}/` : `/tags/${_.kebabCase(tags[index + 1])}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
          nextTagPath,
          prevTagPath,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
