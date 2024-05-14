import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./styles/adoptPet.css"
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

const AdoptPet = () => {
  const data = useLocation().state;
  const navigate = useNavigate();
  const initialState = {
    petId: data._id,
    petName: data.name,
    petSpecies: data.species,
    color: data.color,
    userId:"",
    username: '',
    email: '',
    address: '',
    phone: '',
    pin: '',
    landmark: '',
    adoptionStatus: 'pending'
  }

  const toast = useToast()
  const [state, setState] = useState(initialState);
  // console.log(data);

  useEffect(()=>{
    console.log(state);
  },[])

  const postAdoption = async()=>{
    try {
      const res = await axios.post('https://petpals-1-pa4p.onrender.com/adopt/create', state);
      console.log('Adoption successful:', res.data);
      toast({
        title: 'Pet Adopted Successfully! Thanks for adopting',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate("/thankyou");
    } catch (error) {
      console.error('Error adopting pet:', error);
      toast({
        title: 'Error doing adoption. Retry!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postAdoption()
}

  const handleInputChange = (e) => {
      const { id, value } = e.target;
      setState(prevState => ({
          ...prevState,
          [id]: value
      }));
  }
  return (
    <div id="main" className="wrapper">
            <form onSubmit={handleSubmit} id="addressForm">
                <div className="singleRow">
                    <div>
                        <p>Name <span>*</span></p>
                        <input id="username" type="text" placeholder="Enter your name" value={state.username} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <p>Mobile No. <span>*</span></p>
                        <input id="phone" type="text" placeholder="Enter your Mobile no." value={state.phone} onChange={handleInputChange} required />
                    </div>
                </div>
                <div>
                    <p>Address (Area & Street) <span>*</span></p>
                    <input id="address" type="text" placeholder="Type your Address" value={state.address} onChange={handleInputChange} required />
                </div>
                <div className="singleRow">
                    <div>
                        <p>Landmark <span>*</span></p>
                        <input id="landmark" type="text" placeholder="Enter Landmark" value={state.landmark} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <p>Pincode <span>*</span></p>
                        <input id="pin" type="text" placeholder="Enter pincode" value={state.pin} onChange={handleInputChange} required />
                    </div>
                </div>
                <div>
                    <p>Email <span>*</span></p>
                    <input id="email" type="text" placeholder="Enter your Mail Address" value={state.email} onChange={handleInputChange} required />
                </div>
                <input type="checkbox" required />
                <p style={{ marginLeft: "5px" }} className="inline">I have read the adoption rules and agree to Provide a Loving and Safe Environment for the pets</p>
                <input  type="submit" value="Confirm Pet Adoption" />
            </form>

            <div id="orderSummary">
                <h1>Adopting Pet {state.petName}<span id="totalitem"></span></h1>
                <div>
                    <p className="gray">Pet Adoption Charges*</p>
                    <p id="totalmrp">Free*</p>
                </div>
                <div>
                    <p className="gray">Species</p>
                    <p id="payday">{state.petSpecies}</p>
                </div>
                <div>
                    <p className="gray">color</p>
                    <p id="totaldiscount">{state.color}</p>
                </div>
                <hr />
                
                <h2 style={{ color: 'deepskyblue' }}>Press Confirm for finsihing Adoption</h2>
            </div>
        </div>
  )
}

export default AdoptPet