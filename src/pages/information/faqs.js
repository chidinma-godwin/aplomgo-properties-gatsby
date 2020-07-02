import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Card, Accordion } from "react-bootstrap"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import getQuestions from "../../data/questions"

const Wrapper = styled(Container)`
  margin-top: 100px;
  margin-bottom: 3em;
`

const Header = styled.h3`
  color: #b67f2e;
`

const FaqAccordion = styled(Accordion)`
  border: 2px solid #ab1010;
  font-size: 14px;

  @media (min-width: 767.98px) {
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

const CustomLink = styled.a`
  color: blue;

  &:hover {
    color: #b67f2e;
    text-decoration-line: none;
  }
`

function FAQ() {
  const data = useStaticQuery(graphql`
    query {
      allPropertiesJson(filter: { shortName: { eq: "aplom-gold" } }) {
        nodes {
          answers {
            ans
            id
          }
        }
      }
    }
  `)
  const questions = getQuestions()
  const sampleAnswers = data.allPropertiesJson.nodes[0].answers

  const faqs = sampleAnswers.map((answer, index) => {
    if (answer.id === questions[index].id) {
      //merging two objects
      return Object.assign({}, answer, questions[index])
    }
    return null
  })
  const generalFaqs = faqs.slice(7)
  return (
    <Wrapper>
      <Header>Frequently Asked Questions</Header>
      <p className="mb-5">
        Below are some frequently asked questions about Aplom Go. products and
        services
      </p>
      <FaqAccordion defaultActiveKey={8}>
        {generalFaqs.map(faq => (
          <Card key={faq.id}>
            <AccordionHeader>
              <Accordion.Toggle as={Card.Header} eventKey={faq.id}>
                <HeaderText>
                  <span>{faq.question}</span>
                  <span>
                    <FontAwesomeIcon icon={["fas", "caret-down"]} size="2x" />
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
        ))}
      </FaqAccordion>
      <div className="mt-5">
        <p>
          For more information contact us on +2348026620106, +2349098597340,
          +2347015722433.
        </p>
        <p>
          You can also send a mail to{" "}
          <CustomLink href="mailto: info@aplomgo.com?subject=Inquiries">
            info@aplomgo.com
          </CustomLink>
        </p>
      </div>
    </Wrapper>
  )
}

export default FAQ
