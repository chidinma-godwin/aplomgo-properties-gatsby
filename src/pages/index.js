import React from "react"
import { Container } from "react-bootstrap"
import JumbotronSection from "../components/homeSubComponents/jumbotronSection"
import VideoSection from "../components/homeSubComponents/videoSection"
import ExclusiveOffers from "../components/homeSubComponents/exclusiveOffers"
import Properties from "../components/homeSubComponents/properties"

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
