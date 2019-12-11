import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/projects"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            description
            slug
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges

  return (
    <Layout>
      {projects.map(({ node: project }) => {
        const { slug, title, description } = project
        const imageData = project.image.childImageSharp.fluid
        return (
          <Project
            slug={slug}
            imageData={imageData}
            title={title}
            description={description}
          />
        )
      })}
    </Layout>
  )
}
