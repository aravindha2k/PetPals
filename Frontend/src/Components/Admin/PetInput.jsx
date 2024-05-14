import { Box, Button, Input, Textarea, useToast, Flex, Spacer, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

// import { ProdData } from "../../redux/utils/adminUtils";
// import { addDataProduct } from "../../redux/actions/actionAdmin";
// import { useAppDispatch } from '../../redux/utils/Product_Utils';

const initialState = {
  name: "",
  breed: "",
  gender: "",
  price: "",
  species: "",
  age: "",
  about: "",
  color: "",
  image: "",
  favorite_activities: []
};

const PetInput = () => {
  const [updatePet, setUpdatePet] = useState(initialState);
  const toast = useToast();
  const dispatch = useDispatch();

  const addProduct = () => {
    // dispatch(addDataProduct(updateProduct));
    console.log(updatePet);
    toast({
      title: 'New Product',
      description: `Successfully added ${updatePet.name}`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    setUpdatePet(initialState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'favorite_activities') {
      const activitiesArray = value.split(',');
      setUpdatePet((prev) => ({
        ...prev,
        favorite_activities: activitiesArray,
      }));
    } else {
      setUpdatePet((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <VStack spacing={4} align="stretch">
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={updatePet.name}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="breed"
          placeholder="Enter breed"
          value={updatePet.breed}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="gender"
          placeholder="Enter gender"
          value={updatePet.gender}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="species"
          placeholder="Enter species"
          value={updatePet.species}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="age"
          placeholder="Enter age"
          value={updatePet.age}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="color"
          placeholder="Enter color"
          value={updatePet.color}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="image"
          placeholder="Enter image"
          value={updatePet.image}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="favorite_activities"
          placeholder="Enter favorite_activities"
          value={updatePet.favorite_activities.join(',')}
          onChange={handleInputChange}
        />

        <Textarea
          name="about"
          placeholder="Enter description"
          value={updatePet.about}
          onChange={handleInputChange}
          resize="vertical"
        />
        <Button onClick={addProduct} colorScheme="blue" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Add Pet
        </Button>
      </VStack>
    </Box>
  );
};

export { PetInput };