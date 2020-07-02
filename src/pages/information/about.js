import React from 'react';
import { Container, Card, ListGroup, Table, CardGroup } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  margin-top: 90px;
  margin-bottom: 3em;
`;
const CardHeader = styled(Card.Header)`
  background: #b67f2e;
  color: #fff;
  padding: 0.6em;
  text-align: center;
  &:nth-child(1) {
    border-radius: 0;
  }
`;

const AboutCardDeck = styled(CardGroup)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  grid-gap: 0.3rem;

  @media (max-width: 620px) {
    grid-template-columns: repeat(auto-fill, minmax(14em, 1fr));
  }

  @media (min-width: 991.98px) {
    grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  }
`;

const CustomCard = styled(Card)`
  &&& {
    border: 3px solid #b67f2e;
  }
  @media (min-width: 991.98px) {
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const TableWrapper = styled.div`
  @media (min-width: 991.98px) {
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Account = styled(Table)`
  border: 3px solid #b67f2e;
`;

function About() {
  return (
    <Wrapper>
      <h3>APLOM GO. PROPERTY DEVELOPMENT &amp; REAL ESTATE INVESTMENT</h3>
      <p>
        We are persistent in keeping our promise by ensuring we make homes affordable to every
        individual
      </p>

      <AboutCardDeck>
        <CustomCard className='mb-5'>
          <CardHeader>Our Mission</CardHeader>
          <Card.Body> Making home ownership dreams a reality for all</Card.Body>
        </CustomCard>

        <CustomCard className='mb-5'>
          <CardHeader>Our Vision</CardHeader>
          <Card.Body>
            We discover where affordable and fast developing lands are located and make this known
            to people.
          </Card.Body>
        </CustomCard>
      </AboutCardDeck>

      <CustomCard className='mb-5'>
        <CardHeader>Services We Offer</CardHeader>
        <Card.Body>
          <ListGroup variant='flush'>
            <ListGroup.Item>Property Development and Real Estate Investment</ListGroup.Item>
            <ListGroup.Item>Land Documentation</ListGroup.Item>
            <ListGroup.Item>Bush Clearing</ListGroup.Item>
            <ListGroup.Item>Soil Testing</ListGroup.Item>
            <ListGroup.Item>Piling Equipment</ListGroup.Item>
            <ListGroup.Item>Industrial Cleaning </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </CustomCard>

      <TableWrapper className='mt-5' id='account'>
        <h4 className='text-center'>Our Account Details</h4>
        <Account striped hover>
          <thead>
            <tr>
              <th>Bank Name</th>
              <th>Account No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GTB USD</td>
              <td>0243430061</td>
            </tr>
            <tr>
              <td>GTB NGN</td>
              <td>0243430054</td>
            </tr>
            <tr>
              <td>Zenith Bank</td>
              <td>1015205231</td>
            </tr>
            <tr>
              <td>FCMB</td>
              <td>4660796016</td>
            </tr>
            <tr>
              <td>Access Bank</td>
              <td>1222107687</td>
            </tr>
            <tr>
              <td>EcoBank</td>
              <td>5140010541</td>
            </tr>
          </tbody>
        </Account>
      </TableWrapper>
    </Wrapper>
  );
}

export default About;
