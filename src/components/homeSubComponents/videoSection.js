import React, { useState, useEffect } from "react"
import { Spinner } from "react-bootstrap"
import YouTube from "react-youtube"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import LazyLoad from "react-lazyload"

const UnLoadedVideo = styled.div`
  position: absolute;
  background-color: grey;
  color: #fff;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const VideoWrapper = styled.div`
  position: relative;
  height: 500px;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 681px) {
    min-height: 300px;
  }
  @media (max-width: 700px) {
    width: 100%;
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
      interior: file(relativePath: { eq: "sitting-room.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const videoId = [
    "46vPRO6bt6g",
    "IQS6Ph2sha0",
    "_p7roePRsOQ",
    "zuwBdTC2mgo",
    "4X0BPZDWwVY",
  ]
  const [currentVideoId, setCurrentVideoId] = useState("")
  const [index, setIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(0)

  useEffect(() => {
    setCurrentVideoId(videoId[index])
    setAutoplay(0)
  }, [index, videoId])

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      origin: "https://aplomgo.com",
      modestbranding: 1,
      rel: 0,
      autoplay,
    },
  }

  const videoReady = event => {
    // access to player in all event handlers via event.target
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
    <VideoWrapper className="mt-5 mb-5">
      <LazyLoad
        height={"100%"}
        placeholder={
          <UnLoadedVideo>
            <p>Loading video</p>
            <Spinner animation="border" role="status" size="md">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </UnLoadedVideo>
        }
        once={true}
      >
        <VideoPlayer
          videoId={currentVideoId || "46vPRO6bt6g"}
          opts={opts}
          onReady={videoReady}
          onEnd={playNext}
        />
      </LazyLoad>
    </VideoWrapper>
  )
}

export default VideoSection
