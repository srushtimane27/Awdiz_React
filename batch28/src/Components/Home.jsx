import React, { useContext } from 'react'
import { AuthContext } from './AuthContext/AuthContextComponent';

const Home = () => {
    const { state } = useContext(AuthContext);
    console.log(state, "state")
    return (
        <h1>Home Page - {state?.user?.name}</h1>
    )
}
export default Home; 