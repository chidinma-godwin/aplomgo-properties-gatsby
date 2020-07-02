import React from "react"

import styled from "styled-components"
import { Link } from "gatsby"

const CustomPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const NotFoundPage = () => (
  <CustomPage>
    {/* <SEO title="404: Not found" /> */}
    <h1>Ooops! This page does not exist</h1>
    <Link to="/">Go back to the home page</Link>
  </CustomPage>
)

export default NotFoundPage
