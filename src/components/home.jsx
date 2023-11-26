import React from 'react';
import {
  Box,
  Text,
  Heading,
  Image,
} from '@chakra-ui/react';
import coverImage from '../assets/skyscraper2.jpg';

const Home = () => (
  <>
    <Box
      position="relative"
      mt={{ base: 16, lg: 0 }}
      height={{ base: 'auto', lg: '3xl' }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgGradient="linear(to-l, #0003, #000)"
      />
      <Image
        src={coverImage}
        alt=""
        width="100%"
        height={{ base: '2xl', lg: '3xl' }}
      />
      <Box
        m={3}
        p={3}
        textColor="white"
        pos="absolute"
        top={{ base: '15', lg: '28' }}
        left={{ base: '', lg: '6' }}
      >
        <Heading
          m={3}
          p={4}
          textAlign={{ base: 'center', lg: 'auto' }}
          fontSize={{ base: '5xl', lg: '7xl' }}
          fontWeight={{ base: 'bold', lg: 'black' }}
        >
          Build Wealth On Your Terms
        </Heading>
        <Text>We are committed to helping you set and clarify your financial goals.</Text>
      </Box>
    </Box>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
  </>
);

export default Home;
