import React from "react";
import styled from "styled-components";
import ProgramEntry1 from "./programEntry1";
import ProgramEntry2 from "./programEntry2"
import icon from "../assets/images/guests.png";
import rings from "../assets/images/wedding-rings.png"
import photos from '../assets/images/images.png'
import married from "../assets/images/dove-.png"
import dinner from "../assets/images/serving-dish.png"
import thankYou from "../assets/images/chat-bubbles.png"


function Program() {
  return (
    <Container style={{ backgroundColor: `black` }}>
      <Header>
        <Title>Program</Title>
        <Heading>
          This Is How Things Will Flow
        </Heading>
      </Header>

      <Bubble/>
      <ProgramEntry1 time="09:30 Hrs" event="Arrival of Guests" eventSummary="Guests arrive at Church" icon={icon} />
      <ProgramEntry2 time="10:00 Hrs" event="Marriage Blessing" eventSummary="Marriage blessing" icon={rings} />
      <ProgramEntry1 time="12:00 Hrs" event="Photos" eventSummary="We take photos" icon={photos} />
      <ProgramEntry2 time="15:00 Hrs" event="Reception" eventSummary="We celebrate the marriage" icon={married} />
      <ProgramEntry1 time="16:00 Hrs" event="Dinner" eventSummary="We eat" icon={dinner} />
      <ProgramEntry2 time="18:30 Hrs" event="Close" eventSummary="End of event" icon={thankYou} />
      <Bubble/>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 30px 0;
`;

const Header = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: white;
`;

const Heading = styled.p`
  width: 80%;
  text-align: center;
  margin: 10px auto 30px auto;
  color: white;
`;

const Bubble = styled.h3`
height:12px;
width:12px;
border-radius: 10px;
border: solid 2px white;
margin: 0 auto;
`;

export default Program;
