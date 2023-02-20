import React from "react";
import styled from "styled-components";
import ProgramEntry1 from "./programEntry1";
import ProgramEntry2 from "./programEntry2"
import icon from "../assets/images/guests.png";

function Program() {
  return (
    <Container>
      <Header>
        <Title>Program</Title>
        <Heading>
          This Is How The Program Will Flow
        </Heading>
      </Header>

      <ProgramEntry1 time="08:02 Hrs" event="Arrival of Guests" eventSummary="Guests arrive at Church" icon={icon} />
      <ProgramEntry2 time="08:02 Hrs" event="Arrival of Guests" eventSummary="Guests arrive at Church" icon={icon} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  padding: 30px 0;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
`;

const Heading = styled.h3`
  width: 80%;
  text-align: center;
  margin: 0 auto;
`;

export default Program;
