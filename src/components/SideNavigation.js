const SideNavigation = ({characters, isVisible}) => {
return(
    <div className="side-nav" style= {{
        display: isVisible ? "block" : "none"}}>
        {characters.map((character)=>{
            return(
                <div style= {{
                    display: isVisible ? "block" : "none"}}>
                    <p>{character.name}</p>
                </div>
            )
        })
        }
    </div>
)
}
export default SideNavigation;