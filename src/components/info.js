import React from "react";
import styled from "styled-components";

function Info() {
  return (
    <Container>
      <Card>
        <Heading style={{ color: 'rgba(149,149,255,1)' }}>Location</Heading>
        <CardText>
          Our Venue is located in the peri urban area of Makeni, see the google
          maps link below to assist you with directions.
        </CardText>

        <a href="https://volvec-technology-58ee2.web.app/">
          <p>View directions</p>
        </a>
      </Card>

      <Card>
        <Heading style={{ color: 'rgba(66,193,110,1)' }}>Gifts</Heading>
        <CardText>
          With what we have we are truly blessed, but your presence and prayers
          we need. To the desire of your giving heart we especially suggest
          monetary gifts of a minimum of K500.
        </CardText>
      </Card>
      
      <Card>
        <Heading style={{ color: 'rgba(220,91,183,1)' }}>Children</Heading>
        <CardText>
          Although we love your children we regretfully cannot accomodate them
          at the venue due to restricted numbers. We hope you see this as an
          oppotunity to let your hair down and enjoy the party with us.
        </CardText>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  padding: 70px 7.5%;
  background-color: black;
`;

const Card = styled.div`
  padding: 20px 0;
  margin: 50px 0;
  border-radius: 5px;
`;

const Heading = styled.h1`
  text-align: left;
  text-transform: capitalize;
  font-weight: 200;
`;

const CardText = styled.p`
  text-align: justify;
  color: white;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
`;

export default Info;
