const FighterScreen = ({isVisible, setVisible,selectedCharacter}) => {
    return(
<div onClick={()=>{setVisible(false)}} 
className="fighter-screen" style= {{
    display: isVisible ? "block" : "none"}}>
        <h3>{selectedCharacter.name}</h3>
        <img src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/main.png`} width="100" height ="100"/>
        <p>this character ass</p>
      </div>
    )
}
export default FighterScreen;