import React, { useState } from 'react';
import { Container, Heading, Text, Flex, Box, FormControl, FormLabel, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Perform form submission logic here (e.g., send form data to backend, reset form fields)
    // For demonstration purposes, show success toast
    toast({
      title: 'Message Sent Successfully!',
      description: 'Thank you for contacting us. We will get back to you soon.',
      status: 'success',
      duration: 3000, 
      isClosable: true,
    });
    setFormData({ name: '', email: '', message: '' }); 
    navigate("/")
  };

  return (
    <Container maxW="xl" mt={8}>
      <Heading as="h1" mb={4} textAlign="center" color="teal.500">
        Contact Us
      </Heading>
      <Text fontSize="xl" mb={6} textAlign="center" color="gray.700">
        We'd love to hear from you! Get in touch with Pet Pals using the form below.
      </Text>
      <Flex direction="column" alignItems="center">
        <Box maxW="md">
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} />
          </FormControl>
          <Button colorScheme="teal" mb={8} onClick={handleSubmit}>
            Send Message
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default ContactUsPage;
