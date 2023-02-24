import React from "react";
import styled from "styled-components";


function ProgramEntry(props) {
  return (
    <Container>
      <LeftContainer>
        <Event>{props.event}</Event>

        <EventSummary>{props.eventSummary}</EventSummary>
      </LeftContainer>

      <RightContainer>
        <Time>{props.time}</Time>

        <Icon src={props.icon} alt="guests" />
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  border-right: solid 1px #bc9c22;
  width: 50%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;

const RightContainer = styled.div`
  border-left: solid 1px white;
  width: 50%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;

const Time = styled.h2`
  text-align: left;
  padding: 0 15px;
  margin: 0;
  color: #bc9c22;
`;

const Icon = styled.img`
  width: 30%;
  padding: 10px 10px;
  margin-right: auto;
  margin-left: 0;
`;

const Event = styled.h3`
  text-align: right;
  margin: 0;
  padding: 0 10px;
  color: black;
`;

const EventSummary = styled.p`
  border-bottom: dashed 1px #bc9c22;
  text-align: right;
  padding: 0 10px 0 0;
  margin: 10px 0 0 auto;
  width: 80%;
  color: #626262;
  font-style: italic;
`;

export default ProgramEntry;
