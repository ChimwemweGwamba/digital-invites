import React from "react";
import styled from "styled-components";

function Info() {
  return (
    <Container>
      {/* <Title>Event Details</Title> */}

      <Card>
        <Heading
          style={{
            color: "#bc9c22",
          }}
        >
          Location
        </Heading>
        <CardText>
          Our venue is located in the peri urban area of Makeni, see the google
          maps link below to assist you with directions.
        </CardText>

        <a
          href="https://maps.app.goo.gl/HERaowsDz6WH1B9X7/"
          style={{ textDecoration: "none" }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#9f7b38",
              borderBottom: "solid 1px #9f7b38",
              width: "50%",
              margin: "auto",
            }}
          >
            view directions
          </p>
        </a>
      </Card>

      <Card>
        <Heading
          style={{
            color: "#bc9c22",
          }}
        >
          Gifts
        </Heading>
        <CardText>
          With what we have we are truly blessed, but your presence and prayers
          we need. To the desire of your giving heart we especially suggest
          monetary gifts of a minimum of K500.
        </CardText>
      </Card>

      <Card>
        <Heading
          style={{
            color: "#bc9c22",
          }}
        >
          Children
        </Heading>
        <CardText>
          While we hold a great fondness for your children, we regretfully
          cannot accomodate them at the venue due to restricted numbers. We hope
          you see this as an oppotunity to let your hair down and enjoy the
          party with us.
        </CardText>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  padding: 100px 5%;
  background-color: #ffffee;
`;

const Card = styled.div`
  padding: 20px 5%;
  margin: 20px 0;
  border: solid 1px #9f7b38;
  border-radius: 5px;
`;

const Heading = styled.h1`
  text-align: center;
  text-transform: capitalize;
  font-weight: 300;
  margin-bottom: 20px;
`;

const CardText = styled.p`
  text-align: center;
  color: #9f7b38;
  font-size: 18px;
  line-height: 30px;
`;

export default Info;
