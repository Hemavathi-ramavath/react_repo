function Food(){
    const food1 = "Biryani";
    const food2 = "Pizza";
    return(
        <div>
            <ol>
                <li>Mutton</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ol>
        </div>
    );
}
export default Food;