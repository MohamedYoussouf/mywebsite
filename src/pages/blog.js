import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'

function BlogPage(props) {
    const postList = props.data.allMarkdownRemark.edges.map(post=>{
        return (
            <div className="py-5 px-3 flex mb-5 border-b-2 border-gray-300">
              <img className="w-32 mr-4 self-start" src="https://via.placeholder.com/300.png"/>
              <div>
                <a className="px-3 py-1 inline-block text-sm bg-gray-700 text-gray-100" href="/">tag</a>
                <a className="mb-1 block" href={post.node.frontmatter.path}><h3 className=" text-xl font-bold">{post.node.frontmatter.title}</h3></a>
                <span className=" text-base text-gray-600 mb-1 inline-block">{post.node.frontmatter.date}</span>
                <p className=" text-base text-gray-800 text-sm leading-relaxed">{post.node.excerpt}</p>
              </div>
            </div>
        )
    })
    console.log(props.data)
    return (
      <Layout>
        <div className="container mx-auto px-3 md:px-64">
            {postList}
        </div>
      </Layout>
    )
}

export default BlogPage;

export const pageQuery = graphql`
  query blogListQuery {
    allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
              date
            }
            excerpt(pruneLength: 300)
          }
        }
      }
  }
`