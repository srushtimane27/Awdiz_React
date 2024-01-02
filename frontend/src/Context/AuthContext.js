//useContext

import { createContext, useReducer } from "react";

export const MyContext = createContext(); //Instance 

const InitialState = { user: null, test: 'Srushti'}

const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload } //data coming from action.payload
        case "LOGOUT":
            return { ...state, user: null }
        default:
            return state
    }
}

// HOC - HIGHER ORDER COMPONENTS : This Component accepts as a props any component as a function
// state , dispatch will be accessible by any component

const AuthContext = ( { children }) => {

    const [state, dispatch] = useReducer(Reducer, InitialState)

    return(
        <MyContext.Provider value={{ state, dispatch }}>{children}</MyContext.Provider> //children - function component
    )
}

export default AuthContext;

