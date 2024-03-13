import React, { createContext, useReducer } from 'react'

export const AuthContext = createContext();

function Reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        default:
            return state;
    }
}

const InitialState = {user: null}



const AuthContextComponent = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, InitialState)

    function LOGIN(data){
        dispatch({type: "LOGIN", payload: data})
    }
    function LOGOUT(){
        dispatch({type: "LOGOUT"})
    }

    async function getUserData(token){
        try {
            const response = {data: {success: true, userData: {name:'Srushti'}}}
            
        } catch (error) {
            console.log(error)
        }
    }

    


    return (
        <AuthContext.Provider value={{state, LOGIN, LOGOUT}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextComponent