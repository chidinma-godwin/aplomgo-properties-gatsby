import React from "react"
// import { Row, Col } from "react-bootstrap"
import { Card, CardGroup, ListGroup } from "react-bootstrap"
import styled from "styled-components"
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"

const SectionHeader = styled.h2`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
  color: #b67f2e;
`
// const BorderedImage = styled(Col)`
//   border: 2px solid #b67f2e;
// `

const AboutCardDeck = styled(CardGroup)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  /* @media (min-width: 991.98px) {
    grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  } */
`

const CustomCard = styled(Card)`
  &&& {
    border: 3px solid #b67f2e;
    width: 100%;
  }
  /* @media (min-width: 991.98px) {
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  } */
`

const CardHeader = styled(Card.Header)`
  background: #b67f2e;
  color: #fff;
  padding: 0.7em;
  font-size: 1.5rem;
  text-align: center;
  &:nth-child(1) {
    border-radius: 0;
  }
`

const CustomListGroup = styled(ListGroup)`
  margin-top: 1.2rem;
`

function ExclusiveOffers() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     champion: file(relativePath: { eq: "champion.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     amazingGrace: file(relativePath: { eq: "amazing-grace-promo.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     exclusive: file(relativePath: { eq: "exclusive.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <SectionHeader>Exclusive Offers</SectionHeader>
      <AboutCardDeck>
        <CustomCard className="mb-5">
          <CardHeader>One Millio Naira Discount</CardHeader>
          <Card.Body>
            <span className="mb-4">
              Get 1 Million Naira discount when you buy land in the following
              estates:
            </span>
            <CustomListGroup variant="flush">
              <ListGroup.Item>Icons Park Estate</ListGroup.Item>
              <ListGroup.Item>AGL Vision Estate</ListGroup.Item>
              <ListGroup.Item>Emmanuel Court</ListGroup.Item>
            </CustomListGroup>
          </Card.Body>
        </CustomCard>

        <CustomCard className="mb-5">
          <CardHeader>Buy Two Get One Free</CardHeader>
          <Card.Body>
            <span className="mb-4">
              Buy two plots of land and get a plot free. This offer is available
              for the properties listed below.
            </span>
            <CustomListGroup variant="flush">
              <ListGroup.Item>Green Meadow Estate</ListGroup.Item>
              <ListGroup.Item>Champions Court</ListGroup.Item>
              <ListGroup.Item>Abundance Grace Estate</ListGroup.Item>
              <ListGroup.Item>Amazing Grace Estate</ListGroup.Item>
              <ListGroup.Item>Aplom Gold City</ListGroup.Item>
              <ListGroup.Item>Flo Bliss Garden</ListGroup.Item>
            </CustomListGroup>
          </Card.Body>
        </CustomCard>
      </AboutCardDeck>

      {/* <Row>
        <BorderedImage sm={12} md={12} lg={4} className="mb-3 p-0">
          <Img fluid={data.amazingGrace.childImageSharp.fluid} />
        </BorderedImage>
        <BorderedImage sm={12} md={12} lg={4} className="mb-3 p-0">
          <Img fluid={data.champion.childImageSharp.fluid} />
        </BorderedImage>
        <BorderedImage sm={12} md={12} lg={4} className="mb-3 p-0">
          <Img fluid={data.exclusive.childImageSharp.fluid} />
        </BorderedImage>
      </Row> */}
    </>
  )
}

export default ExclusiveOffers
