import {
  SimpleGrid,
  CardHeader,
  Image,
  Card,
  Heading,
  Text,
  Button,
  CardBody,
  CardFooter,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./styles/servicePage.css"

import { useEffect, useState } from "react";

export function Services() {

  const [services, setService] = useState([]);
  const [page, setPage] = useState(1);
  const per_page = 9;
  const MAX_DESCRIPTION_LENGTH = 40;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/service/services");
        const data = await res.json();
        setService(data.items);
        console.log(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const handleNavigate = (id) => {
    navigate(`/detailsPage/${id}`);
  }
  

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

  const indexOfLastProduct = page * per_page;
  const indexOfFirstProduct = indexOfLastProduct - per_page;
  const currentService = services.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const truncateDescription = (description) => {
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      return description.slice(0, MAX_DESCRIPTION_LENGTH) + "...";
    }
    return description;
  };

  return (
    <>
      {/* <Stack bg='rgb(208,219,231)'> */}
      <Stack bg="hsl(212,28%,24%)">
        {/* <Flex mt="4" justifyContent="center"> */}
          {/* <Text fontSize="20px" p={1} fontWeight="bold">Pages : </Text> */}
          {/* <Text fontSize="20px" p={1} fontWeight="bold"> */}
            {/* {" "} */}
          {/* </Text> */}
          {/* {Array.from( */}
            {/* { length: Math.ceil(services.length / per_page) }, */}
            {/* (_, index) => ( */}
              {/* <Button */}
                {/* key={index} */}
                {/* mr="2" */}
                {/* colorScheme={page === index + 1 ? "blue" : "gray"} */}
                {/* onClick={() => paginate(index + 1)} */}
              {/* > */}
                {/* {index + 1} */}
              {/* </Button> */}
            {/* ) */}
          {/* )} */}
        {/* </Flex> */}


        <Flex pb="30px" mt="4" justifyContent="center">
          <Text fontSize="20px" p={1} fontWeight="bold"></Text>
          {Array.from(
            { length: Math.ceil(services.length / per_page) },
            (_, index) => (
              <Button
                key={index}
                mr="2"
                bg={page === index + 1 ? "hsl(210,31%,48%)": "white"}
                _hover={page === index + 1 ? "hsl(213,32%,29%)": "white"}
                color={page === index + 1 ? "rgb(245,247,250)" : "black"}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Button>
            )
          )}
        </Flex>
        <SimpleGrid
          p="30px" mt='-40px'
          spacing={6}
          templateColumns="repeat(auto-fill, minmax(340px, 1fr))"
        >
          {currentService.map((service) => (
            <Card
              key={service._id}
              bg="hsl(220,13%,18%)"
              boxShadow="0px 2px 5px -1px rgba(255, 255, 255, 0.25), 0px 1px 3px -1px rgba(255, 255, 255, 0.3)"
              //  borderWidth="1px"
              // overflow="hidden"
              borderRadius="20px"
              truncateDescription={truncateDescription}
              h="510px"
              w="400px"
            >
              <CardHeader>
                <Image
                  borderRadius="20px"
                  h="250px"
                  w="360px"
                  color='white'
                  src={service.serviceImg}
                  alt={service.serviceName}
                />
              </CardHeader>
              <CardBody>
                <Heading size="md" pb="4px" color="rgb(245,247,250)">
                  {" "}
                  {service.serviceName}
                </Heading>
                <Text color="rgb(245,247,250)">
                  {service.serviceDescription}
                </Text>
                <Text pb="4px" color="rgb(245,247,250)" fontSize="2xl">
                  ${service.servicePrice.toFixed(2)}
                </Text>
                <hr
                  style={{
                    backgroundColor: "black",
                    border: "0.5px solid black",
                  }}
                />
              </CardBody>
              <CardFooter mt="-20px">
                <Button
                onClick={()=>{
                handleNavigate(service._id)}}
                  w="100%"
                  borderRadius="10px"
                  color="rgb(245,247,250)"
                  bg="hsl(210,31%,48%)"
                  _hover={{ bg: "hsl(213,32%,29%)" }}
                >
                  Confirm for Payment
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
        <Flex pb="30px" mt="-4" justifyContent="center">
          <Text fontSize="20px" p={1} fontWeight="bold"></Text>
          {Array.from(
            { length: Math.ceil(services.length / per_page) },
            (_, index) => (
              <Button
                key={index}
                mr="2"
                bg={page === index + 1 ? "hsl(210,31%,48%)": "white"}
                _hover={page === index + 1 ? "hsl(213,32%,29%)": "white"}
                color={page === index + 1 ? "rgb(245,247,250)" : "black"}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Button>
            )
          )}
        </Flex>
      </Stack>
    </>
  );
}
