import React from "react"
import { Container } from "react-bootstrap"
import JumbotronSection from "../components/homeSubComponents/JumbotronSection"
import VideoSection from "../components/homeSubComponents/VideoSection"
import ExclusiveOffers from "../components/homeSubComponents/ExclusiveOffers"
import Properties from "../components/homeSubComponents/Properties"

function Home() {
  return (
    <>
      <JumbotronSection />
      <Container fluid className="pl-5 pr-5">
        <Properties />
        <ExclusiveOffers />
        <VideoSection />
      </Container>
    </>
  )
}

export default Home
