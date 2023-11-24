import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import image from '../assets/skyscraper2.jpg';

const Home = () => (
  <>
    <Box
      position="relative"
      maxW="100%"
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
        src={image}
        alt=""
        width="100%"
      />
    </Box>
    <h1>Dashboard</h1>
  </>
);

export default Home;
