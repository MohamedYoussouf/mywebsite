import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'

function TagPage ({ pageContext, data }) {
  const { tag, currentPage, numPages} = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `مواضيع تحت الوسم "${tag}"`
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/blog/tags/${tag}` : (currentPage - 1).toString()
  const nextPage = `/blog/tags/${tag}/${(currentPage + 1).toString()}`

    const postList = edges.map(post=>{
        return (
            <div className="py-5 px-3 md:flex mb-5 border-b-2 border-gray-300">
                <Img className=" w-auto md:w-1/5 md:ml-4 self-start rounded-lg" fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}/>
              <div className="w-4/5">
                <a className="px-3 py-1 inline-block text-sm bg-gray-700 text-gray-100" href="/">tag</a>
                <a className="mb-1 block hover:no-underline" href={post.node.frontmatter.path}><h3 className=" text-xl font-bold mb-0">{post.node.frontmatter.title}</h3></a>
                <span className=" text-base text-gray-600 mb-1 inline-block">{post.node.frontmatter.date}</span>
                <p className=" text-base text-gray-800 text-sm leading-relaxed">{post.node.excerpt}</p>
              </div>
            </div>
        )
    })
    console.log(data.allMarkdownRemark.edges)
    return (
      <Layout>
        <div className="container mx-auto px-3 md:px-64">
            <h1 className="text-3xl mt-8 mb-5">
              {tagHeader}
            </h1>
            {postList}
            <div className="text-center py-8">
              {!isFirst && (
                <Link 
                  className="inline-block px-2 mx-1 text-xl hover:no-underline focus:no-underline font-display"
                  to={prevPage} 
                  rel="prev">
                  السابق
                </Link>
              )}
              {Array.from({ length: numPages }, (_, i) => (
                <Link 
                key={`pagination-number${i + 1}`} 
                className="inline-block px-2 mx-1 text-xl hover:no-underline focus:no-underline font-display"
                to={`blog/tags/${tag}/${i === 0 ? "" : i + 1}`}>
                  {i + 1}
                </Link>
              ))}
              {!isLast && (
                <Link 
                  className="inline-block px-2 mx-1 text-xl hover:no-underline focus:no-underline font-display"
                  to={nextPage} 
                  rel="next">
                  التالي
                </Link>
              )}
            </div>
        </div>
      </Layout>
    )
}

export default TagPage;

export const pageQuery = graphql`
  query TagsListQuery ($tag: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
        edges {
          node {
            frontmatter {
              title
              path
              date
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt(pruneLength: 300, truncate: true)
          }
        }
      }
  }
`