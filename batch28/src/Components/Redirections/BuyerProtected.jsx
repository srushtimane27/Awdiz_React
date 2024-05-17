import React, { useContext, useEffect } from 'react'
import  { AuthContext } from '../AuthContext/AuthContextComponent'
import { useNavigate } from 'react-router-dom';

const BuyerProtected = () => {
    const router = useNavigate();
    const {state} = useContext(AuthContext);

    useEffect(()=>{
        if(state && state.role !== "buyer"){
            alert("You are not allowed to access this page");
            return router('/login')
        }
    },[state]);
}

export default BuyerProtected