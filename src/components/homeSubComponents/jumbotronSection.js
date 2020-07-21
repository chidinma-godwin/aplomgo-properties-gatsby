import React from "react"
import { Carousel } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const SlideImage = styled(Img)`
  height: 80vh;
  display: flex;
  align-items: center;
  object-fit: cover;
`

const CarouselContainer = styled(Carousel)`
  margin-top: 80px;
  margin-bottom: 2em;
`

const CarouselCaption = styled(Carousel.Caption)`
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0;
  bottom: 50%;
  color: #ab1010;
  font-weight: 800 !important;
  z-index: 0;
`

function JumbotronSection() {
  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "abundance-grace.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide2: file(relativePath: { eq: "slide2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide3: file(relativePath: { eq: "agl-vision.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide4: file(relativePath: { eq: "icons-park.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <CarouselContainer indicators={false}>
      <Carousel.Item>
        <SlideImage
          className="d-block w-100"
          fluid={data.slide1.childImageSharp.fluid}
          alt="First slide"
        />
        <CarouselCaption>
          <h3>We Derive Joy in Your Comfort</h3>
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <SlideImage
          className="d-block w-100"
          fluid={data.slide2.childImageSharp.fluid}
          alt="Second slide"
        />
        <CarouselCaption>
          <h3>Your Dream Home Right in Your Palm</h3>
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <SlideImage
          className="d-block w-100"
          fluid={data.slide3.childImageSharp.fluid}
          alt="Third slide"
        />
        <CarouselCaption>
          <h3>Let's Help You Get a Paradise for Home</h3>
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <SlideImage
          className="d-block w-100"
          fluid={data.slide4.childImageSharp.fluid}
          alt="Fourth slide"
        />

        <CarouselCaption>
          <h3>Aplom Go Homes</h3>
          <p>Getting Affordable Homes for All</p>
        </CarouselCaption>
      </Carousel.Item>
    </CarouselContainer>
  )
}

export default JumbotronSection
