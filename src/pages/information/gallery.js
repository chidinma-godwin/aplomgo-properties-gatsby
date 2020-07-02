import React from "react"
import { Carousel, Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import YouTube from "react-youtube"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    abundanceGrace: file(relativePath: { eq: "abundance-grace.jpg" }) {
      ...fluidImage
    }
    amazingGrace: file(relativePath: { eq: "amazing-grace.jpg" }) {
      ...fluidImage
    }
    aplomGoldCity: file(relativePath: { eq: "aplom-gold-city.jpg" }) {
      ...fluidImage
    }
    champion: file(relativePath: { eq: "champion.jpg" }) {
      ...fluidImage
    }
    properties: file(relativePath: { eq: "properties.jpg" }) {
      ...fluidImage
    }
    slide1: file(relativePath: { eq: "slide1.jpg" }) {
      ...fluidImage
    }
    slide1a: file(relativePath: { eq: "slide1a.jpg" }) {
      ...fluidImage
    }
    slide2: file(relativePath: { eq: "slide2.jpg" }) {
      ...fluidImage
    }
    slide2a: file(relativePath: { eq: "slide2a.jpg" }) {
      ...fluidImage
    }
    slide3: file(relativePath: { eq: "slide3.jpg" }) {
      ...fluidImage
    }
    slide4: file(relativePath: { eq: "slide4.jpg" }) {
      ...fluidImage
    }
    slide5: file(relativePath: { eq: "slide5.jpg" }) {
      ...fluidImage
    }
    slide6: file(relativePath: { eq: "slide6.jpg" }) {
      ...fluidImage
    }
    slide7: file(relativePath: { eq: "slide7.jpg" }) {
      ...fluidImage
    }
    slide8: file(relativePath: { eq: "slide8.jpg" }) {
      ...fluidImage
    }
    slide10: file(relativePath: { eq: "slide10.jpg" }) {
      ...fluidImage
    }
  }
`

const Wrapper = styled(Container)`
  margin-top: 90px;
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Photo = styled(Img)`
  height: 80vh;
  object-fit: cover;
  max-width: 100%;
`

const Caption = styled.h3`
  color: #ab1010;
  font-weight: 800 !important;
`

function Gallery({ data }) {
  const opts = {
    width: "100%",
    height: "350px",
    playerVars: {
      origin: "http://aplomgo.com",
      modestbranding: 1,
      rel: 0,
      controls: 1,
    },
  }
  return (
    <Wrapper>
      <h2 className="mb-3">Photo Gallery</h2>
      <Carousel interval="3000" className="w-100">
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.abundanceGrace.childImageSharp.fluid}
            alt="First slide"
          />
          <Carousel.Caption>
            <Caption>Abundance Grace</Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.amazingGrace.childImageSharp.fluid}
            alt="First slide"
          />
          <Carousel.Caption>
            <Caption>Amazing Grace</Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.aplomGoldCity.childImageSharp.fluid}
            alt="First slide"
          />
          <Carousel.Caption>
            <Caption>Aplom Gold City</Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.champion.childImageSharp.fluid}
            alt="First slide"
          />
          <Carousel.Caption>
            <Caption>Champions Court</Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.properties.childImageSharp.fluid}
            alt="First slide"
          />
          <Carousel.Caption>
            <Caption>Properties Logo</Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.slide1.childImageSharp.fluid}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.slide1a.childImageSharp.fluid}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.slide2.childImageSharp.fluid}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.slide2a.childImageSharp.fluid}
            alt="First slide"
          />
          <Carousel.Caption>
            <Caption>Equipment</Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.slide3.childImageSharp.fluid}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.slide4.childImageSharp.fluid}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.slide5.childImageSharp.fluid}
            alt="First slide"
          />
          <Carousel.Caption>
            <Caption>Visit to Orphanage Homes</Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.slide6.childImageSharp.fluid}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.slide7.childImageSharp.fluid}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.slide8.childImageSharp.fluid}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Photo
            className="d-block w-100"
            fluid={data.slide10.childImageSharp.fluid}
            alt="First slide"
          />
          <Carousel.Caption>
            <Caption>Visit to Orphanage Homes</Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="text-center mt-5 mb-3">
        <h2 className="mb-3">Video Gallery</h2>
        <Row>
          <Col sm="12" md="6">
            <YouTube videoId="IQS6Ph2sha0" opts={opts} />
          </Col>
          <Col sm="12" md="6">
            <YouTube videoId="zuwBdTC2mgo" opts={opts} />
          </Col>
          <Col sm="12" md="6">
            <YouTube videoId="_p7roePRsOQ" opts={opts} />
          </Col>
          <Col sm="12" md="6">
            <YouTube videoId="4X0BPZDWwVY" opts={opts} />
          </Col>
        </Row>
      </section>
    </Wrapper>
  )
}

export default Gallery
