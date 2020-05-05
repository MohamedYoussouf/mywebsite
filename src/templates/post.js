import React from "react"
import { graphql, Link } from "gatsby"
import _ from 'lodash'
import Layout from '../components/layout'
import ShareButtons from '../components/shareButtons'

export default function Template(props) {
  const { markdownRemark } = props.data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const tagList = frontmatter.tags.map((tag)=><Link className="px-3 py-1 ml-3 inline-block text-sm bg-gray-700 bg-primary text-white rounded hover:no-underline focus:no-underline" to={`/blog/tags/${_.kebabCase(tag)}/`}>{tag}</Link>)
  console.log(props)
  return (
    <Layout>
      <div className="container-inner mx-auto">
        <div className="post pt-8 pb-20 px-3 md:px-40">
          {tagList}
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
        tags
      }
    }
  }
`