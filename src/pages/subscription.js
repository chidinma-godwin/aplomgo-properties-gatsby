import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"

export const query = graphql`
  query {
    propertiesLogo: file(relativePath: { eq: "properties.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Wrapper = styled(Container)`
  margin-top: 120px;
  margin-bottom: 3em;
`

const CustomLink = styled(Link)`
  &&& {
    color: "blue";
    display: block;
    margin-bottom: 1em;
  }
`

const CustomImage = styled(Img)`
  height: 80vh;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

function Subscription({ data }) {
  return (
    <Wrapper>
      <CustomImage
        fluid={data.propertiesLogo.childImageSharp.fluid}
        className="mb-5"
      />
      <div>
        <h3>
          APLOM GO. PROPERTY DEVELOPMENT &amp; REAL ESTATE INVESTMENT
          SUBSCRIPTION
        </h3>
        <p>Please select a property from the list below</p>
        <div>
          <CustomLink to="/subscription/champions-court">
            Champions Court Estate
          </CustomLink>
          <CustomLink to="/subscription/aplom-gold">Aplom Gold City</CustomLink>
          <CustomLink to="/subscription/amazing-grace">
            Amazing Grace Estate
          </CustomLink>
          <CustomLink to="/subscription/icons-park">
            Icons Park Estate
          </CustomLink>
          <CustomLink to="/subscription/green-meadow">
            Green Meadow Estate
          </CustomLink>
          <CustomLink to="/subscription/abundance-grace">
            Abundance Grace Estate
          </CustomLink>
          <CustomLink to="/subscription/agl-vision">
            AGL Vision EState
          </CustomLink>
        </div>
      </div>
    </Wrapper>
  )
}

export default Subscription
