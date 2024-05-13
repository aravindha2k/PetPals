import React from 'react';
import { Container, Heading, Text, Flex, Box, Image, Button, useColorMode } from '@chakra-ui/react';

const AboutPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Container maxW="xl" mt={8}>
        <Heading as="h1" mb={4} textAlign="center" color="teal.500">
          About Pet Pals
        </Heading>
        <Text fontSize="xl" mb={6} textAlign="center" color="gray.700">
          Welcome to Pet Pals, your one-stop destination for all things pet-related!
        </Text>
        <Flex flexDirection={['column', 'column', 'row']} alignItems="center" justifyContent="center" mb={8}>
          <Box maxW="sm" textAlign="justify" flex="1" mr={[0, 0, 8]} mb={[4, 4, 0]}>
            <Text fontSize="lg" mb={4} color="teal.500">
              Our Mission:
            </Text>
            <Text color="gray.700">
              At Pet Pals, we are dedicated to connecting homeless pets with loving families. We believe that every pet deserves a safe and happy home, and we work tirelessly to make that happen.
            </Text>
          </Box>
          <Box maxW="sm" textAlign="justify" flex="1" ml={[0, 0, 8]}>
            <Text fontSize="lg" mb={4} color="teal.500">
              Our Services:
            </Text>
            <Text color="gray.700">
              In addition to facilitating pet adoptions, Pet Pals offers a range of services to ensure your furry friends are well-cared for. From pet grooming and sitting to dog walking and veterinary care, we've got you covered!
            </Text>
          </Box>
        </Flex>
        <Text fontSize="xl" mb={6} textAlign="center" color="teal.500">
          Join us in making a difference in the lives of pets. Adopt, care, and cherish your loyal companions with Pet Pals today!
        </Text>
        {/* <Flex alignItems="center" justifyContent="center">
          <Button colorScheme="teal" onClick={toggleColorMode} mr={4}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Flex> */}
      </Container>
    </Box>
  );
};

export default AboutPage;
