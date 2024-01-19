import { createContext, useEffect, useReducer } from "react"
import { MyContext } from "./AuthContext"

export const MyContext = createContext();
const InitialState = { user: null, name: 'Malhar'}


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


const AuthContext = ({ children }) => {

    const[state, dispatch] = useReducer(Reducer, InitialState)

    async function getCurrentUserData(){
        try{
            const response = { data: { success: true,user: {name:"Malhar", email: "m@gmail.com"}}}
            if(token){
                getCurrentUserData()
            }
        }catch(error){
            console.log(error.response.data.message)
        }
    }


    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('my-token'))
        if(token){
            getCurrentUserData()
        }
    })

    return (
        <MyContext.Provider value={{ state, dispatch }}>{children}</MyContext.Provider>
    )
}

export default AuthContext;