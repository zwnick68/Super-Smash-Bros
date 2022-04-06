const SideNavigation = ({characters, isVisible}) => {
return(
    <div className="side-nav" style= {{
        display: isVisible ? "block" : "none"}}>
        {characters.map((character)=>{
            return(
                <div className="char-nav">
                   <img src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${character.name.toLowerCase()}.png`}></img>
                </div>
            )
        })
        }
    </div>
)
}
export default SideNavigation;