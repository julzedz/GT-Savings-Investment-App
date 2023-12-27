import { Link as ReactRouterLink } from 'react-router-dom';
import { Image, Text, Flex } from '@chakra-ui/react';
import logo from '../assets/bank-leaf.png';

const Signup = () => (
  <Flex minHeight={72} mt={{ base: 16, md: 16 }} flexDir="column" bgColor="#f2f2f2">
    <Flex
      as={ReactRouterLink}
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
    <Flex />
    <Flex />
  </Flex>
);

export default Signup;
