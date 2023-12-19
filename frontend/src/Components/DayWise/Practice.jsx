import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Practice = () =>{

    const router = useNavigate();
    const[userData, setUserData] = useState({ name:"", email:"", password: "", confirmpassword: ""})
    console.log(userData, "userData")

    async function handleSubmit(e){
        e.preventDefault();

        if(userData.name && userData.email && userData.password && userData.confirmpassword){
            if(userData.password === userData.confirmpassword){
                try{
                    const response = { data: { success: true, message: "REGISTRATION COMPLETE"}}

                    if(response.data.success === true){
                        alert(response.data.message)
                        setUserData({name:"", email:"", password:"",confirmpassword:""})
                        router('/login-form')
                    }
                }catch (error){
                    console.log(error)
                    alert(error.response.data.message)
                }
            } else{
                alert("Password and confirm password not matched")
            }
        } else{
            alert("All fields are required")

        }
    }

    function handleChange(e){
        setUserData({...userData, [e.target.name]: e.target.value});
    }

    return(
        <div>
            <h1>Register Your Self</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label><br />
                <input type="email" required onChange={handleChange} name="email" value={userData.email} /><br />
                <label>Password:</label><br />
                <input type="password" required onChange={handleChange} name="password" value={userData.password}/><br />
                <label>Confirm Password:</label><br />
                <input type="password" required onChange={handleChange} name="confirmpassword" value={userData.confirmpassword} /><br />
                <label>Submit</label><br />
                <input type="submit" required /><br />
            </form>
        </div>
    )
}
export default Practice