import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Contact from "../Page/Contact";
import { Services } from "../Page/ServicePage";
import { DetailsPage } from "../Page/DetailsPage";
import { PaymentPage } from "../Page/PaymentPage";



const AllRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/detailsPage" element={<DetailsPage />} />
      <Route path="/paymentsPage" element={<PaymentPage />} />
    </Routes>
  );
};

export default AllRoutes;
