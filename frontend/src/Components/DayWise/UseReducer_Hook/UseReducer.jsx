import React, { useReducer } from 'react'

const initialState = { count: 0, username: "Myntra", userRole: "admin" }

// const Reducer = action = {type : "INCREMENT"}

const Reducer = (state, action) => {
    console.log(state, "state", action, "action")
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 }
        case "DECREMENT":
            return { ...state, count: state.count - 1 }
        case "RESET":
            return { ...state, count: 0 }
        case "CHANGENAME":
            return { ...state, username: "Amazon" }
        default:
            return state
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(Reducer, initialState)
    console.log(state, "state")

    return (
        <div>
            <h1>{state.count}</h1>
            <h1>{state.username}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            <button onClick={() => dispatch({ type: "CHANGENAME" })}>Change Name</button>
        </div>
    )
}

export default UseReducer