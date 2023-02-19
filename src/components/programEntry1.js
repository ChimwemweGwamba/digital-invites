import React from "react";
import styled from "styled-components";
import icon from "../assets/images/guests.png";

function ProgramEntry() {
  return (
    <Container>
      <LeftContainer>
        <Time>08:45 Hrs</Time>

        <Icon src={icon} alt="guests" />
      </LeftContainer>

      <RightContainer>
        <Event>Arrival Of Guests</Event>

        <EventSummary>Guests arrive at Church</EventSummary>
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  border-right: solid 1px blue;
  width: 50%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;

const RightContainer = styled.div`
  border-left: solid 1px blue;
  width: 50%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;

const Time = styled.h2`
  text-align: right;
  padding: 0 15px;
  margin: 0;
`;

const Icon = styled.img`
  width: 30%;
  padding: 10px 10px;
  margin-left: auto; 
  margin-right: 0;
`;

const Event = styled.h3`
  text-align: left;
  margin: 0;
  padding: 0 10px;
`;

const EventSummary = styled.p`
  border-bottom: dashed 1px blue;
  text-align: left;
  padding: 0 0 0 10px;
  margin: 10 auto 0 0;
  width: 80%;
`;

export default ProgramEntry;
