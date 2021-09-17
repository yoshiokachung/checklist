import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <ul>
            {data.allMicrocmsProject.edges.map(({ node }) => (
                <li key={node.projectId}>
                    <Link to={`/cases/${node.projectId}`}>{node.title}</Link>
                    <StaticImage src={node.cover.url} />
                </li>
            ))}
        </ul>
    </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsProject {
      edges {
        node {
            id
            title
            summery
            contents
            publishedAt
            projectId
            cover {
                url
            }   
        }
      }
    }
  }
`