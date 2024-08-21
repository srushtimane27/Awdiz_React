import React from "react";

const PropsMaps = ({ hello, myAge, ChangeName, myStudents, flower }) => {

    console.log(myAge, ChangeName, myStudents, flower, "hello")

    // const [message, setMessage] = useState("How Are You");

    return (
        <div>
            <ul>
                {myStudents.map((student) => (
                    <p>{student}</p>
                ))}
            </ul>
            <h1>{hello}</h1>
            <h1>{flower}</h1>
            <button onClick={ChangeName}>Change Name</button>
        </div>
    )
}
export default PropsMaps