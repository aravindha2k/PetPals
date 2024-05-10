import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Contact from "../../Pages/Contact";
import Pets from "../../Pages/Pets";
import Services from "../../Pages/Services";
import About from "../../Pages/About";
import NotFoundError from "../NotFoundError";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
};

export default AllRoutes;
