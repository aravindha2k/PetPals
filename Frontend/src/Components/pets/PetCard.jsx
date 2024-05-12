import { Box, Button, Card, Center, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBagShopping, faCartShopping, faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";

const petCard = ({pet, truncateDescription}) => {
  const navigate = useNavigate()

  const handlePetClick = ()=>{
    navigate(`/pets/${pet._id}`)
  }

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
            height="130px"
            objectFit="contain"
            onClick={handlePetClick}
          />
          <Box p={2}>
            <Center>
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
                onClick={handlePetClick}
              >
                {pet.name}
              </Heading>
            </Center>
            <Text fontSize={{ base: "xs", sm: "sm", md: "md" }} mt={2}>
              {truncateDescription(pet.about)}
            </Text>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="space-between"
            >
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
              colorScheme="blue"
              color = "black"
              // bgColor={"blue.500"}
              _hover={{bgColor : "blue.700", color : "aliceblue"}}
              border = {"1px solid yellowgreen"}
              flex={{ base: "100%", sm: "1" }}
              margin={{ base: "5px 0", sm: "5px" }}
              p={{ base: "none", sm: 3 }}
               onClick={handlePetClick}
            >
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
              Adpot Pet
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Box>
  )
}

export default petCard