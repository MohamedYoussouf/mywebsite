import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'
import ShareButtons from '../components/shareButtons'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="container-inner mx-auto">
        <div className="post pb-20 px-3 md:px-40">
          <h1 className=" text-2xl md:text-4xl font-bold mb-1">{frontmatter.title}</h1>
          <span className="text-base mb-1 inline-block">{frontmatter.date}</span>
          <div
            className="pt-5 pb-6 leading-loose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <ShareButtons/>
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`