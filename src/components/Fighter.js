export default ({name, color}) => {
    return (
    <div className ="Fighter" style={{backgroundColor: color}}>
        <h4>{name}</h4>
    </div>
    )
}