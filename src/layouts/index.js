import React from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "../components/common/header"
import Footer from "../components/common/footer"
import "./layout.css"
import "../fontawesome"
import SEO from "../components/seo"

const Layout = ({ children }) => (
  <>
    <SEO title="Aplom Go." />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
