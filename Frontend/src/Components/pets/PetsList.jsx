import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Center, Flex, Spinner, Stack, Text } from '@chakra-ui/react'
import { fetchPets } from "../../redux/actions/actions"
import PetCard from "./PetCard"

const PetsList = ()=>{
  const dispatch = useDispatch()
  const {loading, pets, error} = useSelector(state => state.pets)
  const[page, setPage] = useState(1)
  const per_page = 8
  const MAX_DESCRIPTION_LENGTH = 40;

  useEffect(()=>{
    dispatch(fetchPets ())
  },[])

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

  const indexOfLastProduct = page * per_page;
  const indexOfFirstProduct = indexOfLastProduct - per_page;
  const currentPets = pets.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
 
  const truncateDescription = (description)=> {
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      return description.slice(0, MAX_DESCRIPTION_LENGTH) + "...";
    }
    return description;
  };

  if(error){
    return (
      <Center>
        <Text color = "red" fontSize={{ base: "xs", sm: "sm", md: "md" }} mt={2}>
              {error}
        </Text>
      </Center>
    )
  }

  return(
    <>
    <Flex mt="4" justifyContent="center">
        <Text fontSize="20px" p={1} fontWeight="bold">Pages : </Text>
        {Array.from(
          { length: Math.ceil(pets.length / per_page) },
          (_, index) => (
            <Button
              key={index}
              mr="2"
              colorScheme={page === index + 1 ? "blue" : "gray"}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Button>
          )
        )}
      </Flex>
      {loading? (
        <Center h="300px">
          <Box>
            <Spinner size="xl" color="blue" />
          </Box>
        </Center>
      ):(
        <Stack direction={["row"]} flexWrap="wrap" justifyContent={'center'} spacing="24px">
          {currentPets.map((pet) => (
            <PetCard
              key={pet._id}
              pet={pet}
              truncateDescription={truncateDescription}
            />
          ))}
        </Stack>
      )}
    </>
  )
}

export default PetsList