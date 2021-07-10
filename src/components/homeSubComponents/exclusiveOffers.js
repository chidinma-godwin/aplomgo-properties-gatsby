import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import styled from "styled-components"

const SectionHeader = styled.h2`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
  color: #b67f2e;
`

const CustomCard = styled(Card)`
  border: 3px solid #b67f2e;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 100%;
  }
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
  return (
    <>
      <SectionHeader>Exclusive Offers</SectionHeader>
      {/* <AboutCardDeck> */}
      <CustomCard className="mb-5">
        <CardHeader>Buy Five Plots Get One Free</CardHeader>
        <Card.Body>
          <span className="mb-4">
            Buy five plots of land and get a plot free. This offer is available
            for the properties listed below.
          </span>
          <CustomListGroup variant="flush">
            <ListGroup.Item>Champions Court Estate</ListGroup.Item>
            <ListGroup.Item>Champions Court Phase 2</ListGroup.Item>
            <ListGroup.Item>Abundance Grace Estate</ListGroup.Item>
            <ListGroup.Item>Amazing Grace Estate</ListGroup.Item>
            <ListGroup.Item>Aplom Gold City</ListGroup.Item>
            <ListGroup.Item>Icon's Park</ListGroup.Item>
          </CustomListGroup>
        </Card.Body>
      </CustomCard>
    </>
  )
}

export default ExclusiveOffers
