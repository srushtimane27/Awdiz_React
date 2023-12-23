import React, { useEffect, useState } from 'react'

const Practice = () => {
    const [counter, setCounter] = useState(0);
    const [counter2,setCounter2] = useState(2);

    function Incre(){
        setCounter((preValue => preValue + 1))
    }

    function Decr(){
        setCounter2((preValue => preValue - 1))
    }

    useEffect(() => {
        alert("Helloooo")
    }, [counter][counter2])

  return (
    <div>
        <h1>Use Effect: </h1>
        <h1>counter: {counter}</h1>
        <button onClick={Incre}>+</button>
        <h1>counter: {counter2}</h1>
        <button onClick={Decr}>-</button>
    </div>
  )
}

export default Practice



