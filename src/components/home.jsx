import React from 'react';
import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  Flex,
} from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
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
        pb={28}
        textColor="white"
        pos="absolute"
        top={{ base: '15', lg: '28' }}
        left={{ base: '', lg: '6' }}
      >
        <Heading
          m={3}
          p={4}
          textAlign={{ base: 'center', lg: 'left' }}
          fontSize={{ base: '5xl', lg: '7xl' }}
          fontWeight={{ base: 'bold', lg: 'black' }}
          width="80%"
        >
          Build Wealth On Your Terms
        </Heading>
        <Text
          m={3}
          p={4}
          textAlign={{ base: 'center', lg: 'left' }}
          fontSize={{ base: '2xl', lg: '3xl' }}
          fontWeight={{ base: 'bold', lg: 'black' }}
          letterSpacing="wide"
        >
          We are committed to helping you set and clarify your financial goals.
        </Text>
      </Box>
      <Flex
        m={3}
        p={3}
        textColor="white"
        pos="absolute"
        top={{ base: '96', lg: '28' }}
        left={{ base: '6', lg: '6' }}
      >
        <Button
          mx={2}
          bg="transparent"
          variant="outline"
          borderRadius="50%"
          height="50px"
          width="50px"
          _hover={{ bg: 'gunmetal' }}
        >
          <ArrowDownIcon color="white" _hover={{ color: 'gunmetal' }} />
        </Button>
        <Text
          mx={2}
          my={3}
        >
          Let&apos;s Get Started
        </Text>
      </Flex>
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
