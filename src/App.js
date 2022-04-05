
import './App.css';
import Fighter from "./components/Fighter.js"
import FighterScreen from "./components/FighterScreen.js"


function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className = "fighters-grid" >
      <Fighter name={"Roy"} color={'red'} />
      <Fighter name={"Fox"} color={'yellow'} />
      <Fighter name={"JiggglyPuff"} color={'green'} />
      </div>
      <div class="fighter-screen">
        <h3>Roy</h3>
        <img src="https://www.smashbros.com/assets_v2/img/fighter/roy/main.png" width="100" height ="100"/>
        <p>this character ass</p>
      </div>
    </div>
  );
}

export default App;
