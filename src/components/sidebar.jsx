import React, { useState } from 'react';
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
} from 'react-icons/fi';
import { useLocation } from 'react-router';
import NavItem from './navitem';

const Sidebar = () => {
  const [navSize, changeNavSize] = useState('large');
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <Flex
      pos="fixed"
      left="0"
      h="100vh"
      // mt="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize === 'small' ? '75px' : '300px'}
      borderRadius={navSize === 'small' ? '15px' : '3px'}
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
        <IconButton
          bg="none"
          mt={5}
          _hover={{ bg: 'none' }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === 'small') {
              changeNavSize('large');
            } else {
              changeNavSize('small');
            }
          }}
        />
        <NavItem href="/account" isActive={isActive('/account')} navSize={navSize} icon={FiHome} title="Dashboard" />
        <NavItem href="/transactions" navSize={navSize} icon={FiCalendar} title="Transactions" active />
        <NavItem href="/investment" navSize={navSize} icon={FiDollarSign} title="Investment" />
        <NavItem navSize={navSize} icon={FiUser} title="Profile" />
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        mb={4}
      >
        <Divider display={navSize === 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align="center">
          <Avatar size="sm" />
          <Flex flexDir="column" ml={4} display={navSize === 'small' ? 'none' : 'flex'}>
            <Heading as="h3" size="sm">Alex Dumeje</Heading>
            <Text color="grey">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
