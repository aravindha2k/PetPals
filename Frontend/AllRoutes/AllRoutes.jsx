import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Contact from "../Page/Contact";
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
