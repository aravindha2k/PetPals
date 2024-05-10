import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Contact from "../../Pages/Contact";
const AllRoutes = () => {
  <Routes></Routes>;
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AllRoutes;
