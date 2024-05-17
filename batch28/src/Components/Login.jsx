import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext/AuthContextComponent';
import axios from 'axios';
import api from './AxiosConfig';

const Login = () => {
    const {LOGIN, state} = useContext(AuthContext);

    const router = useNavigate();

    const [userData, setUserData] = useState({email: "", password: ""})
    console.log(userData, "userData")

    function handleChange(event){
        // console.log(event.target.value, event.target.name)
        setUserData({...userData, [event.target.name] : event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault();
        if(userData.email && userData.password){
            try{
                const response = await api.post('/api/v1/user/login', {userData})
                // const response = await axios.post("http://localhost:3001/login", {userData}, {withCredentials: true})
                // const response = { data : { success : true, message: "Login Successfull",token: "abcdefgh", userData: {name: 'Srushti', email: 's@gmail.com', id: '100' }}}
                if(response.data.success === true){
                    // localStorage.setItem("token", JSON.stringify(response.data.token))
                    LOGIN(response.data.userData)
                    alert(response.data.message)
                    setUserData({email: "", password: ""})
                    router('/')
                }
            }catch(error){
                console.log(error)
                alert(error.response.data.message)
            }
          
        }else{
            // alert("login successfull")
            alert("All fields are required")
        }
    }

    useEffect(() => {
        console.log(state)
        if(state && state?.user?.role !== undefined){
            if(state?.user.role === 'buyer'){
                router("/");
            } else {
                router("/seller")
            }
        }
    }, [state])

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Email: </label><br />
            <input type="email" name='email' onChange={handleChange} required /><br />
            <label>Password: </label><br />
            <input type="password" name='password' onChange={handleChange} /><br />
            <input type="submit" value="Login" /><br />
        </form>
        <button onClick={()=>router("/register")}>Register?</button>
    </div>
  )
}

export default Login