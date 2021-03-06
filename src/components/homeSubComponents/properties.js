import React from "react"
import { CardGroup, Card, Table } from "react-bootstrap"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const SectionHeader = styled.h2`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
  color: #b67f2e;
`

const FeaturesCardDeck = styled(CardGroup)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14em, 1fr));
  grid-gap: 1rem;

  @media (min-width: 991.98px) {
    grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
  }
`

const FeaturesCard = styled(Card)`
  &&& {
    border: 3px solid #b67f2e;
  }
`

const CardTitle = styled(Card.Title)`
  font-size: 1em;
  margin-bottom: 0;
`

const CardBody = styled(Card.Body)`
  padding: 0.5rem;
`

const CardImg = styled(Card.Img)`
  height: 220px;
  object-fit: cover;
`

const PropertyTable = styled(Table)`
  font-size: 12px;
`

const CustomLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`

function Properties() {
  const data = useStaticQuery(graphql`
    query {
      allPropertiesJson {
        nodes {
          answers {
            ans
            id
          }
          id
          location
          name
          shortName
          price
          fields {
            propertyImage {
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
  `)
  const propertiesList = data.allPropertiesJson.nodes

  const formatPrice = priceString => {
    const priceArray = priceString.split(" ")
    priceArray[0] = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(priceArray[0])
    return priceArray.join(" ")
  }

  return (
    <>
      <SectionHeader>Latest properties</SectionHeader>
      <FeaturesCardDeck>
        {propertiesList.map(property => (
          <FeaturesCard key={property.id}>
            <CustomLink to={`/properties/${property.shortName}`}>
              <CardImg
                as={Img}
                variant="top"
                fluid={property.fields.propertyImage.childImageSharp.fluid}
                className="d-block w-100"
              />
            </CustomLink>
            <CardBody>
              <CardTitle>{property.name}</CardTitle>
            </CardBody>
            <PropertyTable size="sm">
              <tbody>
                <tr>
                  <td>Location</td>
                  <td>{property.location}</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>{property.answers[5].ans[0]}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>
                    {property.price.split(" ").length > 1
                      ? formatPrice(property.price)
                      : new Intl.NumberFormat("en-NG", {
                          style: "currency",
                          currency: "NGN",
                          minimumFractionDigits: 0,
                        }).format(property.price * 1)}
                  </td>
                </tr>
              </tbody>
            </PropertyTable>
          </FeaturesCard>
        ))}
      </FeaturesCardDeck>
    </>
  )
}

export default Properties
