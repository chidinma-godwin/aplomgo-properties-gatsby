import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"

export const query = graphql`
  query {
    allPropertiesJson {
      nodes {
        id
        name
        shortName
      }
    }
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
    color: #a56912;
    display: block;
    margin-bottom: 1em;

    &:hover {
      color: #03a84e;
    }
  }
`

const CustomImage = styled(Img)`
  height: 80vh;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  img {
    object-fit: contain !important;
  }
  @media (max-width: 500px) {
    height: fit-content;
  }
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
          {data.allPropertiesJson.nodes.map(property => (
            <CustomLink
              key={property.id}
              to={`/subscription/${property.shortName}`}
            >
              {property.name}
            </CustomLink>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default Subscription
