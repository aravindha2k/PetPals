import AllRoutes from "./Components/AllRoutes/AllRoutes";


import "./App.css";
import Navbar from "./Components/AllRoutes/Navbar";
import Footer from "./Pages/Footer";
import AdminNavBar from "./Components/AllRoutes/AdminNavBar";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContextApi";

function App() {
  const token = localStorage.getItem("token")
  const tokenobj = JSON.parse(token) || {}
  const{isAdmin, setIsAdmin} = useContext(AuthContext)

  if(!tokenobj ) 
  {
    return(
      <>
      <Navbar/>
      <AllRoutes/>
      <Footer />
      </>
    )
  }
  return (
    <>
    {tokenobj.isAdmin? <AdminNavBar /> : <Navbar/> }
    <AllRoutes/>
    {tokenobj.isAdmin? "" : <Footer />}
    </>
  )
}

export default App;
