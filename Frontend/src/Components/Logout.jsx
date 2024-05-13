import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContextApi'

const Logout = () => {
    const navigate = useNavigate()
    const{isAdmin, setIsAdmin} = useContext(AuthContext)
  return (
    useEffect(()=>{
        localStorage.removeItem("token")
        setIsAdmin(false)
        navigate("/")
        // window.location.reload();
    },[])
  )
}

export default Logout