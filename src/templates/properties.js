import React from "react"
import {
  Image,
  Card,
  Accordion,
  Container,
  ListGroup,
  CardDeck,
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import Img from "gatsby-image"
import SubscriptionPage from "./subscription"
import getQuestions from "../data/questions"

const Wrapper = styled(Container)`
  margin-top: 100px;
`

const CustomImage = styled(Img)`
  height: 90vh;
  display: block;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
`

const CardHeader = styled(Card.Header)`
  background: #b67f2e;
  color: #fff;
  font-size: 18px;
  font-weight: bolder;
`

const FeaturesCardDeck = styled(CardDeck)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  grid-gap: 1rem;

  @media (max-width: 620px) {
    grid-template-columns: repeat(auto-fill, minmax(14em, 1fr));
  }

  @media (min-width: 991.98px) {
    grid-template-columns: repeat(auto-fill, minmax(24em, 1fr));
  }
`

const FeaturesCard = styled(Card)`
  border: 3px solid #ab1010;
`

const FaqAccordion = styled(Accordion)`
  border: 3px solid #ab1010;
  font-size: 12px;

  @media (min-width: 991.98px) {
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

const AccordionHeader = styled.div`
  background: #b67f2e;
  color: #fff;
`

const HeaderText = styled.div`
  display: flex;
  justify-content: space-between;
`

const LayoutImage = styled(Image)`
  display: block;
  height: 600px;
  margin-right: auto;
  margin-left: auto;
`

function Property({ pageContext: { property }, location }) {
  //   const { property } = props.match.params

  const successMsg = location && location.state && location.state.success
  const formValues = location && location.state && location.state.formValues

  const currentProperty = property || null

  const {
    name,
    fields,
    layout,
    description,
    spots,
    infras,
    legals,
  } = currentProperty

  const questions = getQuestions(name)

  const faqs = currentProperty.answers.map((answer, index) => {
    if (answer.id === questions[index].id) {
      //merging two objects
      return Object.assign({}, answer, questions[index])
    }
    return null
  })

  return (
    <Wrapper>
      <CustomImage
        fluid={fields.propertyImage.childImageSharp.fluid}
        className="d-block w-100 mb-5"
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3 className="mt-5 mb-4">Features</h3>
      <FeaturesCardDeck>
        <FeaturesCard>
          <CardHeader>Infrastructure</CardHeader>
          <Card.Body>
            <ListGroup variant="flush">
              {infras.map((infrastructure, index) => (
                <ListGroup.Item key={index}>{infrastructure}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </FeaturesCard>

        {spots && (
          <FeaturesCard>
            <CardHeader>Lifestyle Spots</CardHeader>
            <Card.Body>
              <ListGroup variant="flush">
                {spots.map((spot, index) => (
                  <ListGroup.Item key={index}>{spot}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </FeaturesCard>
        )}

        {legals && (
          <FeaturesCard>
            <CardHeader>Legal Documents</CardHeader>
            <Card.Body>
              <ListGroup variant="flush">
                {legals.map((legal, index) => (
                  <ListGroup.Item key={index}>{legal}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </FeaturesCard>
        )}
      </FeaturesCardDeck>
      {layout && (
        <div className="mt-5 mb-5">
          <h3 className="text-center">Layout</h3>
          <LayoutImage src={require(`../images/${layout}`)} className="mb-5" />
        </div>
      )}
      <section className="mt-5 mb-5">
        <p>
          Interested in this property? Please check out frequently asked
          questions before filling the subscription form
        </p>

        <FaqAccordion defaultActiveKey={1}>
          {faqs.map(faq => {
            return (
              faq.ans && (
                <Card key={faq.id}>
                  <AccordionHeader>
                    <Accordion.Toggle as={Card.Header} eventKey={faq.id}>
                      <HeaderText>
                        <span>{faq.question}</span>
                        <span>
                          <FontAwesomeIcon
                            icon={["fas", "caret-down"]}
                            size="2x"
                          />
                        </span>
                      </HeaderText>
                    </Accordion.Toggle>
                  </AccordionHeader>
                  <Accordion.Collapse eventKey={faq.id}>
                    <Card.Body>
                      {faq.ans.map((item, i) => (
                        <p key={i}>{item}</p>
                      ))}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            )
          })}
        </FaqAccordion>
      </section>
      <section>
        <SubscriptionPage
          currentProperty={currentProperty}
          successMsg={successMsg}
          formValues={formValues}
        />
      </section>
    </Wrapper>
  )
}

export default Property
