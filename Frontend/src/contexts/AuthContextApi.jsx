import {  createContext, useEffect, useState } from "react"

export const AuthContext = createContext();


const AuthContextProvider = ({children}) => {
    
    const[isAdmin, setIsAdmin] = useState(false)
    
    return (
        <AuthContext.Provider value={{ isAdmin, setIsAdmin}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
