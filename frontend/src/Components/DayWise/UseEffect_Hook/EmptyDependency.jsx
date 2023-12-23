import { useEffect, useState } from "react";

function EmptyDependency(){

    const [counter , setCounter] = useState(0);

    function Increment(){
        setCounter ((preValue => preValue + 1))
    }

    useEffect(() => {
        alert("This is use effect...")
    }, [])

    return(
        <div>
            <h1>UseEffect Type Two : </h1>
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button>
        </div>
    )

}

export default EmptyDependency;
