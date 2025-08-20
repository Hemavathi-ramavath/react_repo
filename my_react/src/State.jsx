import { useState } from "react";
function State(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(5)}>Reset</button>
        </div>
    );
}
export default State;