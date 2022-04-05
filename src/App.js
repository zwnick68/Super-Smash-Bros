import './App.css';
import Fighter from "./components/Fighter.js"
import FighterScreen from "./components/FighterScreen.js"
import {useState} from 'react';

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className = "fighters-grid" >
      <Fighter name={"Roy"} color={'red'} setVisible={setVisible} />
      <Fighter name={"Fox"} color={'yellow'} setVisible={setVisible} />
      <Fighter name={"Ganondorf"} color={'green'} setVisible={setVisible} />
      <Fighter name={"Sheik"} color={'purple'} setVisible={setVisible} />
      </div>
      <FighterScreen isVisible={visible} setVisible={setVisible}/>
    </div>
  );
}

export default App;
