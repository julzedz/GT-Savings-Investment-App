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
import '../styles/navbar.css';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      bg="black"
      p={4}
      align="center"
      justify="space-between"
      boxShadow="md"
    >
      {/* Logo */}
      <Box>
        <Flex align="center" className="logo-group">

          <Image src={logo} alt="Logo" boxSize="50px" />
          <div>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="white"
              fontFamily="Atomic Age"
              align="center"
            >
              GT Savings Bank
              <Text
                color="#97a722"
                style={{ display: 'inline' }}
              >
                .
              </Text>
            </Text>
          </div>
        </Flex>
      </Box>

      {/* Nav Links */}
      <Flex align="center">
        <NavLink href="/">Home</NavLink>
        <DropdownMenu label="Banking & Borrowing">
          <DropdownItem href="/banking">Online Banking</DropdownItem>
          <DropdownItem href="/loans">Loans</DropdownItem>
          <DropdownItem href="/mortgages">Mortgages</DropdownItem>
        </DropdownMenu>
        <DropdownMenu label="Support">
          <DropdownItem href="/support">Contact Us</DropdownItem>
          <DropdownItem href="/about">About Us</DropdownItem>
          <DropdownItem href="/about">Make an Appointment</DropdownItem>
        </DropdownMenu>
        <DropdownMenu label="Investment Services">
          <DropdownItem href="/investment">Investment</DropdownItem>
          <DropdownItem href="/insurance">Insurance</DropdownItem>
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
    _hover={{ bg: '#1f2829', color: '#97a772' }}
    borderRadius="md"
    transition="background 0.4s"
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
      _hover={{ bg: '#1f2829', color: '#97a772' }}
      borderRadius="md"
      transition="background 0.4s"
    >
      <Flex align="center">
        <Text my={0}>{label}</Text>
        <ChevronDownIcon />
      </Flex>
    </MenuButton>
    <MenuList
      bg="#1f2829"
      color="white"
      borderRadius="lg"
      _hover={{ bg: '#1f2829', color: '#97a772' }}
    >
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
