import { useState, useEffect } from "react";
function Effect(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
        },[]);
        return(
            <div>
                <h1>Fetched Data:</h1>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                        ))}
                </ul>
            </div>

    );
}
export default Effect;