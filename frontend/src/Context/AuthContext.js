//useContext

import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

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

    async function getCurrentUserData(token){
        try{
            const response = await axios.post('http://localhost:8000/api/v1/auth/get-current-user', {token} )
            // const response = { data: { success: true, user: { name: "Akshay", email: "akshay@gmail.com"}}}
            if(response.data.success){
                dispatch({ type: "LOGIN" , payload: response.data.user})
            }
        } catch (error) {
            dispatch({type : "LOGOUT"})
            localStorage.removeItem('my-token')
            // JSON.parse(localStorage.getItem('my-token'))
            console.log(error.response.data.message)

        }
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('my-token'))
        if(token){
            getCurrentUserData(token)
        }
    }, [])

    return(
        <MyContext.Provider value={{ state, dispatch }}>{children}</MyContext.Provider> //children - function component
    )
}

export default AuthContext;

