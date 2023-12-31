//useContext

import { createContext, useReducer } from "react";

export const MyContext = createContext();

const InitialStat = { user: null, test: 'Srushti' }

const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        default:
            return state
    }
}

// HOC - HIGHER ORDER COMPONENTS

const AuthContext = ( { children }) => {

    const [state, dispatch] = useReducer(Reducer, InitialStat)

    return(
        <MyContext.Provider value={{ state, dispatch }}>{children}</MyContext.Provider>
    )
}

export default AuthContext;

