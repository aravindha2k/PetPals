// import React, { useEffect, useState } from 'react'
// // import axios from "axios"
// import { useDispatch, useSelector } from 'react-redux'
// import { Box, Button, Center, Flex, Spinner, Stack, Text } from '@chakra-ui/react'
// import { fetchPets } from '../redux/actions/actions'

// const Pets = ()=>{
//   const dispatch = useDispatch()
//   const {loading, pets, error} = useSelector(state => state.pets)
//   const[page, setPage] = useState(1)
//   const per_page = 8

//   useEffect(()=>{
//     dispatch(fetchPets())
//   },[])

//   const paginate = (pageNumber) => {
//     setPage(pageNumber);
//   };

//   const indexOfLastProduct = page * per_page;
//   const indexOfFirstProduct = indexOfLastProduct - per_page;
//   const currentPets = pets.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   // if(loading){
//   //   return <Spinner />
//   // }

//   if(error){
//     return <Text color="red">{error}</Text>
//   }

//   return(
//     <>
//     <Flex mt="4" justifyContent="center">
//         <Text fontSize="20px" p={1} fontWeight="bold">Pages : </Text>
//         {Array.from(
//           { length: Math.ceil(pets.length / per_page) },
//           (_, index) => (
//             <Button
//               key={index}
//               mr="2"
//               colorScheme={page === index + 1 ? "blue" : "gray"}
//               onClick={() => paginate(index + 1)}
//             >
//               {index + 1}
//             </Button>
//           )
//         )}
//       </Flex>
//       {loading? (
//         <Center h="300px">
//           <Box>
//             <Spinner size="xl" color="blue" />
//           </Box>
//         </Center>
//       ):(
//         <Stack direction={["row"]} flexWrap="wrap" justifyContent={'center'} spacing="24px">
//           {currentPets.map((pet) => (
//             <PetCard
//               key={pet._id}
//               pet={pet}
//               truncateDescription={truncateDescription}
//               truncateTitle={truncateTitle}
//             />
//           ))}
//         </Stack>
//       )}
    
//     </>
//   )
// }

// const Pets = () => {
//   const[pets, setPets] = useState([])

//   const fetchData = async(url)=>{
//     try {
//       const res = await axios (url)
//       // console.log(res.data.data);
//       setPets(res.data.data)
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(()=>{
//     fetchData("http://localhost:3000/pet/data")
//   },[])

//   return (
//     <>
//     <div>Pets page</div>
//     {pets.map((pet)=>{
//       return <h2 key={pet._id}>{pet.name}</h2>
//     })}
//     </>
//   )
// }

import React from 'react'
import PetsList from '../Components/pets/PetsList'

const Pets = () => {
  return (
    <>
    <PetsList/>
    </>
  )
}

export default Pets
