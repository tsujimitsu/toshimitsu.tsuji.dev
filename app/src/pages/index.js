import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <Link to="about">About this site</Link>
      <div>
        {posts.map(({ node: post }) => {
          const { frontmatter } = post
          return (
            <div key={post.id}>
              <h2>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </h2>
              <p>{frontmatter.date}</p>
              <p>{frontmatter.excerpt}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
          }
        }
      }
    }
  }
`

export default IndexPage
