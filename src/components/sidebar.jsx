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
// import { IoPawOutline } from 'react-icons/io5';
import NavItem from './navitem';

const Sidebar = () => {
  const [navSize, changeNavSize] = useState('large');
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      mt="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize === 'small' ? '75px' : '200px'}
      borderRadius={navSize === 'small' ? '15px' : '30px'}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
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
        <NavItem href="/account" navSize={navSize} icon={FiHome} title="Dashboard" />
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
