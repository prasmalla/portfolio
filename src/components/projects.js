import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ slug, imageData, title, description }) => (
  <div className="project">
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={`/${slug}/`}>View Project &rarr;</Link>
  </div>
)

export default Project
