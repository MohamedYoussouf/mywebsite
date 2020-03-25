/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require(`path`)
 const _ = require("lodash")

 exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage } = actions
   const blogPostTemplate = path.resolve(`src/templates/post.js`)
   const result = await graphql(`
     {
       allMarkdownRemark(
         sort: { order: DESC, fields: [frontmatter___date] }
         limit: 1000
       ) {
         edges {
           node {
             frontmatter {
               path
               tags
             }
           }
         }
       }
     }
   `)
   // Handle errors
   if (result.errors) {
     reporter.panicOnBuild(`Error while running GraphQL query.`)
     return
   }

   // Create blog-list pages
  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 3
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  //  Create blog post pages
   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
     createPage({
       path: node.frontmatter.path,
       component: blogPostTemplate,
       context: {}, // additional data can be passed via context
     })
   })

   // create Tags pages
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach(edge => {
      tags = tags.concat(edge.node.frontmatter.tags);
  });

  // Eliminate duplicate tags
  // tags = _.uniq(tags);
  const countTags = tags.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})

  // Make tag pages
  tags.forEach((tag) => {
    const link = `/blog/tags/${_.kebabCase(tag)}`;

    Array.from({
      length: Math.ceil(countTags[tag] / postsPerPage),
    }).forEach((o, i) => {
      createPage({
        path: i === 0 ? link : `${link}/${i + 1}`,
        component: path.resolve('./src/templates/tag.js'),
        context: {
          tag: tag,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(countTags[tag] / postsPerPage),
        },
      })
    })
  });
 }