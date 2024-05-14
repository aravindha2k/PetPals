import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Center, Flex, Spinner, Stack, Text } from '@chakra-ui/react'
import { fetchPets } from "../../redux/actions/actions"
import PetCard from "./PetCard"
import '../../Pages/styles/petsList.css'

const PetsList = ()=>{
  const initialState = {
    gender: '',
    color: [],
    age: [],
    species: ''
  }
  const[filters, setFilters] =  useState(initialState)
  const dispatch = useDispatch()
  const {loading, pets, error} = useSelector(state => state.pets)
  const[page, setPage] = useState(1)
  const per_page = 6
  const MAX_DESCRIPTION_LENGTH = 40;

  // console.log(filters);
  useEffect(()=>{
    dispatch(fetchPets (filters))
  },[dispatch, filters])

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

  const handleGenderChange = (gender) => {
    setFilters({ ...filters, gender: gender });
  };

  const handleColorChange = (color) => {
    const updatedColor = filters.color.includes(color)
        ? filters.color.filter((c) => c !== color)
        : [...filters.color, color];
    setFilters({ ...filters, color: updatedColor });
  };

  const handleAgeChange = (size) => {
    const updatedSize = filters.age.includes(size)
        ? filters.age.filter((s) => s !== size)
        : [...filters.age, size];
    setFilters({ ...filters, age: updatedSize });
  };

  const handleSpeciesChange = (species) => {
    setFilters({ ...filters, species: species });
  };

  const handlefilterReset = () => {
      setFilters(initialState);
  }

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
    <div className='petsContainer'>
      <div className='filterSection'>
        <div className="filter-item">
            <p>Species</p>
            <div className="filter-in">
              <label>
                <input type="checkbox" checked={filters.species === 'dog'} onChange={() => handleSpeciesChange('dog')} />
                Dogs
              </label>
              <br />
              <label>
                <input type="checkbox" checked={filters.species === 'cat'} onChange={() => handleSpeciesChange('cat')} />
                Cats
              </label>
              <br />
              <label>
                <input type="checkbox" checked={filters.species === 'rabbit'} onChange={() => handleSpeciesChange('rabbit')} />
                Rabbits
              </label>
              <br />
              <label>
                <input type="checkbox" checked={filters.species === 'bird'} onChange={() => handleSpeciesChange('bird')} />
                Birds
              </label>
            </div>
          </div>
          <div className="hr"></div>
          <div className="filter-item">
            <p>Gender</p>
            <div className="filter-in">
              <label>
                <input type="checkbox" checked={filters.gender === 'male'} onChange={() => handleGenderChange('male')} />
                Male
              </label>
              <br />
              <label>
                <input type="checkbox" checked={filters.gender === 'female'} onChange={() => handleGenderChange('female')} />
                Female
              </label>
            </div>
          </div>
          <div className="hr"></div>
          <div className="filter-item">
            <p>Color</p>
            <div className="filter-in">
              <label>
                <input type="checkbox" checked={filters.color.includes('black')} onChange={() => handleColorChange('black')} />
                Black
              </label>
              <br />
              <label>
                <input type="checkbox" checked={filters.color.includes('brown')} onChange={() => handleColorChange('brown')} />
                Brown
              </label>
              <br />
              <label>
                <input type="checkbox" checked={filters.color.includes('grey')} onChange={() => handleColorChange('grey')} />
                Grey
              </label>
            </div>
          </div>
          <div className="hr"></div>
          <div className="filter-item">
            <p>Age</p>
            <div className="filter-in">
              <label>
                <input type="checkbox" checked={filters.age.includes('puppy')} onChange={() => handleAgeChange('puppy')} />
                puppy
              </label>
              <br />
              <label>
                <input type="checkbox" checked={filters.age.includes('young')} onChange={() => handleAgeChange('young')} />
                young
              </label>
              <br />
              <label>
                <input type="checkbox" checked={filters.age.includes('adult')} onChange={() => handleAgeChange('adult')} />
                Adult
              </label>
            </div>
          </div>
          <div className="hr"></div>
          <div className="filter-item">
            <button onClick={handlefilterReset}>Reset Filter</button>
          </div>
        </div>
      <div className='petsListSection' >
        <Flex mt="4" justifyContent="center">
            {Array.from(
              { length: Math.ceil(pets.length / per_page) },
              (_, index) => (
                <Button
                  size={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg'}}
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
      </div>
    </div>
    </>
  )
}

export default PetsList