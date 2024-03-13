import { useContext } from 'react'
import { MyCounterContext } from './ProviderCounterContext'


const ContextHome = () => {

    const {counter, Increment, Decrement, Reset} = useContext(MyCounterContext);
    
  return (
    <div>
        <h1>Home Page Counter Context</h1>
        <h2>Counter : {counter}</h2>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default ContextHome;