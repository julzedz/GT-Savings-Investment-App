import React, { useEffect, useState } from 'react';
import {
  Flex, Text, IconButton, Divider, Avatar, Heading, Image, Button, useBreakpointValue,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiHome,
  FiUser,
  FiDollarSign,
} from 'react-icons/fi';
import { BsGraphUpArrow } from 'react-icons/bs';
import { useLocation } from 'react-router';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import NavItem from './navitem';
import logo from '../assets/bank-leaf.png';

const Sidebar = () => {
  const breakpointNavSize = useBreakpointValue({ base: 'small', md: 'large' });
  const [navSize, setNavSize] = useState(breakpointNavSize);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    setNavSize(breakpointNavSize);
  }, [breakpointNavSize]);

  const toggleNavSize = () => {
    setNavSize(navSize === 'small' ? 'large' : 'small');
  };
  return (
    <Flex
      pos="fixed"
      zIndex="sticky"
      breakpointNavSize
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize === 'small' ? 20 : 80}
      borderRadius={navSize === 'small' ? '2px' : '0'}
      flexDir="column"
      justifyContent="space-between"
      bgColor="applegreen"
      color="white"
    >
      <Flex
        p="15px"
        flexDir="column"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        as="nav"
      >
        <Flex>
          <IconButton
            bg="none"
            mt={5}
            _hover={{ bg: 'none' }}
            display={{ base: 'flex', md: 'none' }}
            icon={<FiMenu />}
            onClick={toggleNavSize}
          />
          <Flex
            display={navSize === 'small' ? 'none' : 'flex'}
            my={5}
            align="center"
            justifyContent="center"
            className="logo-group"
            cursor="pointer"
            as={ReactRouterLink}
            to="/home"
            bgColor="black"
            p={2}
            borderRadius={8}
          >

            <Image src={logo} alt="Logo" boxSize="30px" />
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
        </Flex>
        <NavItem href="/dashboard" isActive={isActive('/dashboard')} navSize={navSize} icon={FiHome} title="Dashboard" />
        <NavItem href="/transaction" isActive={isActive('/transaction')} navSize={navSize} icon={FiDollarSign} title="Transactions" active />
        <NavItem href="/investment" isActive={isActive('/investment')} navSize={navSize} icon={BsGraphUpArrow} title="Investment" />
        <NavItem navSize={navSize} href="/profile" isActive={isActive('/profile')} icon={FiUser} title="Profile" />
      </Flex>
      <Button display={{ base: 'block', md: 'none' }} alignSelf="flex-start" as="ReactRouterLink" to="" fontFamily="noto" textDecoration="underline" fontSize="sm" p leftIcon={<ArrowBackIcon _hover={{ color: 'black' }} boxSize={6} />} colorScheme="white" variant="link"> </Button>
      <Button
        alignSelf="flex-start"
        as="ReactRouterLink"
        display={{ base: 'none', md: 'block' }}
        to=""
        fontFamily="noto"
        fontSize="sm"
        p
        leftIcon={<ArrowBackIcon />}
        colorScheme="white"
        variant="link"
        isCentered
      >
        Logout

      </Button>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        mb={4}
      >
        <Divider display={navSize === 'small' ? 'none' : 'flex'} />
        <Flex mt={4} alignItems="center" as={ReactRouterLink} to="/profile" _hover={{ textDecoration: 'none' }}>
          <Avatar size="sm" />
          <Flex flexDir="column" ml={4} display={navSize === 'small' ? 'none' : 'flex'}>
            <Heading as="h3" size="sm" mb={0}>Rob Smith</Heading>
            <Text color="gray.500" fontFamily="noto" fontWeight="normal" fontSize="sm">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
