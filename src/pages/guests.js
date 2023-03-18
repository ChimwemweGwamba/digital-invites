import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getDatabase, ref, get, child } from "firebase/database";
import "../firebase";

function Guests() {
  const [guestList, setGuestList] = useState("");
  const dbRef = ref(getDatabase());

  const getGuestList = async () => {
    get(child(dbRef, `guests/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setGuestList(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getGuestList();
  }, []);

  return (
    <Container>
      <Title>Guest List</Title>

      <Table>
        <tr>
          <TableHead>Guest Name</TableHead>
          <TableHead>Response</TableHead>
        </tr>

        {guestList &&
          guestList.map((guest) => (
            <tr>
              <TableDes>{guest.name}<br/>
              {guest.phone_number}</TableDes>
              {
                guest.invitation_response === true ?
                (
                  <TableDes style={{color: "green", fontWeight: 'bold'}}>Accepted</TableDes>
                ) : guest.invitation_response === false ?
                (
                  <TableDes style={{color: "red"}}>Rejected</TableDes>
                ) :
                (
                  <TableDes>-</TableDes>
                )
              }
              
            </tr>
          ))}
      </Table>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1`
  text-align: center;
`;

const Table = styled.table`
  width: 95%;
  margin: 0 auto;
  border: solid 1px black;
  border-collapse: collapse;
`;

const TableHead = styled.th`
  border: solid 1px black;
  padding: 10px 0;
`;

const TableDes = styled.td`
  border: solid 1px black;
  padding: 10px 0;
  text-align: center;
  font-size: 13px;
`;

export default Guests;
