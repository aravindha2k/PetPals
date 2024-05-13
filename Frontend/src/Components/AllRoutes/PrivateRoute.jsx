import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let authobj = localStorage.getItem("token")
    // authobj = JSON.parse(authobj)
    // console.log(authobj);
    
    if(!authobj ){
        return(<Navigate to="/login" />)
    }

    return children
}

export default PrivateRoute

// || !authobj.isUser