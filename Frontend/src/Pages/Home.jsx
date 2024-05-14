


import { useNavigate } from 'react-router-dom';
import CatSection from '../AllCard/CatSection/CatSection'
import DogSection from '../AllCard/DogSection/DogSection'
import { Container, Box, Heading, Text, Button, Grid, GridItem } from '@chakra-ui/react'; // Import Chakra UI components for layout and styling


const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="parent" style={{backgroundColor : "rgb(208,219,231)"}}>
    {/* <div className="div1" >
     <img className="h-1/2" style={{opacity: "0.8"}} src="https://dm6g3jbka53hp.cloudfront.net/static-images/pet-banner-tpn-27042024-v2.jpg" alt="" />
     
    </div> */}
    <div className="relative div1">
    <img
        className="h-1/2"
        src="https://dm6g3jbka53hp.cloudfront.net/static-images/pet-banner-tpn-27042024-v2.jpg"
        alt=""
    />
    
</div>

    <Container maxW="container.lg" mt={10} mb={5}>
      <Box textAlign="center">
        <Heading as="h1" size="xl">Welcome to PetPals!</Heading>
        <Text fontSize="xl" mt={4}>
          At PetPals, we're dedicated to connecting you with your perfect furry friend and providing top-notch pet services.
        </Text>
      </Box>
      <hr />
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} mt={10}>
        <GridItem>
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Heading as="h2" size="lg">Our Services</Heading>
            <Text fontSize="lg" mt={4}>
              - Pet Adoption <br />
              - Pet Grooming <br />
              - Pet Sitting <br />
              - Dog Walking <br />
              - Veterinary Care
            </Text>
            <Button colorScheme="blue" mt={4} onClick={()=> navigate("/Services")}>Learn More</Button>
          </Box>
        </GridItem>
        <GridItem>
          <Box textAlign={{ base: 'center', md: 'right' }}>
            <Heading as="h2" size="lg">Why Choose PetPals?</Heading>
            <Text fontSize="lg" mt={4}>
              - Expertise <br />
              - Convenience <br />
              - Peace of Mind
            </Text>
            <Button colorScheme="green" mt={4} onClick={()=> navigate("/about")}>Get Started</Button>
          </Box>
        </GridItem>
      </Grid>
    </Container>
    <div className="div2">
      <CatSection />
    </div>
    <div className="div3">
      <DogSection />
    </div>
    
  </div>
    
    
  )
}

export default Home
