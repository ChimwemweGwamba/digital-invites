import "./App.css";
import Landing from "./components/landing";
import Program from "./components/program";
import Info from "./components/info";
import Rsvp from "./components/rsvp";
import Login from "./components/login";
import { createGuest } from "./firebase";


function App() {
  return (
    <div className="App">
      {/* <Landing />
      <Info />
      <Rsvp />
      <Program /> */}
      <Login/>
    </div>
  );
}

export default App;
