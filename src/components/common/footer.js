import React, { useState } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import logo from "../../images/blackLogo.jpg"
import styled from "styled-components"
import NewsLetter from "./newsLetter"

const CustomFooter = styled.footer`
  background: #000;
  color: #fff;
  padding-top: 3em;
  font-size: 14px;
`

const Icon = styled(FontAwesomeIcon)`
  color: #b67f2e;
`

const CustomLink = styled.a`
  color: #fff;

  &:hover {
    color: #b67f2e;
    text-decoration-line: none;
  }
`

const QuickLink = styled(Link)`
  color: #fff;

  &:hover {
    color: #b67f2e;
    text-decoration-line: none;
  }
`

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
`

const LinkList = styled(List)`
  display: flex;
  flex-direction: column;
  color: #fff;

  &:hover {
    color: #b67f2e;
    text-decoration-line: none;
  }
`

const Item = styled.li`
  margin-bottom: 0.7rem;
`

const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.6em;
  background-color: #b67f2e;
  color: #fff;
  font-size: 14px;
`

const ChatWrapper = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
`

const Chat = styled.div`
  border-radius: 50%;
  background-color: #28a745;
  width: fit-content;
  padding: 0.8em;
  margin-left: auto;
`
const ChatBox = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  padding: 2em;
  background: #28a745;
  color: #fff;
`

function Footer() {
  const [showChat, setShowChat] = useState(false)
  const handleChatClick = () => {
    setShowChat(prevShow => !prevShow)
  }
  return (
    <>
      <CustomFooter>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={3} className="mb-3">
              <div>
                <Image src={logo} alt="logo" width="100" className="mb-4" />
                <p>
                  Aplom Go is one of Nigeria’s indigenous Real Estate
                  development Company with a vision to carry out real estate
                  professional services and to deliver competitive real estate
                  solutions to our highly esteemed clients.
                </p>
              </div>
            </Col>

            <Col sm={12} md={6} lg={3} className="mb-3">
              <h4 className="mb-3">Contact us</h4>
              <Row className="mb-3">
                <Col xs={2} sm={1} lg={2}>
                  <Icon icon={["fas", "map-marker-alt"]} size="lg" />
                </Col>
                <Col xs={10} sm={11} lg={10}>
                  Suite E228 Road 2 Ikota shopping complex VGC Lagos.
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={2} sm={1} lg={2}>
                  <Icon icon={["fas", "phone-alt"]} size="lg" />
                </Col>
                <Col xs={2} sm={1} lg={2}>
                  +2349098597340, +2347015722433
                </Col>
              </Row>

              <CustomLink href="https://api.whatsapp.com/send?phone=2348026620106">
                <Row className="mb-3">
                  <Col xs={2} sm={1} lg={2}>
                    <Icon icon={["fab", "whatsapp-square"]} size="lg" />
                  </Col>
                  <Col xs={2} sm={1} lg={2}>
                    +2348026620106
                  </Col>
                </Row>
              </CustomLink>
              <CustomLink href="mailto: info@aplomgo.com?subject=Inquiries">
                <Row className="mb-3">
                  <Col xs={2} sm={1} lg={2}>
                    <Icon icon={["fas", "envelope"]} size="lg" />
                  </Col>
                  <Col xs={2} sm={1} lg={2}>
                    info@aplomgo.com
                  </Col>
                </Row>
              </CustomLink>
            </Col>

            <Col sm={12} md={6} lg={3} className="mb-3">
              <h4 className="mb-3">Quick Links</h4>
              <LinkList>
                <QuickLink as={Link} className="mb-3" to="/information/about">
                  About us
                </QuickLink>
                <QuickLink as={Link} className="mb-3" to="/information/gallery">
                  Gallery
                </QuickLink>
                <QuickLink as={Link} className="mb-3" to="/information/faqs">
                  FAQ
                </QuickLink>
                <QuickLink as={Link} className="mb-3" to="/subscription">
                  Subscription
                </QuickLink>
              </LinkList>
            </Col>

            <Col sm={12} md={6} lg={3} className="mb-3">
              <h4 className="mb-3">Follow us on social media</h4>
              <List>
                <Item>
                  <CustomLink
                    href="https://www.facebook.com/Aplomhomes/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      icon={["fab", "facebook-square"]}
                      size="lg"
                      className="mr-2"
                    />{" "}
                    <span>facebook.com/Aplomhomes</span>
                  </CustomLink>
                </Item>
                <Item>
                  <CustomLink
                    href="https://twitter.com/aplomgo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      icon={["fab", "twitter-square"]}
                      size="lg"
                      className="mr-2"
                    />
                    <span>twitter.com/aplomgo</span>
                  </CustomLink>
                </Item>
                <Item>
                  <CustomLink
                    href="https://instagram.com/aplomgo_aplomgo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      icon={["fab", "instagram-square"]}
                      size="lg"
                      className="mr-2"
                    />
                    <span>instagram.com/aplomgo_aplomgo</span>
                  </CustomLink>
                </Item>
              </List>
              <div>
                <h6>Subscribe to our newsletter</h6>
                <NewsLetter />
              </div>
            </Col>
          </Row>
        </Container>
      </CustomFooter>
      <div style={{ position: "relative" }}>
        <BottomNav style={{ position: "absolute", width: "100%" }}>
          © 2020 Aplom Go Limited. All Rights Reserved.
        </BottomNav>
        <ChatWrapper>
          <ChatBox show={showChat ? 1 : undefined}>
            This Feature will be added soon!
          </ChatBox>
          <Chat>
            <FontAwesomeIcon
              icon={["fas", "comment"]}
              color="#fff"
              size="2x"
              onClick={handleChatClick}
            />
          </Chat>
        </ChatWrapper>
      </div>
    </>
  )
}

export default Footer
