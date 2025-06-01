/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
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
  ListIcon,
  UnorderedList,
  Link,
  Flex,
  Img,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  ArrowDownIcon,
  ArrowForwardIcon,
  CheckCircleIcon,
} from '@chakra-ui/icons';
import coverImage from '../assets/skyscraper2.jpg';
import bgsvg from '../assets/ColoredShapes.svg';
import finegal from '../assets/blondesmilephone.jpg';
import banker from '../assets/banker.jpg';
import elder from '../assets/elder-couple1.jpg';
import greycircles from '../assets/Mass Circles.svg';
import meeting from '../assets/meeting.jpg';
import building1 from '../assets/building1.jpg';
import streetfast from '../assets/street-fast-transformed.jpeg';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <Box
          position="relative"
          mt={{ base: 13, lg: 0 }}
          height={{ base: 'auto', lg: '3xl' }}
        >
          <Skeleton height={{ base: '2xl', lg: '3xl' }} width="100%" />
        </Box>
        <Box
          bgImage={bgsvg}
          w="100%"
          height="fit-content"
          fontFamily="Space Grotesk"
        >
          <Grid
            h="100%"
            w="100%"
            p={{ base: 4, sm: 8, lg: 12 }}
            templateRows={{ base: 'auto', lg: 'repeat(2, 1fr)' }}
            templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
            gap={6}
          >
            <GridItem colSpan={2}>
              <Skeleton height="300px" borderRadius={5} mb={3} />
              <Skeleton height="100px" />
            </GridItem>
            <GridItem colSpan={2}>
              <Skeleton height="300px" borderRadius={5} mb={3} />
              <Skeleton height="100px" />
            </GridItem>
            <GridItem colSpan={{ base: '2', md: '4' }}>
              <Skeleton height="400px" borderRadius="xl" />
            </GridItem>
          </Grid>
        </Box>
        <Box bgImage={greycircles} fontSize="18px" fontFamily="newer">
          <Flex
            flexDirection={{ base: 'column', xl: 'row' }}
            width="100%"
            p={8}
            gap={8}
          >
            <Skeleton
              width={{ base: '100%', slg: '60%', xl: '50%' }}
              height={{ base: '300px', lg: '400px' }}
            />
            <Box width="50%">
              <Skeleton height="20px" mb={4} />
              <Skeleton height="40px" mb={8} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
            </Box>
          </Flex>
        </Box>
      </>
    );
  }

  const listItems = [
    { text: 'Open Account', link: '/signup', as: RouterLink },
    { text: 'Savings', link: '/dashboard', as: RouterLink },
    { text: 'Investment', link: '/investment', as: RouterLink },
    { text: 'Mortgages', link: '/mortgages' },
    { text: 'Loans', link: '/investment' },
  ];
  return (
    <>
      <Box
        position="relative"
        mt={{ base: 13, lg: 0 }}
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
            mt={{ base: 12, sm: 3 }}
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
            mb={{ base: 39, sm: 44 }}
            textAlign={{ base: 'center', lg: 'left' }}
            fontSize={{ base: '2xl', lg: '3xl' }}
            fontWeight={{ base: 'bold', lg: 'black' }}
            letterSpacing="wide"
          >
            We are committed to helping you set and clarify your financial
            goals.
          </Text>
          <Link
            href="#signupSection"
            _hover={{ textDecoration: 'none', color: 'applegreen' }}
          >
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
                <ArrowDownIcon
                  boxSize={6}
                  color="white"
                  _hover={{ color: 'gunmetal' }}
                />
              </Button>
              <Text
                mx={{ base: '1', sm: '2' }}
                my={3}
                fontFamily="Space Grotesk"
                fontSize={{ base: '14px', sm: '18px' }}
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
          p={{ base: 4, sm: 8, lg: 12 }}
          templateRows={{ base: 'auto', lg: 'repeat(2, 1fr)' }}
          templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
          gap={6}
        >
          <GridItem
            id="signupSection"
            colSpan={2}
            bg="transparent"
            w="100%"
            h="fit-content"
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
              <Text py={4}>
                With a low minimum deposit required, earn interest at
                competitive rates. Ready to take the first steps towards
                financial freedom?
              </Text>
              <Button
                as={RouterLink}
                to="/signup"
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
          <GridItem colSpan={2} bg="transparent" w="100%" pt={4}>
            <Img
              src={banker}
              width="100%"
              height={{ base: 'auto', md: 'calc(45vw * 2/3)' }}
              m={{ base: '0 auto', md: '3 3', lg: '' }}
              mb={3}
              borderRadius={5}
            />
            <Box color="white" p={4}>
              <h2>SET HIGH GOALS. WE WILL MAKE IT WORK.</h2>
              <Text py={4}>
                Choose from a range of investment portfolios designed for
                everyone. Our investor-owned structure keeps us focused on your
                needs.
              </Text>
              <Button
                as={RouterLink}
                to="/investmentplans"
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
            bg="navyblue"
            borderRadius="xl"
            padding={{ base: '8', md: '', slg: '0' }}
            h="fit-content"
            color="white"
          >
            <Flex w="100%" justifyContent="space-between">
              <Box
                p={{ base: 3, lg: 6 }}
                flexBasis={{ base: 'auto', slg: '49%' }}
              >
                <Box
                  m={{ base: '0 auto', slg: '0' }}
                  textAlign={{ base: 'center', slg: 'left' }}
                >
                  <Text
                    fontSize={{ base: '25px', slg: '28px', xl: '4xl' }}
                    fontWeight="800"
                    fontFamily="newer"
                    textTransform="uppercase"
                    textAlign={{ slg: 'center' }}
                    mb={2}
                  >
                    We Make Banking Easy!
                  </Text>
                  <Img
                    src={finegal}
                    width={44}
                    height={44}
                    borderRadius="50%"
                    m={{ base: '0 auto', md: '3 3', lg: '' }}
                    mb={3}
                    display={{ base: '', slg: 'none' }}
                  />
                  <Text
                    fontSize="18px"
                    fontWeight="normal"
                    lineHeight="1.42"
                    py={5}
                  >
                    From opening an account online to applying for a mortgage,
                    loan, or making investments, we make banking easy!
                  </Text>
                </Box>
                <List
                  spacing={8}
                  p="0"
                  m={{ base: '', slg: '' }}
                  fontFamily="Space Grotesk"
                  textAlign={{ base: 'center', slg: 'left' }}
                  fontWeight="bold"
                >
                  {listItems.map((item) => (
                    <ListItem
                      key={item.text}
                      _hover={{
                        transform: { base: 'none', slg: 'translateX(10px)' },
                        transition: { base: 'none', slg: 'transform 0.2s' },
                      }}
                      w={{ base: 'auto', slg: 'fit-content' }}
                    >
                      <Link
                        as={item.as}
                        _hover={{ textDecoration: 'none' }}
                        to={item.link}
                      >
                        <ArrowForwardIcon
                          mx={4}
                          display={{ base: 'none', slg: 'inline' }}
                        />
                        {item.text}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Img
                src={finegal}
                width="calc(65vw * 2/3)"
                objectFit="cover"
                borderRadius="0 12px 12px 0"
                m={{
                  base: '0 auto',
                  md: '3 3',
                  lg: '',
                  slg: '0',
                }}
                p={0}
                mb={{ base: '3', slg: '0' }}
                display={{ base: 'none', slg: 'block' }}
              />
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Box bgImage={greycircles} fontSize="18px" fontFamily="newer">
        <Flex
          flexDirection={{ base: 'column', xl: 'row' }}
          width="100%"
          p={8}
          gap={8}
        >
          <Img
            src={meeting}
            alt=""
            width={{ base: '100%', slg: '60%', xl: '50%' }}
            height={{ base: 'auto' }}
            m={{ base: 'auto', md: '3 3', lg: '' }}
          />
          <Box textAlign={{ base: 'center', slg: 'left' }}>
            <Text
              fontSize="sm"
              fontFamily="lit"
              fontWeight="thin"
              letterSpacing="widest"
              lineHeight="short"
              textAlign="center"
            >
              WHO WE ARE
            </Text>
            <Text
              my={8}
              fontSize="3xl"
              fontFamily="Fira Sans"
              fontWeight="normal"
              textAlign={{ base: 'center', xl: 'left' }}
            >
              GT Savings Bank is a modern, tech-driven savings and investment
              banking platform.
            </Text>
            <Text letterSpacing="wide">
              GT Savings Bank is a full-service savings and investment banking
              platform for personalized portfolios of choice investment
              opportunities managed by a team of professionals, with tax-smart
              investing techniques.
            </Text>
            <Text letterSpacing="wide">
              Over 300 transactions, representing an aggregate deal value of
              greater than $4.5 billion, have been completed on our platform.
            </Text>
            <Text letterSpacing="wide">
              GT Savings Bank is a member of
              <Box
                display="inline"
                color="cerulean"
                as={RouterLink}
                to="https://www.finra.org/"
              >
                {' '}
                FINRA{' '}
              </Box>
              and
              <Box
                display="inline"
                color="cerulean"
                as={RouterLink}
                to="https://www.sipc.org/"
              >
                {' '}
                SIPC{' '}
              </Box>
              .
            </Text>
            <Text letterSpacing="wide">Our bankers:</Text>
            <UnorderedList letterSpacing="wide">
              <ListItem>
                Build your portfolio, based on an approach you&apos;ve selected
                and your investment preferences.
              </ListItem>
              <ListItem>
                Use fractional shares to build a portfolio which seeks to meet a
                specific investment objective, which will vary by strategy.
              </ListItem>
              <ListItem>
                Keep you informed as to how your account is performing.
              </ListItem>
            </UnorderedList>
            <Text letterSpacing="wide">
              Learn more about us
              <Button
                as={RouterLink}
                to="/aboutx"
                mx={2}
                variant="outline"
                borderRadius="50%"
                colorScheme="cerulean"
                height="50px"
                width="50px"
                _hover={{ bg: 'applegreen' }}
              >
                <ArrowForwardIcon
                  color="gunmetal"
                  boxSize={6}
                  borderColor="gunmetal"
                  _hover={{ color: 'gunmetal' }}
                />
              </Button>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box fontSize="18px" fontFamily="newer">
        <Text
          fontSize="sm"
          fontFamily="lit"
          fontWeight="thin"
          letterSpacing="widest"
          lineHeight="short"
          textAlign="center"
          mt={20}
        >
          WHAT WE DO
        </Text>
        <Text
          my={2}
          fontSize="2xl"
          fontFamily="Fira Sans"
          fontWeight="normal"
          textAlign={{ base: 'center' }}
        >
          Banking Services
        </Text>
        <Flex
          flexDirection={{ base: 'column', slg: 'row' }}
          width="100%"
          p={8}
          gap={8}
        >
          <Img
            src={building1}
            alt=""
            width={{
              base: '80%',
              md: '60%',
              slg: '45%',
              xl: '35%',
            }}
            alignSelf="center"
            height={{ base: 'auto', lg: 'calc(46vw * 2/3)' }}
            objectFit={{ base: 'cover', lg: 'contain' }}
            m={{ base: '0 auto', md: '', lg: '' }}
          />
          <Box
            textAlign={{ base: 'center', slg: 'left' }}
            flexBasis={{ base: 'auto', slg: '48%' }}
            alignSelf="center"
          >
            <Text letterSpacing="wide">
              On the GT Savings Bank platform we help you:
            </Text>
            <List letterSpacing="wide" spacing={4} textAlign="left">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="applegreen" />
                Earn more as you save more with interest that&apos;s compounded
                on your balance
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="applegreen" />
                Build your savings with our competitive annual percentage yields
                (APY) and wide range of term lengths. Start earning more with GT
                Savings Bank
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="applegreen" />
                Secure personal loans for the things you want and need or
                consolidate for lower monthly payments
              </ListItem>
            </List>
            <Text letterSpacing="wide">
              Learn more
              <Button
                as={RouterLink}
                to="/about"
                mx={2}
                variant="outline"
                borderRadius="50%"
                colorScheme="cerulean"
                height="50px"
                width="50px"
                _hover={{ bg: 'applegreen' }}
              >
                <ArrowForwardIcon
                  color="gunmetal"
                  boxSize={6}
                  borderColor="gunmetal"
                  _hover={{ color: 'gunmetal' }}
                />
              </Button>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box fontSize="18px" fontFamily="newer">
        <Text
          fontSize="sm"
          fontFamily="lit"
          fontWeight="thin"
          letterSpacing="widest"
          lineHeight="short"
          textAlign="center"
          mt={20}
        >
          WHAT WE DO
        </Text>
        <Text
          my={2}
          fontSize="2xl"
          fontFamily="Fira Sans"
          fontWeight="normal"
          textAlign={{ base: 'center' }}
        >
          Investment Services
        </Text>
        <Flex
          flexDirection={{ base: 'column', slg: 'row' }}
          width="100%"
          p={8}
          gap={8}
        >
          <Img
            src={streetfast}
            alt=""
            width={{
              base: '80%',
              md: '60%',
              slg: '45%',
              xl: '35%',
            }}
            alignSelf="center"
            height={{ base: 'auto', lg: 'calc(46vw * 2/3)' }}
            objectFit={{ base: 'cover', lg: 'contain' }}
            m={{ base: '0 auto', md: '', lg: '' }}
          />
          <Box
            textAlign={{ base: 'center', slg: 'left' }}
            flexBasis={{ base: 'auto', slg: '48%' }}
            alignSelf="center"
          >
            <Text letterSpacing="wide">
              Our team of experts help invest your savings in real estate,
              private equity, highly-rated S&P 500 company stocks, including
              corporate and sovereign debt, equities, currencies, and various
              derivatives. Many qualities sets our institution apart including:
            </Text>
            <List letterSpacing="wide" spacing={4} textAlign="left">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="applegreen" />
                We help you build a robust portfolio for superior risk-adjusted
                returns and enhanced investment performance
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="applegreen" />A track
                record of strong investment returns - We publish returns on each
                of our matured investment. More than $300 million since
                inception
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="applegreen" />
                Our team of 25+ investment professionals analyse billions of
                dollars in deals each year - approving less than 10% of all
                opportunities they evaluate
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="applegreen" />
                Rolling your maturing investments directly into new
                opportunities by compounding your interests to maximize returns
              </ListItem>
            </List>
            <Text letterSpacing="wide">
              Learn more
              <Button
                as={RouterLink}
                to="/investmentplans"
                mx={2}
                variant="outline"
                borderRadius="50%"
                colorScheme="cerulean"
                height="50px"
                width="50px"
                _hover={{ bg: 'applegreen' }}
              >
                <ArrowForwardIcon
                  color="gunmetal"
                  boxSize={6}
                  borderColor="gunmetal"
                  _hover={{ color: 'gunmetal' }}
                />
              </Button>
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
