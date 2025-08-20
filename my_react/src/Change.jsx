import { useState } from "react"
function Change() {
    const [text, setText] = useState("Hello");
    const handleChange = (event) => {
        setText(event.target.value);
    }
    return(
        <div>
            <h2>Change Text Example</h2>
            <input type="text" value={text} onChange={handleChange} />
            <p>Current Text: {text}</p>
        </div>
    );
}
export default Change;