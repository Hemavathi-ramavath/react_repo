function Click(){
    const handleClick = () => {
        alert("Botton clicked!");
    }
    return(
        <div>
            <h2>OnClick Event Handler</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
export default Click;