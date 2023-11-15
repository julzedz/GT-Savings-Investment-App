import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Image,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import logo from '../assets/bank-leaf.png';

const Navbar = () => (
  <Flex bg="black" p={4} align="center" justify="space-between" boxShadow="md">
    {/* Logo */}
    <Box>
      <Image src={logo} alt="Logo" boxSize="50px" />
      <Text fontSize="lg" fontWeight="bold">
        GT Savings Bank
      </Text>
    </Box>

    {/* Nav Links */}
    <Flex align="center">
      <NavLink href="/">Home</NavLink>
      <DropdownMenu label="Services">
        <DropdownItem href="/service1">Service 1</DropdownItem>
        <DropdownItem href="/service2">Service 2</DropdownItem>
        <DropdownItem href="/service3">Service 3</DropdownItem>
      </DropdownMenu>
      <DropdownMenu label="About">
        <DropdownItem href="/about1">About 1</DropdownItem>
        <DropdownItem href="/about2">About 2</DropdownItem>
      </DropdownMenu>
      <NavLink href="/contact">Contact</NavLink>
    </Flex>
  </Flex>
);

const NavLink = ({ children, href }) => (
  <Link
    href={href}
    fontSize="lg"
    color="white"
    px={4}
    py={2}
    _hover={{ bg: 'gray.700' }}
    borderRadius="md"
    transition="background 0.3s"
  >
    {children}
  </Link>
);

const DropdownMenu = ({ label, children }) => (
  <Menu>
    <MenuButton
      as={Link}
      fontSize="lg"
      color="white"
      px={4}
      py={2}
      _hover={{ bg: 'gray.700' }}
      borderRadius="md"
      transition="background 0.3s"
    >
      {label}
    </MenuButton>
    <MenuList bg="blue.800" color="white" borderRadius="md">
      {children}
    </MenuList>
  </Menu>
);

const DropdownItem = ({ href, children }) => (
  <MenuItem as={Link} href={href} fontSize="md">
    {children}
  </MenuItem>
);

export default Navbar;
