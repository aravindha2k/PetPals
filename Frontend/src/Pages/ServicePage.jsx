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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Services() {
  const [services, setService] = useState([]);

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

  return (
    <>
      <SimpleGrid
        p="40px"
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(340px, 1fr))"
      >
        {services.map((service) => (
          <Card key={service._id}>
            <CardHeader>
              <Image
                h="400px"
                w="400px"
                src={service.serviceImg}
                alt={service.serviceName}
                borderRadius="lg"
              />
            </CardHeader>
            <CardBody>
              <Heading size="md" pb="4px">
                {" "}
                {service.serviceName}
              </Heading>
              <Text>{service.serviceDescription}</Text>
              <Text pb="4px" color="blue.600" fontSize="2xl">
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
              <Button w="100%">Confirm for Payment</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
