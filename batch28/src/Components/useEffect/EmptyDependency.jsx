import React, { useEffect, useState } from 'react'

const EmptyDependency = () => {
    const [counter, setCounter] = useState(10);

    useEffect(()=>{
        alert("Hello World")
    }, [])


  return (
    <div>
        <h1>EmptyDependency</h1>
        <h1>Counter: {counter}</h1>
        <button onClick={()=>{setCounter(counter+10)}}>+</button>
    </div>
  )
}

export default EmptyDependency