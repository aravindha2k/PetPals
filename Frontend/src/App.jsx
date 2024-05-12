import AllRoutes from "./Components/AllRoutes/AllRoutes";
import Auth from "./Components/Auth";

import "./App.css";
import Navbar from "./Components/AllRoutes/Navbar";
import Footer from "./Pages/Footer";

function App() {


  return (
    <>
      <div className="fixed top-0 w-full z-50">
      
      </div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
