import React from "react"
import { Link } from "gatsby"

import "./layout.scss"

const Layout = ({ children }) => (
  <>
    <header className="header">
      <Link to="/">Prasanna Malla</Link>
    </header>
    <main className="content">{children}</main>
  </>
)

export default Layout
