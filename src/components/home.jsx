/* eslint-disable max-len */
import React from 'react';
import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  Grid,
  GridItem,
  List,
  ListItem,
  Link,
  Flex,
  Img,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import coverImage from '../assets/skyscraper2.jpg';
import bgsvg from '../assets/ColoredShapes.svg';
import finegal from '../assets/blondesmilephone.jpg';
import banker from '../assets/banker.jpg';
import elder from '../assets/elder-couple1.jpg';

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
        <Link as={RouterLink} to="/login">
          <Flex
            m={3}
            p={3}
            textColor="white"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            justifyContent={{ base: 'center', lg: 'left' }}
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
              fontFamily="Space Grotesk"
              fontSize="18px"
            >
              Let&apos;s Get Started
            </Text>
          </Flex>
        </Link>
      </Box>
    </Box>
    <Box
      bgImage={bgsvg}
      w="100%"
      height="fit-content"
      fontFamily="Space Grotesk"
      lineHeight="1.43"
      fontSize="18px"
    >
      <Grid
        h="100%"
        w="100%"
        p={{ base: 8, lg: 12 }}
        templateRows={{ base: 'auto', md: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' }}
        templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
        gap={6}
      >
        <GridItem
          colSpan={2}
          bg="transparent"
          // borderRadius={21}
          w="100%"
          h="fit-content"
          // p={12}
          pt={4}
        >
          <Img
            src={elder}
            width="100%"
            height={{ base: 'auto', md: 'calc(45vw * 2/3)' }}
            m={{ base: '0 auto', md: '3 3', lg: '' }}
            mb={3}
            borderRadius={5}
          />
          <Box color="white" p={4}>
            <h2>TAKE YOUR SAVINGS TO THE NEXT LEVEL</h2>
            <Text py={4}>Now offering higher rate with minimum new deposit of $25,000 for Private Banking Customers. Ready to take the first steps towards financial freedom?</Text>
            <Button
              mx="auto"
              bg="applegreen"
              borderRadius="20px"
              height="auto"
              width="100%"
              color="white"
              p={3}
              _hover={{ bg: 'applegreen', color: 'black' }}
            >
              OPEN AN ACCOUNT
            </Button>
          </Box>
        </GridItem>
        <GridItem
          colSpan={2}
          bg="transparent"
          // borderRadius={21}
          w="100%"
          pt={4}
          // h="fit-content"
          // padding={12}
        >
          <Img
            src={banker}
            width="100%"
            height={{ base: 'auto', md: 'calc(45vw * 2/3)' }}
            m={{ base: '0 auto', md: '3 3', lg: '' }}
            mb={3}
            borderRadius={5}
          />
          <Box color="white" p={4}>
            <h2>SET AMBITIOUS GOALS. WE WILL MAKE IT WORK.</h2>
            <Text py={4}>
              Choose from a range of Investment Portfolios designed for everyone. Our investor-owned structure keeps us focused on your needs.
              {/* Explore ways the Team at GT Savings Bank can help with setting and prioritizing your financial goals. */}
            </Text>
            <Button
              bg="applegreen"
              alignItems="center"
              borderRadius="20px"
              height="auto"
              width="100%"
              color="white"
              p={3}
              _hover={{ bg: 'applegreen', color: 'black' }}
            >
              VIEW INVESTMENT OPTIONS
            </Button>
          </Box>
        </GridItem>
        <GridItem
          colSpan={{ base: '2', md: '4' }}
          rowSpan={4}
          bg="navyblue"
          borderRadius="xl"
          padding={{ base: '12', md: '', slg: '0' }}
          h="fit-content"
          color="white"
        >
          <Flex w="100%" justifyContent="space-between">
            <Box p={6} flexBasis={{ base: 'auto', slg: '49%' }}>
              <Box m={{ base: '0 auto', slg: '0' }} textAlign={{ base: 'center', slg: 'left' }}>
                <Text fontSize={{ base: '25px', slg: '28px' }} fontWeight="800" fontFamily="Allerta Stencil" textTransform="uppercase" textAlign={{ slg: 'center' }} mb={2}>We Make Banking Easy!</Text>
                <Img
                  src={finegal}
                  width={44}
                  height={44}
                  borderRadius="50%"
                  m={{ base: '0 auto', md: '3 3', lg: '' }}
                  mb={3}
                  display={{ base: '', slg: 'none' }}
                />
                <Text fontSize="18px" fontWeight="normal" lineHeight="1.42" py={5}>From opening an account online to applying for a mortgage, loan, or making investments, we make banking easy!</Text>
              </Box>
              <List spacing={8} p="0" m={{ base: '', slg: '' }} w={{ base: 'auto', slg: '45%' }} fontFamily="Space Grotesk" textAlign={{ base: 'center', slg: 'left' }} fontWeight="bold">
                <ListItem>
                  <Link href="/account">
                    {' '}
                    <ArrowForwardIcon ml={4} />
                    {' '}
                    Open Account
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/account">
                    {' '}
                    <ArrowForwardIcon ml={4} />
                    {' '}
                    Savings
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/investment">
                    {' '}
                    <ArrowForwardIcon ml={4} />
                    {' '}
                    Investment
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/mortgages">
                    {' '}
                    <ArrowForwardIcon ml={4} />
                    {' '}
                    Mortgages
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/investment">
                    {' '}
                    <ArrowForwardIcon ml={4} />
                    {' '}
                    Loans
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Img
              src={finegal}
              width="calc(65vw * 2/3)"
              objectFit="cover"
              borderRadius="xl"
              m={{
                base: '0 auto', md: '3 3', lg: '', slg: '0',
              }}
              p={0}
              mb={{ base: '3', slg: '0' }}
              display={{ base: 'none', slg: 'block' }}
            />
          </Flex>
        </GridItem>
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
  </>
);

export default Home;
