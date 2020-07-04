import React from "react"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Wrapper = styled(Col)`
  padding: 0em 0.5em;
`

const SectionHeader = styled.h2`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
  color: #b67f2e;
`
const Champion = styled.div`
  border: 2px solid black;
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
      remo: file(relativePath: { eq: "remo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      exclusive: file(relativePath: { eq: "exclusive.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flyer: file(relativePath: { eq: "flyer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      properties: file(relativePath: { eq: "properties.jpg" }) {
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
        <Wrapper md={12} lg={8}>
          <Champion className="mb-3">
            <Img fluid={data.champion.childImageSharp.fluid} />
          </Champion>
          <div className="mb-3">
            <Img fluid={data.exclusive.childImageSharp.fluid} />
            {/* <div.Body>
          <div.Text>Lorem Ipsum</div.Text>
        </div.Body>
        <div.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </div.Footer> */}
          </div>
        </Wrapper>

        <Wrapper md={12} lg={4}>
          <Img fluid={data.remo.childImageSharp.fluid} className="mb-3" />
          <Img fluid={data.flyer.childImageSharp.fluid} className="mb-3" />
        </Wrapper>
      </Row>
    </>
  )
}

export default ExclusiveOffers
