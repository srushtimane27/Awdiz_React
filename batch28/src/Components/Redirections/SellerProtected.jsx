import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AuthContext/AuthContextComponent'
import { useNavigate } from 'react-router-dom';

const SellerProtected = ({children}) => {
  const router = useNavigate();
  const {state} = useContext(AuthContext);

  useEffect(()=>{
    console.log(state, "state in sellerProtedted")
    if(state?.user && state?.user?.role !== "seller"){
        alert("You are not allowed to access this page");
        router("/login")
    }
  },[state]);
  return children;
}

export default SellerProtected;