import { useState } from "react";
function Submit(){
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Submitted: " + name);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}
export default Submit;