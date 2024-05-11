import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Contact from "../../Pages/Contact";
import Pets from "../../Pages/Pets";
import { Services } from "../../Pages/ServicePage";
import { DetailsPage } from "../../Pages/DetailsPage";
import { PaymentPage } from "../../Pages/PaymentPage";
import About from "../../Pages/About";
import NotFoundError from "../NotFoundError";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/detailsPage" element={<DetailsPage />} />
      <Route path="/paymentsPage" element={<PaymentPage />} />
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
};

export default AllRoutes;
