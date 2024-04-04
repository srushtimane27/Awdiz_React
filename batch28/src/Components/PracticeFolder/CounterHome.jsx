import React, { useContext } from 'react'
import { MyCounterContext } from '../Context/ProviderCounterContext'

const CounterHome = () => {

    const {counterOne, Increment, Decrement, Reset} = useContext(MyCounterContext)


  return (
    <div>
        <h1>Counter Context Page</h1>
        <h2>Counter : {counterOne}</h2>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default CounterHome