import { useState } from "react";
function Ternary() {
    const [login, setLogin] = useState(false);
    return(
        <div>
            <h2>{login ? "Welcome back!" : "Please log in."}</h2>
            <button onClick={() => setLogin(!login)}>
                {login ? "Log Out" : "Log In"}
            </button>
        </div>
    );
}
export default Ternary;