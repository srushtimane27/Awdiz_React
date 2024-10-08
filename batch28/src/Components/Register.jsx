import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from './AxiosConfig';
import { AuthContext } from './AuthContext/AuthContextComponent';

const Register = () => {
    const router = useNavigate();
    const {state} = useContext(AuthContext);

    const [userData, setUserData] = useState({name: "", email: "", password: "", confirmPassword: "", role: "buyer"})
    console.log(userData, "userData")

    function handleChange(event){
        // console.log(event.target.value, event.target.name)
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    function handleSelect(event){
        // console.log(event.target.value)
        setUserData({...userData, ["role"]: event.target.value})
    }

   async function handleSubmit(event){
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmPassword){
            if(userData.password === userData.confirmPassword){
                try{
                    // const response = { data : { success : true, message: "Registration Completed"}}
                    // const response = await axios.post('http://localhost:3001/api/v1/auth/register', { userData })
                    const response = await api.post('/api/v1/user/register', { userData })

                    if(response.data.success === true){
                        alert(response.data.message)
                        setUserData({name:"", email:"", password: "", confirmPassword: "", role: "buyer"})
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

    useEffect(()=>{
        if(state && state?.user?.role !== undefined){
            if(state?.user?.role === "buyer"){
                router("/")
            } else {
                router("/seller")
            }
        }
    }, [state]);

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
            <select onChange={handleSelect}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
            </select><br />
            <input type="submit" value="Register" />
        </form>
        <button onClick={()=>router("/login")}>Login</button>
    </div>
  )
}

export default Register