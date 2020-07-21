import React from "react"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const SectionHeader = styled.h2`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
  color: #b67f2e;
`
const BorderedImage = styled(Col)`
  border: 2px solid #b67f2e;
`

function ExclusiveOffers() {
  const data = useStaticQuery(graphql`
    query {
      champion: file(relativePath: { eq: "champion.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amazingGrace: file(relativePath: { eq: "amazing-grace-promo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iconsPark: file(relativePath: { eq: "icons-park.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SectionHeader>Exclusive Offers</SectionHeader>
      <Row>
        <BorderedImage sm={12} md={12} lg={4} className="mb-3 p-0">
          <Img fluid={data.iconsPark.childImageSharp.fluid} />
        </BorderedImage>
        <BorderedImage sm={12} md={12} lg={4} className="mb-3 p-0">
          <Img fluid={data.amazingGrace.childImageSharp.fluid} />
        </BorderedImage>
        <BorderedImage sm={12} md={12} lg={4} className="mb-3 p-0">
          <Img fluid={data.champion.childImageSharp.fluid} />
        </BorderedImage>
      </Row>
    </>
  )
}

export default ExclusiveOffers
