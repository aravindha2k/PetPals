import { useToast } from '@chakra-ui/react';
import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let authobj = localStorage.getItem("token")
    // authobj = JSON.parse(authobj)
    // console.log(authobj);
    const toast = useToast();
    
    if(!authobj ){
        toast({
            title: 'Please login',
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        return(<Navigate to="/login" />)
    }

    return children
}

export default PrivateRoute

// || !authobj.isUser