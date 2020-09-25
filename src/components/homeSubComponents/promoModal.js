import React, { useState, useEffect } from "react"
import ReactModal from "react-modal"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button } from "react-bootstrap"
import styled from "styled-components"

ReactModal.setAppElement(`#___gatsby`)

const CustomLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`

const Popup = styled(ReactModal)`
  position: relative;
  top: 40px;
  left: 0px;
  right: 0px;
  bottom: 40px;
  border: 0px;
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 10px;
  outline: none;
  padding: 1.5em;
  display: block;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 60%;
  min-height: 60vh;
  height: 75%;

  @media (max-width: 500px) {
    height: 80%;
  }

  @media (max-width: 770px) {
    max-width: 90%;
  }
`

const Wrapper = styled.div`
  height: 100%;
`

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.58)",
    zIndex: 5,
  },
}

const ModalHeader = styled.h2`
  text-align: center;
  letter-spacing: 3px;
  height: 10%;
  font-weight: 900;

  @media (max-width: 520px) {
    font-size: 1.5rem;
  }
`

const PromoImage = styled(Img)`
  height: 50%;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 400px) {
    height: 45%;
  }

  /* @media (max-width: 499.98px) {
    height: fit-content;
  } */
  @media (min-width: 500px) {
    img {
      object-fit: contain !important;
    }
  }
`

const Detail = styled.div`
  height: 20%;
  font-weight: 700;
  text-align: center;

  h4 {
    font-size: 16px;
    font-weight: 800;
  }

  p {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    font-weight: 500;
    height: 25%;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
`

function PromoModal() {
  const data = useStaticQuery(graphql`
    query {
      independence: file(relativePath: { eq: "nigeria.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      let visited = sessionStorage.getItem("alreadyVisited")
      if (visited) {
        setModalOpen(false)
      } else {
        sessionStorage.setItem("alreadyVisited", "true")
        setModalOpen(true)
      }
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const closeModal = () => setModalOpen(false)

  return (
    <Popup
      isOpen={modalOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      style={modalStyles}
      contentLabel="modal"
    >
      <Wrapper>
        <ModalHeader>Independence Promo!!!</ModalHeader>
        <PromoImage
          fluid={data.independence.childImageSharp.fluid}
          className="mb-3"
        />
        <Detail>
          <h4>Aplomgo presents two mega promos</h4>
          <p>One Million Naira discount on all properties in Sangotedo</p>
          <p>Buy two plots of lands and get one free</p>
        </Detail>
        <ButtonsContainer>
          <Button className="mr-3">
            <CustomLink to="/information/promos">View More</CustomLink>
          </Button>
          <Button onClick={closeModal}>Close</Button>
        </ButtonsContainer>
      </Wrapper>
    </Popup>
  )
}

export default PromoModal
