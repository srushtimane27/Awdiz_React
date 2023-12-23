import { useEffect, useState } from "react";

function MultipleDependency(){
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(10);

    function Increment(){
        setCounter((preValue) => preValue + 1)
    }

    function Increment2(){
        setCounter2((preValue) => preValue + 1)
    }

    useEffect(() => {
       alert("Multipal Dependency")
    }, [counter, counter2])

    return(
        <div>
            <h1>Multiple Dependency</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button>
            <h1>Counter : {counter2}</h1>
            <button onClick={Increment2}>+</button>
        </div>
    )

}
export default MultipleDependency;
