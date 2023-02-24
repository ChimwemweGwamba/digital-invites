import React from "react";
import Info from "../components/info";
import Landing from "../components/landing";
import Program from "../components/program";
import Rsvp from "../components/rsvp";
import Invite from "../components/invite";

function Home() {
  return (
    <div>
      <Invite/>
      <Landing />
      <Info />
      <Rsvp />
      <Program />
    </div>
  );
}

export default Home;
