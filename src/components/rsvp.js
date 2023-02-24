import React, { useState } from "react";
import styled from "styled-components";
import { useGuest } from "../context/guestContext";
import background from "../assets/images/back2.png"
import "../index.css";
import { updateGuest } from "../firebase";

function Rsvp() {
  const {
    dispatch,
    state: { guest },
  } = useGuest();
  const [invitation, setInvitation] = useState(null);

  const invitationResponse = (guest) => {
    guest.invitation_response = invitation;
    dispatch(
      {
        type: "SET_GUEST",
        payload: guest,
      },
      updateGuest(guest, guest.id)
    );
  };

  const onChange = (event) => {
    setInvitation(event.target.value);
  };

  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <Heading>RSVP</Heading>

      <p>By 10th March 2023</p>

      {guest.name && <Invited>{guest.name}</Invited>}

      {typeof guest.invitation_response == "boolean" ? (
        guest.invitation_response ? (
          <p
            style={{
              margin: "25px",
              marginBottom: "0",
              color: "black",
              textAlign: "center",
            }}
          >
            Invitation <b>accepted</b>, present this card at the door when
            attending the wedding reception.
            <br />
            <br />
            <b>Guest Number: {guest.id}</b>
          </p>
        ) : (
          <p>
            Invitation was <b>declined</b>
          </p>
        )
      ) : (
        <Form onSubmit={(event) => event.preventDefault()}>
          <div onChange={onChange}>
            <Checkbox type="radio" value={true} name="invite" /> Accept
            <Checkbox type="radio" value={false} name="invite" /> Reject
          </div>

          <input
            value="Confrim"
            type="submit"
            onClick={() => {
              invitationResponse(guest);
            }}
            style={{
              margin: "30px",
              padding: "10px 30px",
              backgroundColor: "transparent",
              border: "solid 2px #ffffee",
              color: "#ffffee",
              fontWeight: 'bold',
              borderRadius: "3px",
            }}
          />
        </Form>
      )}

      <p>
        Card for <b>1 Person</b>
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffee;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
  height: 100vh;
`;

const Heading = styled.h1`
  color: #ffffee;
  font-size: 90px;
  font-weight: 200;
  margin-bottom: 50px;
`;

const Invited = styled.h1`
  color: #ffffee;
  padding: 10px 20px;
  border-bottom: solid 2px #ffffee;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Checkbox = styled.input`
  margin-left: 10px;
`;

export default Rsvp;
