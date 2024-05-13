import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Contact from "../../Pages/Contact";
import Pets from "../../Pages/Pets";
import { Services } from "../../Pages/ServicePage";
import { DetailsPage } from "../../Pages/DetailsPage";
import { PaymentPage } from "../../Pages/PaymentPage";
import About from "../../Pages/About";
import NotFoundError from "../NotFoundError";
import Thankyou from "../../Pages/Thankyou";
import Auth from "../Auth";
import SinglePetCard from "../pets/SinglePetCard";
import AdoptPet from '../../Pages/AdoptPet'
import Thanks from "../../Pages/Thanks";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/pets/:id" element={<SinglePetCard />} />
      <Route path="/adoptPet" element={<AdoptPet />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/detailsPage/:id" element={<DetailsPage />} />
      <Route path="/paymentsPage" element={<PaymentPage />} />
      <Route path="/thanks" element={<Thanks />} />
      <Route path="/thankyou" element={<Thankyou />} />
      <Route path="*" element={<NotFoundError />} />
      <Route path="/login" element={<Auth />} />
      
    </Routes>
  );
};

export default AllRoutes;
