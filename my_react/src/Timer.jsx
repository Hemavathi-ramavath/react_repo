import { useState, useEffect } from "react";
function Timer(){
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000); 
    }, []);
    return(
        <div> <h1> I have Rendered {seconds} times</h1>
        </div>
    );
}
export default Timer