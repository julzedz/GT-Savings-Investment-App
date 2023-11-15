import React from 'react';
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  IconButton,
  Collapse,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import logo from '../assets/bank-leaf.png';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex bg="black" p={4} align="center" justify="space-between" boxShadow="md">
      {/* Logo */}
      <Box>
        <Image src={logo} alt="Logo" boxSize="50px" />
        <Text fontSize="lg" fontWeight="bold" fontFamily="Atomic Age">
          GT Savings Bank
        </Text>
      </Box>

      {/* Nav Links */}
      <Flex align="center">
        <NavLink href="/">Home</NavLink>
        <DropdownMenu label="Banking & Borrowing">
          <DropdownItem href="/banking">Online Banking</DropdownItem>
          <DropdownItem href="/loans">Loans</DropdownItem>
          <DropdownItem href="/mortgages">Mortgages</DropdownItem>
        </DropdownMenu>
        <DropdownMenu label="Investment Services">
          <DropdownItem href="/investment">Investment</DropdownItem>
          <DropdownItem href="/insurance">Insurance</DropdownItem>
        </DropdownMenu>
        <DropdownMenu label="Support">
          <DropdownItem href="/support">Contact Us</DropdownItem>
          <DropdownItem href="/about">About Us</DropdownItem>
          <DropdownItem href="/about">
            Make an Appointment
          </DropdownItem>
        </DropdownMenu>
      </Flex>
    </Flex>
  );
};

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
      bg="black"
      px={4}
      py={2}
      _hover={{ bg: 'gray.900' }}
      borderRadius="md"
      transition="background 0.3s"
    >
      {label}
    </MenuButton>
    <MenuList bg="black" color="white" borderRadius="md">
      {children}
    </MenuList>
  </Menu>
);

const DropdownItem = ({ href, children }) => (
  <MenuItem as={Link} href={href} bg="black" fontSize="md">
    {children}
  </MenuItem>
);

export default Navbar;
