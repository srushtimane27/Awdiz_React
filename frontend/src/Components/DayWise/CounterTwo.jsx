import { useState } from "react";

function CounterTwo(){

    const [counter, setCounter] = useState(100);
    console.log(counter, "counter")

    function Increment(){
        setCounter ((preState) => preState + 1)
    }

    function Decrement(){
        setCounter ((preState => preState - 1))
    }

    function Reset(){
        setCounter(200)
    }

    return(
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default CounterTwo;