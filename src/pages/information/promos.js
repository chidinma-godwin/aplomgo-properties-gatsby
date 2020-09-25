import React from "react"
import NewsLetter from "../../components/common/newsLetter"
import { Card, Table, Container, Button } from "react-bootstrap"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query {
    allPromoJson {
      nodes {
        id
        name
        shortName
        description
        details
        normalPrice
        promoPrice
        endDate
        image
      }
    }
    iconsPark: file(relativePath: { eq: "icons-park.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aglVision: file(relativePath: { eq: "agl-vision.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emmanuel: file(relativePath: { eq: "emmanuel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    independence: file(relativePath: { eq: "nigeria.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Wrapper = styled(Container)`
  margin-top: 100px;
  margin-bottom: 3em;
`

const PromoHeader = styled.h2`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
  font-weight: bolder;
  letter-spacing: 3px;
`

const PromoSubHeader = styled.h3`
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

const Description = styled.p`
  font-size: 1.5rem;
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

const Subscribe = styled.p`
  font-size: 16px;
  font-weight: bold;
`

function Promos({ data }) {
  const promoList = data.allPromoJson.nodes

  const formatPrice = priceString => {
    const priceArray = priceString.split(" ")
    priceArray[0] = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(priceArray[0] * 1)

    const formattedPrice = priceArray.join(" ")

    return formattedPrice
  }

  return (
    <Wrapper>
      <PromoHeader>Independence Promo</PromoHeader>

      <PromoWrapper>
        <Img fluid={data.independence.childImageSharp.fluid} className="mb-5" />
        <Description>
          In the spirit of oneness, Aplomgo presents Buy two get one free and
          One Million Naira discount promo. This Promo is available for the
          following properties:
        </Description>
      </PromoWrapper>

      <section>
        <PromoSubHeader>One Million Naira Discount Promo</PromoSubHeader>
        {promoList.map(promo => (
          <PromoWrapper key={promo.id}>
            <SectionSubHeader>{promo.name}</SectionSubHeader>
            <Img
              fluid={data[promo.image].childImageSharp.fluid}
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
                    <td>Normal Price</td>
                    <td>{formatPrice(promo.normalPrice)}</td>
                  </tr>

                  <tr>
                    <td>Promo Price</td>
                    <td>{formatPrice(promo.promoPrice)}</td>
                  </tr>

                  <tr>
                    <td>End Date</td>
                    <td>{promo.endDate}</td>
                  </tr>
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
          </PromoWrapper>
        ))}
      </section>

      <section>
        <PromoSubHeader>Buy Two Get One Free Promo</PromoSubHeader>
        <PromoWrapper>
          <Description>
            This promo is available for all other properties not listed above.
          </Description>
        </PromoWrapper>
      </section>

      <Subscribe>
        You want to be notified when there is an ongoing promo? Subscribe to our
        newsletter by providing your email below.
      </Subscribe>
      <NewsLetter block={false} />
    </Wrapper>
  )
}

export default Promos
