import { React } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import logo from '../assets/bank-leaf.png';

const FormNavbar = () => (
  <>
    <Flex
      bg="black"
      px={4}
      align="center"
      justify="space-between"
      boxShadow="md"
      pos="fixed"
      zIndex="sticky"
      width="100%"
      top={0}
      left={0}
    >
      <Box py={{ base: 3 }}>
        <Flex align="center" className="logo-group" as={ReactRouterLink} to="/">

          <Image src={logo} alt="Logo" boxSize="40px" />
          <div>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="white"
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
      </Box>
    </Flex>
  </>
);

export default FormNavbar;
