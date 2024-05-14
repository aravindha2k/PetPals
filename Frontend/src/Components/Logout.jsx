import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContextApi'
import { useToast } from '@chakra-ui/react'

const Logout = () => {
    const navigate = useNavigate()
    const{isAdmin, setIsAdmin} = useContext(AuthContext)
    const toast = useToast()
  return (
    useEffect(()=>{
        localStorage.removeItem("token")
        setIsAdmin(false)//setting the admin value to false and putting this admin value in App parent component only then app component rerenders and allroutes get updated and again get user routes and go to user's home page without reloading the browser
        toast({
            title: 'Logged Out',
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        navigate("/")
    },[])
  )
}

export default Logout