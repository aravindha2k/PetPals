import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSinglePets } from '../../redux/actions/actions';
import { Box, Heading, Text, Image, Center, Spinner, Badge, Flex, Icon, Button } from '@chakra-ui/react';
import { FaDog } from 'react-icons/fa';

const SinglePetCard = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, pets, error } = useSelector(state => state.pets);

    useEffect(() => {
        dispatch(fetchSinglePets(id));
    }, []);

    const handleAdoptClick = ()=>{
        
    }

    if (error) {
        return (
            <Center>
                <Text color="red" fontSize={{ base: "xs", sm: "sm", md: "md" }} mt={2}>
                    {error}
                </Text>
            </Center>
        );
    }

    return (
        <>
            {loading ? (
                <Center h="300px">
                    <Spinner size="xl" color="blue" />
                </Center>
            ) : (
                <>
                    {pets.map((pet) => (
                        <Center key={pet._id}>
                            <Box mt={10} maxW={{ base: "90%", sm: "80%", md: "80%", lg: "70%" }} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg" >
                                <Center>
                                    <Image src={pet.image} alt={pet.name} borderRadius="md" boxSize={{ base: "150px", sm: "200px", md: "250px" }} />
                                </Center>
                                <Flex direction={{ base: 'column', md: 'row' }}>
                                    <Box flex={1} pr={{ base: 0, md: 5 }}> {/* Left column */}
                                        <Box mt={{ base: 5, md: 0 }}>
                                            <Heading size="xl">Name: {pet.name}</Heading>
                                            <Text fontSize={{ base: "sm", sm: "sm", md: "md" ,lg:"lg"}} color="gray.600" mt={2}>
                                                Species: <Icon as={FaDog} color="orange.400" /> {pet.species}
                                            </Text>
                                            <Text fontSize={{ base: "sm", sm: "sm", md: "md" ,lg:"lg"}} color="gray.600" mt={2}>
                                                Breed: {pet.breed}
                                            </Text>
                                            <Text fontSize={{ base: "sm", sm: "sm", md: "md" ,lg:"lg"}} color="gray.600" mt={2}>
                                                Gender: {pet.gender}
                                            </Text>
                                            <Text fontSize={{ base: "sm", sm: "sm", md: "md" ,lg:"lg"}} color="gray.600" mt={2}>
                                                Age: {pet.age}
                                            </Text>
                                            <Text fontSize={{ base: "sm", sm: "sm", md: "md" ,lg:"lg"}} color="gray.600" mt={2}>
                                                Color: {pet.color}
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Box mt={{ base: 5, md: 3 }} flex={1} pl={{ base: 0, md: 5 }}> {/* Right column */}
                                        <Heading size="md" mt={{ base: 5, md: 0 }}>
                                            About {pet.name}
                                        </Heading>
                                        <Text fontSize={{ base: "sm", sm: "sm", md: "md" ,lg:"lg"}} color="gray.600" mt={2}>
                                            {pet.about}
                                        </Text>
                                        <Heading size="md" mt={5}>
                                            Favorite activities of {pet.name}
                                        </Heading>
                                        <Flex mt={2} flexWrap="wrap">
                                            {pet.favorite_activities.map((activity, index) => (
                                                <Badge key={index} colorScheme="teal" mr={2} mb={2}>
                                                    {activity}
                                                </Badge>
                                            ))}
                                        </Flex>
                                        <Button colorScheme="blue" 
                                        color = "black" 
                                        _hover={{bgColor : "blue.700", color : "aliceblue"}}
                                        mt={4} 
                                        onClick={handleAdoptClick}
                                        >
                                            Adopt {pet.name}
                                        </Button>
                                    </Box>
                                </Flex>
                            </Box>
                        </Center>
                    ))}
                </>
            )}
        </>
    );
};

export default SinglePetCard;
