/* eslint-disable max-len */
import {
  Box, Text, Button, Flex, Image, Icon, Img,
} from '@chakra-ui/react';
import { Link as reactrouterlink } from 'react-router-dom';
import {
  FaInstagram, FaFacebookF, FaLinkedin, FaYoutube,
} from 'react-icons/fa';
import skyscraper from '../assets/blackandwhite.jpg';
import logo from '../assets/bank-leaf.png';
import fdic from '../assets/FDIC.svg';

const Footer = () => (
  <>
    <Box
      p={8}
      w={{ base: '100%' }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${skyscraper})`}
      bgSize="cover"
      minHeight={32}
      bgPos="center"
      textColor="white"
    >
      <Text
        fontSize="sm"
        fontFamily="lit"
        fontWeight="bold"
        letterSpacing="widest"
        lineHeight="short"
        textAlign="center"
        mt={8}
      >
        GET IN TOUCH
      </Text>
      <Text
        fontFamily="new"
        fontSize="2xl"
      >
        We&apos;d love to speak with you.
      </Text>
      <Text
        fontFamily="new"
        fontSize="lg"
        textAlign="center"
      >
        Please call us at
        <Box display="inline" color="applegreen" fontFamily="new" fontSize="lg"> +1(707) 999-4604</Box>
        , email us at
        <Box display="inline" color="applegreen" fontFamily="new" fontSize="lg"> info@gtsavingsbank.net </Box>
        or click the button below to access our contact form.
      </Text>
      <Button
        as={reactrouterlink}
        // to="/contactform"
        m={5}
        p={7}
        fontFamily="new"
        bgColor="applegreen"
        _hover={{ color: 'gunmetal', bgColor: 'white' }}
      >
        Contact Us
      </Button>
    </Box>
    <Box bgColor="#dcdfe0">
      <Box py={{ base: 3 }} display={{ base: '', md: 'none' }}>
        <Flex
          as={reactrouterlink}
          to="/"
          my={5}
          align="center"
          justifyContent="center"
          className="logo-group"
        >

          <Image src={logo} alt="Logo" boxSize="30px" />
          <div>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="gunmetal"
              fontFamily="Atomic Age"
              align="center"
              my={0}
            >
              GT Savings Bank
              <Text
                color="applegreen"
                display="inline"
              >
                .
              </Text>
            </Text>
          </div>
        </Flex>
        <Flex flexDir="column" textAlign="center" fontFamily="heading" fontSize="sm" mt={4} color="#0C3C61">
          <Text m={0}>
            Routing #309803757
          </Text>
          <Text>
            P.O. Box 2400 |  San Francisco CA 90097
          </Text>
          <Box margin="0 auto" display="flex" justifyContent="space-between" width="30%" alignItems="center">
            <Icon as={FaFacebookF} boxSize={5} color="gunmetal" />
            <Icon as={FaInstagram} boxSize={5} color="gunmetal" />
            <Icon as={FaLinkedin} boxSize={5} color="gunmetal" />
            <Icon as={FaYoutube} boxSize={5} color="gunmetal" />
          </Box>
        </Flex>
        <Box
          textAlign="center"
          m={5}
          fontFamily="heading"
          color="#0C3C61"
          fontSize="sm"
        >
          <Text
            as={reactrouterlink}
            // to="/about"
            m={0}
            p={{ base: 0, lg: 2 }}
          >
            About Us
          </Text>
          <Text
            as={reactrouterlink}
            // to="/contactform"
            m={0}
            p={{ base: 0, lg: 2 }}
          >
            Contact Us
          </Text>
        </Box>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontFamily="heading"
          fontSize="sm"
        >
          <Img src={fdic} h={9} maxWidth={40} m={2} />
          <Text m={0}>Member FDIC</Text>
          <Text m={0}>NMLS #423168</Text>
        </Box>
      </Box>
      <Box p={4} display={{ base: 'none', md: 'flex' }} alignItems="center" justifyContent="space-evenly" flexWrap="wrap" gap={8}>
        <Flex
          as={reactrouterlink}
          to="/"
          my={5}
          align="center"
          justifyContent="center"
          className="logo-group"
          href="/"
        >

          <Image src={logo} alt="Logo" boxSize="30px" />
          <div>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="gunmetal"
              fontFamily="Atomic Age"
              align="center"
              my={0}
            >
              GT Savings Bank
              <Text
                color="applegreen"
                display="inline"
              >
                .
              </Text>
            </Text>
          </div>
        </Flex>
        <Flex flexDir="column" textAlign="center" fontFamily="heading" fontSize="sm" mt={4} color="#0C3C61">
          <Text m={0}>
            Routing #309803757
          </Text>
          <Text>
            P.O. Box 2400 | San Francisco CA 90097
          </Text>
          <Box margin="0 auto" display="flex" justifyContent="space-between" width="80%" alignItems="center">
            <Icon as={FaFacebookF} boxSize={5} color="gunmetal" />
            <Icon as={FaInstagram} boxSize={5} color="gunmetal" />
            <Icon as={FaLinkedin} boxSize={5} color="gunmetal" />
            <Icon as={FaYoutube} boxSize={5} color="gunmetal" />
          </Box>
        </Flex>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontFamily="heading"
          fontSize="sm"
        >
          <Img src={fdic} h={9} maxWidth={40} m={2} />
          <Text m={0}>Member FDIC</Text>
          <Text m={0}>NMLS #423168</Text>
        </Box>
        <Box
          textAlign="center"
          m={5}
          fontFamily="heading"
          color="#0C3C61"
          fontSize="sm"
        >
          <Text color="black" fontSize="lg" letterSpacing="wider" m={0} p={{ base: 0, md: 3 }}>
            COMPANY
          </Text>
          <Text
            as={reactrouterlink}
            // to="/about"
            m={0}
            p={{ base: 0, lg: 2 }}
          >
            About Us
          </Text>
          <Text
            display="block"
            as={reactrouterlink}
            // to="/contactform"
            m={0}
            p={{ base: 0, lg: 2 }}
          >
            Contact Us
          </Text>
        </Box>
      </Box>
      <Box textAlign="center" pt={4} pb={3} fontFamily="heading" fontSize="sm" color="#0C3C61">
        <span>
          {new Date().getFullYear()}
          {' '}
        </span>
        © GT Savings Bank. All rights reserved.
      </Box>
    </Box>
  </>
);

export default Footer;
