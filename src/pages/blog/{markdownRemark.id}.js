import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.title}>
      <section
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          itemProp="articleBody"
        />
    </Layout>
  )
}

export const Head = () => <Seo title="Super Cool Blog Posts" />

export const query = graphql`
query ($id: String) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
    }
    html
  }
}`


export default BlogPost