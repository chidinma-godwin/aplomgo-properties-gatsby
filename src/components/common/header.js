import React, { useState, useRef, useEffect } from "react"
import {
  Navbar,
  Nav,
  Col,
  Image,
  Container,
  NavDropdown,
} from "react-bootstrap"
import { Link } from "gatsby"
import { animated } from "react-spring"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { withResizeDetector } from "react-resize-detector"
import logo from "../../images/blackLogo.jpg"
import { useCustomTransition } from "./customHooks/useCustomTransition"

const CustomNavbar = styled(Navbar)`
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  height: 80px;

  @media screen and (max-width: 991.98px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const LinkText = styled.span`
  position: relative;
  width: fit-content;
  display: flex;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #b67f2e;
  }

  @media screen and (min-width: 991.98px) {
    &:hover {
      &:after {
        content: "";
        position: absolute;
        width: calc(100% + 0.389em);
        background-color: transparent;
        transform: scaleX(1);
        transform-origin: left;
        transition: transform 0.4s ease 0.4s, height 0.4s ease 0s;
        bottom: 0;
        left: -0.389em;
        border-left: solid 2px #b67f2e;
        border-bottom: solid 2px #b67f2e;
        height: 50%;
      }
    }
  }
`

const CustomImage = styled(Image)`
  width: 4em;
  display: inline-block;
`

const CollapseWrapper = styled(Nav)`
  @media screen and (max-width: 991.98px) {
    background-color: #212529;
    padding: 15px;
    height: 100vh;

    & .nav-link {
      color: #fff !important;
    }
  }
`

const Toggler = styled(Navbar.Toggle)`
  color: #fff !important;
  border-color: transparent !important;
  &:focus {
    outline: none;
  }
`

const CustomContainer = styled(Container)`
  padding-left: 15px !important;
  padding-right: 15px !important;
  @media screen and (min-width: 991.98px) {
    width: fit-content;
  }
`

const CustomLink = styled(Nav.Link)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-left: 0;
  width: fit-content;
`

const CustomDropdown = styled.div`
  display: ${props => (props.info ? "flex" : "none")};
  position: absolute;
  flex-direction: column;
  background: #b67f2e;
  color: #fff;
  padding: 1em;
  margin-top: 1em;
  /* ${CustomLink}:hover & {
    display: ${props => (props.info ? "flex" : "none")};
  } */
`

const DropdownContainer = styled(animated.div)`
  position: absolute;
  background: #b67f2e;
  color: #fff !important;
  left: 0;
  top: 80%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5em;
  font-size: 18px;
  z-index: -2;

  &:hover {
    display: flex;
  }
`

const Column = styled(Col)`
  display: flex;
  justify-content: center;
`

const SubLink = styled(Link)`
  &&& {
    color: #fff;
  }
`

const NavbarCollapse = styled(Navbar.Collapse)`
  display: ${props => (props.collapse ? "none" : "block")};
`

