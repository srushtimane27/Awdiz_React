import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Practice = () => {
  const router = useNavigate();

  const[userData, setUserData] = useState({name: "", email: "", password: "", confirmPassword: ""})
  console.log(userData, "userData")

  function handleChange(event){
    setUserData({...userData, [event.target.name]: event.target.value})
  }

  async function handleSubmit(event){
    event.preventDefault();
    if(userData.name && userData.email && userData.password && userData.confirmPassword){
      if(userData.password === userData.confirmPassword){
        try {
          const response = {data: {success: true, message: "Registration complete"}}

          if(response.data.success === true){
            alert(response.data.message)
            setUserData({name:"", email:"", password:"",confirmPassword:""})
            router('/home')
          }
          
        } catch (error) {
          console.log(error)
          alert(error.response.data.message)
        }

      }else{
        alert("pass and conpass not same")
      }
      alert("Completed")
    }else{
      alert("ALL FIELDS REQ")
    }

  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input type="text" name='name' required onChange={handleChange} /><br />
        <label>Email:</label><br />
        <input type="email" name='email' required onChange={handleChange} /><br />
        <label>Password:</label><br />
        <input type="password" name='password' required onChange={handleChange} /><br />
        <label>Confirm Password:</label><br />
        <input type="password" name='confirmPassword' required onChange={handleChange} /><br />
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Practice