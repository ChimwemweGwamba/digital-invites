import React from "react";
import styled from "styled-components";
import background from "../assets/images/1.png";
import '../index.css'

function Rsvp() {
  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <Heading>RSVP</Heading>

      <p>BY 10th NOVEMBER 2023</p>

      <Invited>MR JOHN TEMBO</Invited>

      <Form>
        <Label>
          Joyfully accepts
          <Checkbox type="checkbox" name="name" />
        </Label>

        <Label>
          Regretfully declines
          <Checkbox type="checkbox" name="name" />
        </Label>

        <input type="submit" value="Confrim" style={{ margin: '30px', padding: '7.5px 30px'}}/>
      </Form>

      <p>Card for <b>1 Person</b></p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Heading = styled.h1`
  color: black;
  font-family: 'Allison';
  font-weight: 900;
`;

const Invited = styled.h1`
  color: black;
  padding: 10px 20px;
  border-bottom: solid 2px black;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin: 50px;
`;

const Label = styled.label`
margin: 5px;
`;

const Checkbox = styled.input`
margin-left: 10px
`;

export default Rsvp;
