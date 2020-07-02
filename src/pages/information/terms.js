import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  margin-top: 120px;
  margin-bottom: 3em;
`;

const Heading = styled.h2`
  color: #b67f2e;
`;

function Terms() {
  return (
    <Wrapper>
      <Heading>TERMS AND CONDITIONS</Heading>
      <p> Our services are provided in accordance with terms and conditions</p>
      <div>
        <p>
          A prospective buyer of any of our estate is expected to obtain an application form for
          free during the promo only from our marketing officers or any of our branches.
        </p>
        <p>
          Upon outright full payment purchase price is attached, aplom Go. Homes will Deliver the
          house within a maximum of 6 months.
        </p>
        <ul>
          <li>
            We strongly advice that cash payment should be paid to Aplom Go. Homes Bank account
            only, otherwise cheques should be issued in favor of Aplom Go.Homes. We would not accept
            any responsibility for any liability that may arise as a result of a deviation from the
            above instruction
          </li>
          <li>
            We have a strictly non refundable policy and firmly advice that all installment payment
            should be remitted to our company account right on schedule to avoid a breach of
            contract and loss of allocation.
          </li>
          <li>
            A prospective buyer of any of our estate is expected to obtain an application form for
            free during the promo only from our marketing officers or in our office
          </li>
          <li>
            For maintaining a lasting beautiful after and organized environment in the estate, no
            alteration will be allowed on the structure on ground
          </li>
          <li>
            All occupants are expected to comply with the rules and regulations of the estate as
            contained in the estate deed of restriction
          </li>
          <li></li>
        </ul>
      </div>
      <div>
        <Heading>Disclamer</Heading>
        <p>
          The information contained in this website is for the general information purpose only.The
          information is provided by Aplom Go. Homes land while we endeavor to keep the information
          up to date and correct,we make no representations or warranties of any kind ,express or
          implied about the completeness, accuracy, reliability, suitability or availability with
          respect to the website or the information, product, services, or related graphics
          contained on the website for any purpose. any reliance you place on such information is
          therefore at your own risk.
        </p>
      </div>
    </Wrapper>
  );
}

export default Terms;
