import React, { createContext, useState } from 'react'

export const MyCounterContext = createContext();

const ProviderCounterContext = ({children}) => {

    const [counter, setCounter] = useState(10)
    
    function Increment(){
        setCounter(counter + 10)
    }
    function Decrement(){
        setCounter(counter - 1)
    }
    function Reset(){
        setCounter(0)
    }
  return (
    <MyCounterContext.Provider value={{counter, Increment, Decrement, Reset}}>
        {children}
    </MyCounterContext.Provider>
  )
}

export default ProviderCounterContext