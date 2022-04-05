
import './App.css';
import Fighter from "./components/Fighter.js"

function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className = "fighters-grid" >
      <Fighter name={"Roy"} color={'red'}/>
      <Fighter name={"Fox"} color={'blue'}/>
      <Fighter name={"JiggglyPuff"} color={'green'}/>
      </div>
    </div>
  );
}

export default App;
