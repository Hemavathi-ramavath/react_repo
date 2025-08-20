function Student(props){
    return(
        <div>
            <p>Nmae: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
            <hr />
        </div>
    );
}
export default Student;