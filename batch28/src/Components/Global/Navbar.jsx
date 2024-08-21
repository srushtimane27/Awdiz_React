import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContextComponent'
import api from '../AxiosConfig';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const router = useNavigate();
  const {state, LOGOUT} = useContext(AuthContext);

 async function Logout(){
    try {
      const response = await api.get('/api/v1/user/logout')
      if(response.data.success){
        LOGOUT();
        alert.success(response.data.message)
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <h2>Navbar</h2>
      {state?.user?.name && <h1>Hello {state?.user?.name}</h1>}
    {state?.user?.role? <h1 onClick={Logout}>Logout</h1> : <h2 onClick={()=> router('login')}>Login</h2>}
    </div>
  )
}

export default Navbar
