import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const router = useNavigate();

    const [loginData, setLoginData] = useState({email: "", password: ""})
    console.log(loginData, "loginData")

    function handleChange(event){
        // console.log(event.target.value, event.target.name)
        setLoginData({...loginData, [event.target.name] : event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault();
        if(loginData.email && loginData.password){
            try{
                const response = { data : { success : true, message: "Login Successfull"}}
                if(response.data.success === true){
                    alert(response.data.message)
                    setLoginData({email: "", password: ""})
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
    </div>
  )
}

export default Login