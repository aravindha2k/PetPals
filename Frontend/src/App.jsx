import AllRoutes from "./Components/AllRoutes/AllRoutes";


import "./App.css";
import Navbar from "./Components/AllRoutes/Navbar";
import Footer from "./Pages/Footer";

function App() {


  return (
    <>
      <div className="fixed top-0 w-full z-50">
      <Navbar />
      </div>
     
      <div className="pt-16"><AllRoutes /></div>
      <Footer />
    </>
  );
}

export default App;