function Header({ width }) {
  const [showProperties, setShowProperties] = useState(false)
  const [info, setInfo] = useState(false)
  const [navWidth, setNavWidth] = useState(null)
  const [show, setShow] = useState(true)

  const navbar = useRef({})

  const toggleRef = useRef({})

  useEffect(() => {
    setNavWidth(navbar.current.getBoundingClientRect().width)
  }, [navWidth, width])

  const toggleNavbar = () =>
    setShow(prevShow => {
      return !prevShow
    })

  const mainToggle = async () => {
    let needClick
    await setShow(prev => {
      if (prev === false) needClick = true
      return true
    })
    needClick && toggleRef.current.click()
  }

  const propertiesTransition = useCustomTransition(showProperties)

  const isLargeScreen = navWidth > 972.98
  return (
    <CustomNavbar collapseOnSelect expand="lg" fixed="top" ref={navbar}>
      <CustomContainer>
        <Navbar.Brand as={Link} to="/">
          <CustomImage alt="" src={logo} />
        </Navbar.Brand>
        <Toggler ref={toggleRef}>
          <FontAwesomeIcon
            icon={["fas", "bars"]}
            size="lg"
            color="#b67f2e"
            onClick={mainToggle}
          />
        </Toggler>
      </CustomContainer>
      <NavbarCollapse
        id="responsive-navbar-nav"
        collapse={show ? undefined : 1}
      >
        <CollapseWrapper className="ml-auto">
          <CustomLink as={Link} to="/">
            <LinkText onClick={toggleNavbar}>Home</LinkText>
          </CustomLink>

          {isLargeScreen ? (
            <CustomLink
              as="div"
              onMouseEnter={() => setShowProperties(true)}
              onMouseLeave={() => setShowProperties(false)}
            >
              <LinkText>Properties</LinkText>
              {propertiesTransition.map(
                ({ item, key, props }) =>
                  item && (
                    <DropdownContainer key={key} style={props}>
                      <Column md={4} className="p-2">
                        <SubLink
                          to="/properties/abundance-grace"
                          onClick={() => setShowProperties(false)}
                        >
                          Abundance Grace Estate
                        </SubLink>
                      </Column>
                      <Column md={4} className="p-2">
                        <SubLink
                          to="/properties/agl-vision"
                          onClick={() => setShowProperties(false)}
                        >
                          AGL Vision Estate
                        </SubLink>
                      </Column>
                      <Column md={4} className="p-2">
                        <SubLink
                          to="/properties/amazing-grace"
                          onClick={() => setShowProperties(false)}
                        >
                          Amazing Grace Estate
                        </SubLink>
                      </Column>
                      <Column md={4} className="p-2">
                        <SubLink
                          to="/properties/aplom-gold"
                          onClick={() => setShowProperties(false)}
                        >
                          Aplom Gold City
                        </SubLink>
                      </Column>
                      <Column md={4} className="p-2">
                        <SubLink
                          to="/properties/champions-court"
                          onClick={() => setShowProperties(false)}
                        >
                          Champions Court Estate
                        </SubLink>
                      </Column>
                      <Column md={4} className="p-2">
                        <SubLink
                          to="/properties/green-meadow"
                          onClick={() => setShowProperties(false)}
                        >
                          Green Meadow Estate
                        </SubLink>
                      </Column>
                      <Column md={4} className="p-2">
                        <SubLink
                          to="/properties/icons-park"
                          onClick={() => setShowProperties(false)}
                        >
                          Icon's Park Estate
                        </SubLink>
                      </Column>
                    </DropdownContainer>
                  )
              )}
            </CustomLink>
          ) : (
            <NavDropdown
              title="Properties"
              as={LinkText}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/properties/abundance-grace"
                onClick={toggleNavbar}
              >
                Abundance Grace Estate
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/properties/agl-vision"
                onClick={toggleNavbar}
              >
                AGL Vision Estate
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/properties/amazing-grace"
                onClick={toggleNavbar}
              >
                Amazing Grace Estate
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/properties/aplom-gold"
                onClick={toggleNavbar}
              >
                Aplom Gold City
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/properties/champions-court"
                onClick={toggleNavbar}
              >
                Champions Court Estate
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/properties/green-meadow"
                onClick={toggleNavbar}
              >
                Green Meadow Estate
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/properties/icons-park"
                onClick={toggleNavbar}
              >
                Icon's Park Estate
              </NavDropdown.Item>
            </NavDropdown>
          )}

          {isLargeScreen ? (
            <CustomLink
              as="div"
              onMouseEnter={() => setInfo(true)}
              onMouseLeave={() => setInfo(false)}
            >
              <LinkText>Information</LinkText>
              <CustomDropdown info={info ? 1 : undefined}>
                <SubLink
                  to="/information/about"
                  className="mb-3"
                  onClick={() => setInfo(false)}
                >
                  About Us
                </SubLink>

                <SubLink
                  to="/information/gallery"
                  className="mb-3"
                  onClick={() => setInfo(false)}
                >
                  Photo Gallery
                </SubLink>

                <SubLink
                  to="/information/faqs"
                  className="mb-3"
                  onClick={() => setInfo(false)}
                >
                  FAQ
                </SubLink>

                <SubLink
                  to="/information/promos"
                  className="mb-3"
                  onClick={() => setInfo(false)}
                >
                  Promos
                </SubLink>

                <SubLink
                  to="/information/terms"
                  className="mb-3"
                  onClick={() => setInfo(false)}
                >
                  Terms and Conditions
                </SubLink>
              </CustomDropdown>
            </CustomLink>
          ) : (
            <NavDropdown
              title="Information"
              as={LinkText}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/information/about"
                onClick={toggleNavbar}
              >
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/information/gallery"
                onClick={toggleNavbar}
              >
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/information/faqs"
                onClick={toggleNavbar}
              >
                FAQ
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/information/promos"
                onClick={toggleNavbar}
              >
                Promos
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/information/terms"
                onClick={toggleNavbar}
              >
                Terms and Conditions
              </NavDropdown.Item>
            </NavDropdown>
          )}

          <CustomLink as={Link} to="/subscription">
            <LinkText onClick={toggleNavbar}>Subscribe</LinkText>
          </CustomLink>

          <CustomLink as={Link} to="/contact">
            <LinkText onClick={toggleNavbar}>Contact Us</LinkText>
          </CustomLink>
        </CollapseWrapper>
      </NavbarCollapse>
    </CustomNavbar>
  )
}

export default withResizeDetector(Header)
