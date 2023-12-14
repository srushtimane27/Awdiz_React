import React from "react";

const MapObject = ({ myStudentData }) => {
    console.log(myStudentData, "myStudentsData")

    return (
        <div>
            {myStudentData.map((studentData) => (
                <div>
                    <img src={studentData.image} />
                    <h1>{studentData.name}</h1>
                    <p>{studentData.marks}</p>
                </div>
            ))}
        </div>
    )
}

export default MapObject