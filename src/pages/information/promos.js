import React from "react"
import NewsLetter from "../../components/common/newsLetter"
import { Card, Table, Container, Button } from "react-bootstrap"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import YouTube from "react-youtube"

export const query = graphql`
  query {
    allPromoJson {
      nodes {
        id
        name
        shortName
        description
        details
        endDate
        conditions
        video
        fields {
          promoImage {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled(Container)`
  margin-top: 100px;
  margin-bottom: 3em;
`

const SectionHeader = styled.h2`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
`

const SectionSubHeader = styled.h3`
  color: #b67f2e;
  margin-bottom: 1em;
`

const FeaturesCard = styled(Card)`
  &&& {
    border: 2px solid #b67f2e;
  }
`

const PromoWrapper = styled.div`
  margin-bottom: 5em;
`
const PropertyTable = styled(Table)`
  font-size: 16px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const CustomButton = styled(Button)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const CustomLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`

function Promos({ data }) {
  const promoList = data.allPromoJson.nodes

  const opts = {
    width: "100%",
    height: "350px",
    playerVars: {
      origin: "https://aplomgo.com",
      modestbranding: 1,
      rel: 0,
      controls: 1,
    },
  }

  return (
    <Wrapper>
      <SectionHeader>Current Offers</SectionHeader>
      {promoList.map(promo => (
        <PromoWrapper key={promo.id}>
          <SectionSubHeader>{promo.name}</SectionSubHeader>
          <Img
            fluid={promo.fields.promoImage.childImageSharp.fluid}
            className="mb-5"
          />
          <FeaturesCard className="mb-5">
            <PropertyTable>
              <tbody>
                <tr>
                  <td>Description</td>
                  <td>{promo.description}</td>
                </tr>
                <tr>
                  <td>Offer</td>
                  <td>
                    <List>
                      {promo.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </List>
                  </td>
                </tr>
                <tr>
                  <td>End Date</td>
                  <td>{promo.endDate}</td>
                </tr>
                {promo.conditions && (
                  <tr>
                    <td>Condition(s)</td>
                    <td>
                      <List>
                        {promo.conditions.map((condition, index) => (
                          <li key={index}>{condition}</li>
                        ))}
                      </List>
                    </td>
                  </tr>
                )}
              </tbody>
            </PropertyTable>
            <Card.Body>
              <CustomButton>
                <CustomLink to={`/properties/${promo.shortName}`}>
                  View Property
                </CustomLink>
              </CustomButton>
            </Card.Body>
          </FeaturesCard>

          {promo.video && <YouTube videoId={promo.video} opts={opts} />}
        </PromoWrapper>
      ))}

      <p>
        You want to be notified when there is an ongoing promo? Subscribe to our
        newsletter by providing your email below.
      </p>
      <NewsLetter block={false} />
    </Wrapper>
  )
}

export default Promos
