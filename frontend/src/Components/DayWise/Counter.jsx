import { useState } from "react";


function Counter(){
    const [counterOne, setCunterOne] = useState(20);
    const [counter, setCounter] = useState(1);
    function Inc(){
        setCunterOne((preValue) => preValue * 10);
    }


    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function Change(){
        setIsLoggedIn ((preValue) => !preValue)
    }

    function Increment(){
        setCounter ((preValue) => preValue + 1)
    }

    function Decrement(){
        setCounter((preValue) => preValue - 1)
    }

    function test(){
        setCounter(counter + 1)
    }

    function IncrementByTwo(){
        setCounter((preValue) => preValue + 20)
    }
    
    return(
        <div>
                    <h1>Counter - {counter}</h1><br />
                    <h1>CounterOne - {counterOne}</h1>
                    <button onClick={Inc}>+</button>
                    <button onClick={Increment}>+</button><br />
                    <button onClick={Decrement}>-</button><br />
                    <button onClick={test}>++</button><br />
                    <button onClick={IncrementByTwo}>+20</button><br />
                    {isLoggedIn ? <button onClick={Change}>Logout</button> : <button onClick={Change}>Login</button>}

        </div>
    )
}
export default Counter;