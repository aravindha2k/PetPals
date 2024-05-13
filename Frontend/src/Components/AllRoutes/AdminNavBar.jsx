import { NavLink } from "react-router-dom"

import { useState } from "react";

const AdminNavBar = () => {
  const [isActive,setIsActive] = useState(false);

  const listOfLinks=[
    {
       to:"/",
       displayText:"Dashboard"
    },
    {
      to:"/petsadmin",
      displayText:"Pets"
    },
    {
      to:"/adoptadmin",
      displayText:"Adoptions"
    },
    {
      to:"/servicesadmin",
      displayText:"Services"
    },
    {
      to:"/logout",
      displayText:"Logout"
    }
  ]
  const defaultStyle = { color: 'black' ,fontWeight: "bold" };
  const activeStyle = { color: "teal",fontWeight: "bold" }; 

  return (
    <div className='navbar'>
       <div className={`hamburger-menu ${isActive? "active" : null}`} onClick={()=>{setIsActive(prev=>!prev) }} >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <div className={`navbar-inner ${isActive? "active" : null}`}>
            {listOfLinks.map((link)=>{
                return(<NavLink  onClick={()=>{setIsActive(prev=>!prev) }} style={({isActive})=> isActive?activeStyle:defaultStyle}
                    key={link.to} to={link.to}>{link.displayText}</NavLink>)
            })}
            
        </div>
    </div>
    
  )
}

export default AdminNavBar