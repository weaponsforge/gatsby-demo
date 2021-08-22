import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle='Super Cool Blog Post'>
      <p>My blog post contents will go here.</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id:String) 
  {
    mdx(id: {eq: $id}) {
      id
      slug
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      body
    }
  }
`

export default BlogPost
