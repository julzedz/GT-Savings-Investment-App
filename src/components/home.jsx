import React from 'react';
import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  Grid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import coverImage from '../assets/skyscraper2.jpg';
import bgsvg from '../assets/ColoredShapes.svg';

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
        left={{ base: 'auto', lg: '6' }}
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
          // color="applegreen"
        >
          We are committed to helping you set and clarify your financial goals.
        </Text>
        <Flex
          as="Button"
          m={3}
          p={3}
          textColor="white"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          justifyContent={{ base: 'center', lg: 'center' }}
          alignItems="center"
          width={{ base: '100%', lg: 'auto' }}
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
      bgImage={bgsvg}
      w="100%"
      height="7xl"
    >
      <Grid
        h="100%"
        w="100%"
        p={{ base: 8, lg: 12 }}
        templateRows={{ base: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' }}
        templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
        gap={10}
      >
        <GridItem
          colSpan={2}
          bg="papayawhip"
          borderRadius={21}
          w="100%"
          p={12}
        >
          <Box>
            Hello World
          </Box>
          <Box>
            Hello World
          </Box>
          <Box>
            <h3>TAKE YOUR SAVINGS TO THE NEXT LEVEL</h3>
            <Text>Now offering higher rate with minimum of $25,000 for Customers.</Text>
            <Button
              mx={2}
              bg="gunmetal"
              borderRadius="20px"
              height="auto"
              width="auto"
              color="white"
              p={3}
              _hover={{ bg: 'applegreen', color: 'black' }}
            >
              OPEN ACCOUNT
            </Button>
          </Box>
        </GridItem>
        <GridItem
          colSpan={2}
          bg="papayawhip"
          borderRadius={21}
          w="100%"
        />
        <GridItem
          colSpan={{ base: '2', md: '4' }}
          rowSpan={4}
          bg="tomato"
          borderRadius={21}
        />
      </Grid>
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
