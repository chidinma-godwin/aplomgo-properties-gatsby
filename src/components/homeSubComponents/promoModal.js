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
  border-radius: 4px;
  outline: none;
  padding: 1.5em;
  display: block;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
  min-height: 60vh;

  @media (max-width: 500px) {
    max-width: 90%;
  }
`

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.58)",
    zIndex: 5,
  },
}

const PromoImage = styled(Img)`
  height: 65vh;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 499.98px) {
    height: fit-content;
  }
  @media (min-width: 500px) {
    img {
      object-fit: contain !important;
    }
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function PromoModal() {
  const data = useStaticQuery(graphql`
    query {
      iconsPark: file(relativePath: { eq: "icons-park-promo.jpg" }) {
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
      <div>
        <PromoImage
          fluid={data.iconsPark.childImageSharp.fluid}
          className="mb-3"
        />
        <ButtonsContainer>
          <Button className="mr-3">
            <CustomLink to="/information/promos">View More</CustomLink>
          </Button>
          <Button onClick={closeModal}>Close</Button>
        </ButtonsContainer>
      </div>
    </Popup>
  )
}

export default PromoModal
