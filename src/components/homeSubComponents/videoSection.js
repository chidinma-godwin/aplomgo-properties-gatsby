import React, { useState, useEffect } from "react"
import { Row, Col, Spinner } from "react-bootstrap"
import YouTube from "react-youtube"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CenteredColumn = styled(Col)``

const UnLoadedVideo = styled.div`
  position: absolute;
  background-color: grey;
  color: #fff;
  height: 100%;
  width: 90%;
  display: ${props => (props.show ? "flex" : "none")};
  z-index: -5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const VideoWrapper = styled(Col)`
  position: relative;

  @media (max-width: 681px) {
    min-height: 300px;
  }
`

const VideoPlayer = styled(YouTube)`
  position: absolute;
`

const SectionHeading = styled.h2`
  color: #b67f2e;
`

function VideoSection() {
  const data = useStaticQuery(graphql`
    query {
      interior: file(relativePath: { eq: "amazing-grace.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const videoIdArr = [
    "IQS6Ph2sha0",
    "_p7roePRsOQ",
    "zuwBdTC2mgo",
    "4X0BPZDWwVY",
  ]
  const [videoId, setVideoId] = useState(videoIdArr)
  const [currentVideoId, setCurrentVideoId] = useState("")
  const [index, setIndex] = useState(0)
  const [showLoading, setShowLoading] = useState(true)
  const [autoplay, setAutoplay] = useState(0)

  useEffect(() => {
    setCurrentVideoId(videoId[index])
    setAutoplay(0)
  }, [index, videoId])

  const opts = {
    width: "90%",
    height: "100%",
    playerVars: {
      origin: "aplomgo.com",
      modestbranding: 1,
      rel: 0,
      autoplay,
    },
  }

  const videoReady = event => {
    // access to player in all event handlers via event.target
    setShowLoading(false)
    event.target.pauseVideo()
  }

  const playNext = () => {
    setIndex(prevIndex => {
      if (prevIndex < videoId.length - 1) {
        return prevIndex + 1
      } else {
        return 0
      }
    })
    setCurrentVideoId(videoId[index])
    setAutoplay(1)
  }

  return (
    <Row className="mt-5 mb-5">
      <VideoWrapper sm={12} md={6}>
        <VideoPlayer
          videoId={currentVideoId || "IQS6Ph2sha0"}
          opts={opts}
          onReady={videoReady}
          onEnd={playNext}
        />
        <UnLoadedVideo show={showLoading}>
          <p>Loading video</p>
          <Spinner animation="border" role="status" size="md">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </UnLoadedVideo>
      </VideoWrapper>
      <CenteredColumn>
        <SectionHeading>Affordable Housing for All</SectionHeading>
        <p>
          At Aplom, we are devoted to making homes affordable for everyone
          irrespective of their income
        </p>
        <Img fluid={data.interior.childImageSharp.fluid} />
      </CenteredColumn>
    </Row>
  )
}

export default VideoSection
