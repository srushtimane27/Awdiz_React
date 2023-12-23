import React, { useEffect, useState } from 'react'

const Practice = () => {
    const [counter, setCounter] = useState(5);
    // const [secondcounter, setCounterTwo] = useState(0);

    function Increment(){
        setCounter((preState) => preState + 1)
    }

    function Decrement(){
        setCounter((preState) => preState - 1)
    }

    useEffect(() => {
        // alert("Use Effect....")
    });

  return (
    <div>
        <h1>Use Effect:</h1>
        <h1>Counter : {counter}</h1>
        <button onClick={Increment}>+</button>
        {/* <h1>Counter : {secondcounter}</h1> */}
        <button onClick={Decrement}>-</button>
    </div>
  )
}

export default Practice



