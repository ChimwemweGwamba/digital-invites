import React, { useState } from "react";
import styled from "styled-components";
import { getDatabase, ref, get, child } from "firebase/database";
import "../firebase";
import { useNavigate } from "react-router-dom";
import { useGuest } from "../context/guestContext";
import rings from "../assets/images/rings.png"

function Login() {
  const [phoneNumber, setPhoneNumber] = useState(260);
  const [errorMessage, setErrorMessage] = useState("");
  const { dispatch } = useGuest();

  const navigate = useNavigate();
  const dbRef = ref(getDatabase());

  const logIn = (data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].phone_number === phoneNumber) {
        return data[i];
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

    //temporal admin navigation
    if(phoneNumber === "260111"){
      navigate("/guests")
    }
    else{
      getGuestList();
    }


  };

  return (
    <Container>
      <Img src={rings} alt="rings" />
      <Form onSubmit={handleSubmit}>
        <label style={{  color: "#bc9c22"}}>
          Enter your phone number to access invite
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
  height: 95vh;
  text-align: center;
`;

const Img = styled.img`
  width: 85%;
  margin: 0;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 90%;
  margin: 0;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 0;
  border: solid 1px #bc9c22;
  text-align: center;
  color: #bc9c22;
`;

const Button = styled.button`
  width: 100%;
  margin: 0 0;
  padding: 10px 0;
  font-size: 15px;
  color: white;
  background-color: #bc9c22;
  border: solid 1px #bc9c22;
`;

const ErrorMessage = styled.p`
  color: red;
  width: 80%;
`;

export default Login;
