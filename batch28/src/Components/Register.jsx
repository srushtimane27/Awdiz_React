import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from './AxiosConfig';

const Register = () => {
    const router = useNavigate();

    const [userData, setUserData] = useState({name: "", email: "", password: "", confirmPassword: ""})
    console.log(userData, "userData")

    function handleChange(event){
        // console.log(event.target.value, event.target.name)
        setUserData({...userData, [event.target.name]: event.target.value})
    }

   async function handleSubmit(event){
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmPassword){
            if(userData.password === userData.confirmPassword){
                try{
                    // const response = { data : { success : true, message: "Registration Completed"}}
                    const response = await api.post('/register', { userData })

                    if(response.data.success === true){
                        alert(response.data.message)
                        setUserData({name:"", email:"", password: "", confirmPassword: ""})
                        router('/login')
                    }
                }catch(error){
                    console.log(error)
                    alert(error.response.data.message)

                }
            }else{
                alert("Password and confirm password are not same")
            }
            alert("Registration Completed")
        } else{
            alert("All Fields Are Required")
        }
    }
  return (
    <div>
        <h1>Regisration Form</h1>
        <form onSubmit={handleSubmit}>
            <label>Name:</label><br />
            <input type="text" name='name' onChange={handleChange} required/><br />
            <label>Email:</label><br />
            <input type="email" name='email' onChange={handleChange} required/><br />
            <label>Password:</label><br />
            <input type="password" name='password' onChange={handleChange} required/><br />
            <label>Confirm Password:</label><br />
            <input type="password" name='confirmPassword' onChange={handleChange} required /><br />
            <input type="submit" value="Register" />
        </form>
    </div>
  )
}

export default Register