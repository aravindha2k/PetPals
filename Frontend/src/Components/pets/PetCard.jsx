import { Box, Button, Card, Center, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBagShopping, faCartShopping, faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";

const petCard = ({pet, truncateDescription}) => {
  return (
    <Box
      width={{ base: "100%", sm: "43%", md: "47%", lg: "31%" }}
      padding="10px"
      marginBottom="10px"
      fontFamily={"Playfair Display"}
    >
      <Card p={3} height="100%">
        <Flex direction={["column"]} height="40%">
          <Image
            src={pet.image}
            height="100px"
            objectFit="contain"
            // onClick={handleProductClick}
          />
          <Box p={2}>
            <Center>
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
                // onClick={handleProductClick}
              >
                {pet.name}
              </Heading>
            </Center>
            <Text fontSize={{ base: "xs", sm: "sm", md: "md" }} mt={2}>
              {truncateDescription(pet.about)}
            </Text>
            {/* <Center mt={2}>
              {[...Array(4)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  style={{ color: "#FFD43B" }}
                />
              ))}
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#FFD43B" }}
              />
            </Center> */}
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text mt={2} color="blue.500">
                {" "}
                <span>&#36; </span>
                {pet.price}
              </Text>
              <Text
                mt={{ base: 2, sm: 1 }}
                textAlign={{ base: "center", sm: "left" }}
              >
                Species:  {pet.species}
              </Text>
              <Text
                mt={{ base: 2, sm: 0 }}
                textAlign={{ base: "center", sm: "right" }}
              >
                Gender: {pet.gender}
              </Text>
              <Text
                mt={{ base: 2, sm: 0 }}
                textAlign={{ base: "center", sm: "right" }}
              >
                Age: {pet.age}
              </Text>
            </Flex>
          </Box>
          <Divider />
          <Flex
            p={2}
            direction={{ sm: "column", md: "row", lg: "row" }}
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Button
              colorScheme="aliceblue"
              color = "black"
              bgColor={"blue.500"}
              _hover={{bgColor : "yellow.600", color : "aliceblue"}}
              border = {"1px solid yellowgreen"}
              flex={{ base: "100%", sm: "1" }}
              margin={{ base: "5px 0", sm: "5px" }}
              p={{ base: "none", sm: 3 }}
              // onClick={handleCart}
            >
              {/* <FontAwesomeIcon  style={{color: "#FFD43B", marginRight : "5px"}} />  */}
               View More
            </Button>
            <Button
              colorScheme="aliceblue"
              color = "teal"
              _hover={{bgColor : "teal", color : "aliceblue"}}
              border = {"1px solid teal"}
              flex={{ base: "100%", sm: "1" }}
              margin={{ base: "5px 0", sm: "5px" }}
              p={{ base: "none", sm: 3 }}
              // onClick={handleBuy}
            >
              {/* <FontAwesomeIcon  style={{color: "#63E6BE", marginRight : "5px"}} />  */}
              Adpot Pet
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Box>
  )
}

export default petCard