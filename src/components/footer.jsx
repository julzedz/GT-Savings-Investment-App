/* eslint-disable max-len */
import {
  Box, Text, Button, Flex, Image, Icon,
} from '@chakra-ui/react';
import {
  FaInstagram, FaFacebookF, FaLinkedin, FaYoutube,
} from 'react-icons/fa';
import skyscraper from '../assets/blackandwhite.jpg';
import logo from '../assets/bank-leaf.png';

const Footer = () => (
  <>
    <Box
      p={8}
      w="100%"
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
        <Box display="inline" color="applegreen" fontFamily="new" fontSize="lg"> 800-947-6438</Box>
        , email us at
        <Box display="inline" color="applegreen" fontFamily="new" fontSize="lg"> info@gtsavingsbank.net </Box>
        or click the button below to access our contact form.
      </Text>
      <Button
        m={5}
        p={7}
        fontFamily="new"
        bgColor="applegreen"
        _hover={{ color: 'gunmetal', bgColor: 'white' }}
      >
        Contact Us
      </Button>
    </Box>
    <Box>
      <Box py={{ base: 3 }}>
        <Flex align="center" justifyContent="center" className="logo-group" href="/">

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
        <Flex flexDir="column">
          <Text>
            Routing #309803757
          </Text>
          <Text>
            P.O. Box 2400 | Los Angeles CA 90097
          </Text>
          <Box>
            <Icon as={FaFacebookF} boxSize={6} color="gunmetal" />
            <Icon as={FaInstagram} boxSize={6} color="gunmetal" />
            <Icon as={FaLinkedin} boxSize={6} color="gunmetal" />
            <Icon as={FaYoutube} boxSize={6} color="gunmetal" />
          </Box>
        </Flex>
      </Box>
    </Box>
  </>
);

export default Footer;
