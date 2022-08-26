import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMarkdownRemark.nodes.map((node) => (
          <article key={node.id}>
            <h2>
                <Link to={`/blog/${node.id}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>Tags: {node.frontmatter.tags === null ? "" :  node.frontmatter.tags.join(', ')}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY"),
          title
          tags
        }
        id
        excerpt
      }
    }
  }
  
`

export default BlogPage