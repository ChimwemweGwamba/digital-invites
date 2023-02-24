import React from "react";
import styled from "styled-components";
import card from "../assets/images/card.png"


function Invite() {
  return (
<Container>
    <Card src={card} alt="invite" />
  </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  margin: 0;
`;

const Card = styled.img`
  height: 100%;
`;

export default Invite