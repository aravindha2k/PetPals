import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { PetInput } from '../../Components/Admin/PetInput'

const PetsAdmin = () => {
  return (
    <Box p={4}>
      <Heading textAlign={'center'} color={'#637694'} m={5}>Pets</Heading>
      <PetInput/>


    </Box>
  )
}

export default PetsAdmin