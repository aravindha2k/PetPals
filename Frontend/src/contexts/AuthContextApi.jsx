import {  createContext, useEffect, useState } from "react"

export const AuthContext = createContext({});


const AuthContextProvider = ({children}) => {
    
    const[isAdmin, setIsAdmin] = useState(false)
    

  // console.log(userLoggedIn);
  

    // useEffect(() => {
    //   const loggedinUserId = localStorage.getItem('isLoginLocal');
    //   // console.log(loggedinUserId);
      
    //   if (loggedinUserId) {
        
    //     setUserLoggedIn((prev)=>{
    //       return {...prev, id:loggedinUserId, isAuth:true}
    //     })
    //   }
    // }, []);

    
  return (
    <AuthContext.Provider value={{ isAdmin, setIsAdmin}}>
         {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
