import './App.css';
import Fighter from "./components/Fighter.js"
import FighterScreen from "./components/FighterScreen.js"
import {useState} from 'react';

const characters = [
  {name: "Roy", color: "red"},
  {name: "Fox", color: "yellow"},
  {name: "Ganondorf", color: "green"},
  {name: "Kazuya", color: "black"},
  {name:"Sheik", color: "gray"},
  {name:"Ness", color: "orange"}
]

function App() {
  const [visible, setVisible] = useState(false)
  const [selectedCharacter,setSelectedCharacter] =useState(characters[0])

  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className = "fighters-grid" >
      {
        characters.map((element,i)=>{
          return(
          <Fighter name={element.name} color={element.color} setVisible={setVisible} setSelectedCharacter={setSelectedCharacter} />
          )
        })
      }
      


      </div>
      <FighterScreen isVisible={visible} setVisible={setVisible} selectedCharacter={selectedCharacter}/>
    </div>
  );
}

export default App;
