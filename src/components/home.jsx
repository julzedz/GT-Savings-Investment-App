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
        inset="0 0 auto auto"
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
        left={{ base: 'center', lg: '6' }}
      >
        <Heading
          m={3}
          p={4}
          textAlign={{ base: 'center', lg: 'left' }}
          fontSize={{ base: '5xl', lg: '7xl' }}
          fontWeight={{ base: 'bold', lg: 'black' }}
          width={{ base: '100%', lg: '80%' }}
        >
          Build Wealth On Your Terms
        </Heading>
        <Text
          m={3}
          p={4}
          mb={44}
          textAlign={{ base: 'center', lg: 'left' }}
          fontSize={{ base: '2xl', lg: '3xl' }}
          fontWeight={{ base: 'bold', lg: 'black' }}
          letterSpacing="wide"
        >
          We are committed to helping you set and clarify your financial goals.
        </Text>
        <Flex
          as="Button"
          m={3}
          p={3}
          textColor="white"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        >
          <Button
            mx={2}
            bg="transparent"
            variant="outline"
            borderRadius="50%"
            height="60px"
            width="60px"
            _hover={{ bg: 'applegreen' }}
          >
            <ArrowDownIcon color="white" _hover={{ color: 'gunmetal' }} />
          </Button>
          <Text
            mx={2}
            my={3}
            fontFamily="Menlo"
            fontSize="lg"
          >
            Let&apos;s Get Started
          </Text>
        </Flex>
      </Box>
    </Box>
    <Box
      bg=""
    >
      Dashboard
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
  </>
);

export default Home;
