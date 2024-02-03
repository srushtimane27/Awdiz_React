import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/AuthContext';
import axios from 'axios';

const LoginForm = () => {
    const [loginData, setLoginData] = useState({ email: "", password: ""});
    console.log(loginData, "loginData")

    const { state, dispatch } = useContext(MyContext)
    console.log(state?.user,"state?.user")

    const router = useNavigate();

    function handleChange(e){
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e){
        e.preventDefault();

        if (loginData.email && loginData.password){
            try{
                const response = await axios.post('http://localhost:8000/api/v1/auth/login', { loginData })

                // const response = { data: { success:true, message: "Login Successful.",user: { name: "Akshay", email:"akshay@gmail.com"}, token: "ASGDfdgtAhgGagGatffUSGGVggsgHFSF"}}
                if (response.data.success){
                    toast.success(response.data.message)
                    dispatch({ type: "LOGIN" , payload: response.data.user})
                    localStorage.setItem('my-token', JSON.stringify(response.data.token))
                    setLoginData({ email: "", password: ""})
                    router('/')
                }
            } catch (error){
                console.log(error)
                toast.error(error.response.data.error)
            }
        } else{
            alert("All fields are mandatory")
        }
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Email</label><br />
            <input type="email" required onChange={handleChange} name='email' value={loginData.email} /><br />
            <label>Password</label><br />
            <input type="password" required onChange={handleChange} name='password' value={loginData.password} /><br />
            <input type="Submit" value='Login'/><br />
        </form>
    </div>
  )
}

export default LoginForm