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
import { IoPawOutline } from 'react-icons/io5';
import NavItem from '../components/navitem';

const Sidebar = () => (
  <Flex
    pos="sticky"
    left="5"
    h="95vh"
    mt="2.5vh"
    boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
    w="200px"
    flexDir="column"
    justifyContent="space-between"
  >
    <Flex>

    </Flex>
    <Flex
      p="5%"
      flexDir="column"
      w="100%"
      alignItems="flex-start"
      mb={4}
    >
      <Divider />
      <Flex>
        <Avatar size="sm" />
        <Flex flexDir="column" ml={4}>
          <Heading>Alex Dumeje</Heading>
          <Text>Admin</Text>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export default Sidebar;
