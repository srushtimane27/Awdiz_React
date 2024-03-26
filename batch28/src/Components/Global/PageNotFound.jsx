import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    
    const router = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            router('/')
        }, 3000)
    }, [])


  return (
    <div>
        <h2>Page Not Found</h2>
        <p>Redirecting you to home page in 3sec....</p>
    </div>
  )
}

export default PageNotFound