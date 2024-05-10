import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Contact from "../../Pages/Contact";
import { Services } from "../../Pages/ServicePage";
import { DetailsPage } from "../../Pages/DetailsPage";
import { PaymentPage } from "../../Pages/PaymentPage";
const AllRoutes = () => {
  <Routes></Routes>;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/detailsPage" element={<DetailsPage />} />
      <Route path="/paymentsPage" element={<PaymentPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AllRoutes;
