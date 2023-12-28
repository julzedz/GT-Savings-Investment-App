// import { Link as ReactRouterLink } from 'react-router-dom';
import React from 'react';
import {
  Image, Text, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Icon, Stack,
} from '@chakra-ui/react';
import { FaUser, FaLock } from 'react-icons/fa';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import logo from '../assets/bank-leaf.png';
import AccountFooter from './accountfooter';

const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Flex h="2xl" mt={16} flexDir="column" bgColor="#f2f2f2">
        <Flex
          my={5}
          align="center"
          justifyContent="center"
          className="logo-group"
          href="/"
          mt={12}
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
        <Flex
          fontFamily="mono"
          alignSelf="center"
          justifySelf="center"
          flexDir="column"
          bgColor="white"
          minWidth={48}
          minHeight={48}
          px={8}
          pt={8}
          pb={12}
          w={{
            base: '80%', md: '50%', lg: '35%', xl: '30%',
          }}
        >
          <Text
            fontSize={{ base: 'lg', xl: '2xl' }}
            fontWeight="bold"
            mb={6}
          >
            Login
          </Text>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaUser} />
              </InputLeftElement>
              <Input type="email" variant="filled" placeholder="Email" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaLock} />
              </InputLeftElement>
              <Input type={isVisible ? 'text' : 'password'} variant="filled" placeholder="Password" />
              <InputRightElement>
                <Icon
                  as={isVisible ? ViewOffIcon : ViewIcon}
                  onClick={toggleVisibility}
                />
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Flex>
        <Flex />
      </Flex>
      <AccountFooter />
    </>
  );
};

export default Login;
