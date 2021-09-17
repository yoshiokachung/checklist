import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const CasePage = ({ data }) => (
    <Layout>
        <SEO title={data.microcmsProject.title} />
        <h1>{data.microcmsProject.title}</h1>
        <img src={data.microcmsProject.cover.url} alt=""/>
        <div
            dangerouslySetInnerHTML={{
                __html: `${data.microcmsProject.contents}`,
            }}
        />
    </Layout>
)

export default CasePage

export const query = graphql`
  query($id: String!) {
    microcmsProject(id: { eq: $id }) {
        cover {
          url
          height
          width
        }
        contents
        summery
        projectId
        title
        id
    }
  }
`