import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
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
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../../Pages/Contact";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pets" element={<Pets />} />
      <Route 
      path="/pets/:id" 
      element={
        <PrivateRoute>
          <SinglePetCard />
        </PrivateRoute>
      } 
      />
      <Route 
      path="/adoptPet" 
      element={
        <PrivateRoute>
          <AdoptPet/>
        </PrivateRoute>} 
      />
      <Route path="/Services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route 
      path="/detailsPage/:id" 
      element={
        <PrivateRoute>
          <DetailsPage />
        </PrivateRoute>} 
      />
      <Route 
      path="/paymentsPage" 
      element={
        <PrivateRoute>
          <PaymentPage />
        </PrivateRoute>} 
      />
      <Route path="/thankyou" element={<Thankyou />} />
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<NotFoundError />} />
      
    </Routes>
  );
};

export default AllRoutes;
