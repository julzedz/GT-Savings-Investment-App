/* eslint-disable max-len */
import { Link as ReactRouterLink } from 'react-router-dom';
import React from 'react';
import {
  Text, Flex,
  Input, Button, InputGroup,
  InputLeftElement, InputRightElement,
  Icon, Stack, Checkbox, Link,
} from '@chakra-ui/react';
import { FaUser, FaLock } from 'react-icons/fa';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import FormNavbar from './formnavbar';
import AccountFooter from './accountfooter';

const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <FormNavbar />
      <Flex minH="2xl" mt={16} flexDir="column" bgColor="#f2f2f2">
        <Flex
          fontFamily="mono"
          alignSelf="center"
          justifySelf="center"
          flexDir="column"
          bgColor="white"
          minWidth={48}
          minHeight={48}
          mt={12}
          px={8}
          pt={8}
          pb={12}
          w={{
            base: '80%', md: 'lg',
          }}
          borderRadius="0.5rem"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <Text
            fontSize={{ base: 'lg', xl: '2xl' }}
            fontWeight="bold"
            mb={6}
          >
            Login
          </Text>
          <Stack spacing={6}>
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
                  cursor="pointer"
                  as={isVisible ? ViewOffIcon : ViewIcon}
                  onClick={toggleVisibility}
                />
              </InputRightElement>
            </InputGroup>
            <Checkbox colorScheme="green" w="fit-content">Remember my username</Checkbox>
            <Button colorScheme="green" type="submit" variant="solid">
              Login
            </Button>
            <Text
              as={Link}
              mt={4}
              textDecoration="underline"
              _hover={{ color: 'applegreen' }}
              w="fit-content"
            >
              Forgot username or password?
            </Text>
          </Stack>
        </Flex>
        <Text
          fontFamily="mono"
          alignSelf="center"
          justifySelf="center"
          mt={8}
        >
          New to GT Savings Bank?
          <span> </span>
          <Link
            as={ReactRouterLink}
            to="/signup"
            textDecoration="underline"
            _hover={{ color: 'applegreen' }}
          >
            Open an account.
          </Link>
        </Text>
        <Text color="gray.400" fontFamily="noto" mt={32} fontSize="xs" lineHeight="short" mb={3}>
          Use of this site involves the electronic transmission of personal financial information.
          <Text m={0}> Using this product is consent to such transmission of this information; such consent is effective at all times when using this site. GT Savings supports 128-bit browser encryption.</Text>
          <Text m={0}>Usage of GT Savings online trading services constitutes agreement of the Electronic Services Customer Agreement and License Agreement.</Text>
          <Text m={0}>
            Before investing, consider the funds&apos; investment objectives, risks, charges, and expenses.
          </Text>
          <Text m={0}>
            GT Savings Brokerage Services LLC, Member NYSE, SIPC. 500 Salem Street, Smithfield, RI 02917.
          </Text>
        </Text>
      </Flex>
      <AccountFooter />
    </>
  );
};

export default Login;
