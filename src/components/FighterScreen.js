const FighterScreen = ({isVisible, setVisible,selectedCharacter}) => {
    return(
<div onClick={()=>{return null}} 
className="fighter-screen" style= {{
    display: isVisible ? "block" : "none", backgroundImage:`url(https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/bg.jpg)`}}>
        <span className="name-bg">{selectedCharacter.name}</span>
        <h2 className="name-fg">{selectedCharacter.name}</h2>
        <img className="char-portrait" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/main.png`}/>
        {/* <p className="fighter-desc">this character ass</p> */}
      </div>
    )
}
export default FighterScreen;
