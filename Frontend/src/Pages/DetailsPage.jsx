import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image, Badge, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import "./styles/servicePage.css";

import axios from "axios";

export function DetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://petpals-1-pa4p.onrender.com/service/services/${id}`
        );
        setData(response.data.items[0]);
        console.log(response.data.items[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const checkoutHandle = () => {
    setTimeout(() => {
      navigate("/paymentsPage",{data});
    }, 1000);
  };

  return (
    <>
      {/* checkout here */}

      <div id="checkout-component">
        <div id="orderSummary">
          <h1>
            <strong style={{ textDecoration: "underline" }}>
              Booking Details :-
            </strong>
            <span id="totalitem"></span>
          </h1>
          <Box
          id="main-box"
            display="grid"
            gridTemplateColumns="40% 1fr"
            w="auto"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
            id="petImage"
              borderRadius="50%"
              marginTop="1px"
              p="2px"
              h="180px"
              w="250px"
              src={data && data.serviceImg}
              alt={data && data.serviceName}
              
            />
            
            <Box p="5px"
             id="pet-container"

            
            >
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                w="100%"
                mt="1"
                ml='10px'
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {data?.serviceName}
              </Box>
              </Box>
              {/* <Box
                w="100%"
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {data?.serviceName}
              </Box> */}
              <Box>
                {data?.serviceDescription}
                <Box as="span" color="gray.600" fontSize="sm"></Box>
              </Box>
              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      // color={data?.guestFavorite ? "teal.500" : "gray.300"}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {/* {data?.number_of_reviews} reviews */}
                </Box>
              </Box>
            </Box>
          </Box>
          <hr />
          <div className="price-details">
            <p className="gray">Service Category</p>
            <p id="totalmrp">{data?.serviceCategory} </p>
          </div>
          <div className="price-details">
            <p className="gray">Service charge</p>
            <p id="totalmrp">${data?.servicePrice}</p>
          </div>

          <div className="price-details">
            <p className="gray">GST*</p>
            <p className="payday">{`$${(data?.servicePrice * 0.28).toFixed(
              2
            )}`}</p>
          </div>
          <div className="price-details">
            <p className="gray">Discounts</p>
            <p id="totaldiscount" className="green">
              - $0
            </p>
          </div>

          <hr />

          <div className="price-details">
            <strong>
              <h1>Payable Amount</h1>
            </strong>
            <strong>
              ${(data?.servicePrice + data?.servicePrice * 0.28).toFixed(2)}
            </strong>
          </div>

          <hr />
          <button id="submit-form" onClick={checkoutHandle}>
            confirm for Payment
          </button>
        </div>
      </div>
    </>
  );
}
