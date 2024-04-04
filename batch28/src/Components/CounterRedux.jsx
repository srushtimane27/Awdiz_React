import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from './Redux/actions/Counter.actions';

const CounterRedux = () => {

    const dispatch = useDispatch();

    const counter = useSelector((state) => state.counter.counter)

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch(Increment())}>+</button>
        <button onClick={()=>dispatch(Decrement())}>-</button>
    </div>
  )
}

export default CounterRedux