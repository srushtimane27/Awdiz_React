import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [loginData, setLoginData] = useState({ email: "", password: ""});
    console.log(loginData, "loginData")

    const router = useNavigate();

    function handleChange(e){
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault();

        if (loginData.email && loginData.password){
            try{
                const response = { data: { success:true, message: "Login Successful."}}
                if (response.data.success){
                    toast.success(response.data.message)
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