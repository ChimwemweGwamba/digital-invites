import React, { useState } from "react";
import styled from "styled-components";
import { getDatabase, ref, get, child } from "firebase/database";
import {} from "../firebase";
import { useNavigate } from "react-router-dom";
import { useGuest } from "../context/guestContext";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState(260);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    dispatch,
  } = useGuest();

  const navigate = useNavigate();
  const dbRef = ref(getDatabase());

  const logIn = (data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].phoneNumber === Number(phoneNumber)) {
        return data[i]
      }
    }
  };

  const getGuestList = () => {
    get(child(dbRef, `guests/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const guest = logIn(snapshot.val());
          guest
            ? dispatch(
                {
                  type: "SET_GUEST",
                  payload: guest,
                },
                navigate("/home")
              )
            : setErrorMessage("Number entered is not on the guest list");
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getGuestList();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label>
          Enter your phone number to login
          <Input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <Button type="submit">Log In</Button>
      </Form>

      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const Form = styled.form`
  width: 90%;
  margin: 0;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  margin: 10px 0;
  padding: 0;
  border: solid 1px black;
  text-align: center;
`;

const Button = styled.button`
  color: red;
  width: 100%;
  margin: 10px 0;
  padding: 10px 0;
  font-size: 15px;
  color: white;
  background-color: blue;
  border: solid 1px blue;
`;

const ErrorMessage = styled.p`
  color: red;
  width: 80%;
`;

export default Login;
