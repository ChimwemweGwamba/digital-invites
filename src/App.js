import './App.css';
import Landing from './components/landing';
import Program from './components/program';
import Info from './components/info';
import Rsvp from './components/rsvp';


function App() {
  return (
    <div className="App">
      <Landing/>
      <Info/>
      <Rsvp/>
      <Program/>
      
    </div>
  );
}

export default App;
