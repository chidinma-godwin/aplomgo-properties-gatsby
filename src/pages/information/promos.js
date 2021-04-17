import React from "react"
import NewsLetter from "../../components/common/newsLetter"
import { Container } from "react-bootstrap"
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
    aplomGoldCity: file(relativePath: { eq: "aplom-gold-city.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    champion: file(relativePath: { eq: "champion.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    champion2: file(relativePath: { eq: "champion2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    amazingGrace: file(relativePath: { eq: "amazing-grace.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    abundanceGrace: file(relativePath: { eq: "abundance-grace.jpg" }) {
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

const PromoSubHeader = styled.h3`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
`

const SectionSubHeader = styled.h3`
  color: #b67f2e;
  margin-bottom: 1em;
`

const PromoWrapper = styled.div`
  margin-bottom: 7em;
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

  return (
    <Wrapper>
      <section>
        <PromoSubHeader>Buy Five Get One Free Promo</PromoSubHeader>
        {promoList.map(promo => (
          <PromoWrapper key={promo.id}>
            <SectionSubHeader>{promo.name}</SectionSubHeader>
            <CustomLink to={`/properties/${promo.shortName}`}>
              <Img
                fluid={data[promo.image].childImageSharp.fluid}
                className="mb-5"
              />
            </CustomLink>
          </PromoWrapper>
        ))}
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
