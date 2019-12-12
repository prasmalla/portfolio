import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/projects"

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    {data.allSanityProject.edges.map(({ node: project }) => (
      <Project
        key={`preview-${project.slug.current}`}
        slug={project.slug.current}
        imageData={project.image.asset.fluid}
        title={project.title}
        tags={project.tags}
        description={project.description}
      />
    ))}
  </Layout>
)
