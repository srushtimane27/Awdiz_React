import React, { createContext, useState } from 'react'


export const MyCounterContext = createContext();


const CounterContext = ({children}) => {
    
    const [counterOne, setCounterOne] = useState(20)

    function Increment(){
        setCounterOne(counterOne + 10)
    }

    function Decrement(){
        setCounterOne(counterOne - 10)
    }

    function Reset(){
        setCounterOne(0)
    }

  return (
    <MyCounterContext.Provider value={{counterOne, Increment, Decrement, Reset}}>
        {children}
    </MyCounterContext.Provider>
  )
}

export default CounterContext