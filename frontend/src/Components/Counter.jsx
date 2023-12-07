import { useState } from "react";


function Counter(){
    const [counter, setCounter] = useState(1);

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
                    <button onClick={Increment}>+</button><br />
                    <button onClick={Decrement}>-</button><br />
                    <button onClick={test}>++</button><br />
                    <button onClick={IncrementByTwo}>+20</button><br />
                    {isLoggedIn ? <button onClick={Change}>Logout</button> : <button onClick={Change}>Login</button>}

        </div>
    )
}
export default Counter;