import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Wrapper = styled(Container)`
  margin-top: 120px;
  margin-bottom: 3em;
`

const SubHeading = styled.h4`
  color: #b67f2e;
`

const CustomLink = styled.a`
  color: #000;

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

const Item = styled.li`
  margin-bottom: 0.7rem;
`

function Contact() {
  return (
    <Wrapper>
      <div className="mb-4">
        <h2>Contact us</h2>
        <p>
          We would be happy to help and advise if you have any questions or
          inquiries.
        </p>
      </div>

      <div className="mb-5">
        <SubHeading>Office Address</SubHeading>
        <p>Suite E228 Road 2 Ikota shopping complex VGC Lagos.</p>
      </div>

      <div className="mb-5">
        <SubHeading>Email Address</SubHeading>
        <CustomLink href="mailto: info@aplomgo.com?subject=Inquiries">
          info@aplomgo.com
        </CustomLink>
      </div>

      <div className="mb-5">
        <SubHeading>Phone Numbers</SubHeading>
        <p>+2348026620106, +2349098597340, +2347015722433.</p>
      </div>

      <div className="mb-5">
        <SubHeading>Follow Us on Social Media</SubHeading>
        <List>
          <Item>
            <CustomLink
              href="https://www.facebook.com/Aplomhomes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
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
              <FontAwesomeIcon
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
              <FontAwesomeIcon
                icon={["fab", "instagram-square"]}
                size="lg"
                className="mr-2"
              />
              <span>instagram.com/aplomgo_aplomgo</span>
            </CustomLink>
          </Item>
        </List>
      </div>
    </Wrapper>
  )
}

export default Contact
