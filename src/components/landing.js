import React from "react";
import styled from "styled-components";
import invite from "../assets/images/invite.png"

function Landing() {
  return (
    <Container>
      <Invite src={invite} alt="invite" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Invite = styled.img`
  width: 100%;
`;

export default Landing;
