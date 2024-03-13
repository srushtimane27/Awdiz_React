import React, { useEffect, useState } from 'react'

const NoDependency = () => {

    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        alert("Type One use effect...")
    });

  return (
    <div>
        <h1>NoDependency</h1>
        <h1>Counter : {counter} </h1>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        
    </div>
  )
}

export default NoDependency