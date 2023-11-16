import React, { useState } from 'react';
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const handleDropdownOpen = (index) => {
    setIsDropdownOpen(index);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(null);
  };

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
              <Text color="#97a722" style={{ display: 'inline' }}>
                .
              </Text>
            </Text>
          </div>
        </Flex>
      </Box>

      {/* Nav Links */}
      <Flex align="center">
        <NavLink href="/">Home</NavLink>
        <DropdownMenu label="Banking & Borrowing" index={1}>
          <DropdownItem href="/banking">Online Banking</DropdownItem>
          <DropdownItem href="/loans">Loans</DropdownItem>
          <DropdownItem href="/mortgages">Mortgages</DropdownItem>
        </DropdownMenu>
        <DropdownMenu label="Support" index={2}>
          <DropdownItem href="/support">Contact Us</DropdownItem>
          <DropdownItem href="/about">About Us</DropdownItem>
          <DropdownItem href="/about">Make an Appointment</DropdownItem>
        </DropdownMenu>
        <DropdownMenu label="Investment Services" index={3}>
          <DropdownItem href="/investment">Investment</DropdownItem>
          <DropdownItem href="/insurance">Insurance</DropdownItem>
        </DropdownMenu>
      </Flex>
    </Flex>
  );

  function NavLink({ children, href }) {
    return (
      <Link
        href={href}
        fontSize="md"
        color="white"
        px={4}
        py={2}
        _hover={{ bg: 'gunmetal', color: 'applegreen' }}
        borderRadius="md"
        transition="background 0.4s"
      >
        {children}
      </Link>
    );
  }

  function DropdownMenu({ label, children, index }) {
    return (
      <Box
        onMouseEnter={() => handleDropdownOpen(index)}
        onMouseLeave={handleDropdownClose}
      >
        <Link
          fontSize="md"
          color="white"
          bg="black"
          px={4}
          py={2}
          _hover={{ bg: 'gunmetal', color: 'applegreen' }}
          borderRadius="md"
          transition="background 0.4s"
        >
          <Flex align="center">
            <Text my={0}>{label}</Text>
            <ChevronDownIcon />
          </Flex>
        </Link>
        <Collapse in={isDropdownOpen === index}>
          <MenuList
            bg="gunmetal"
            color="white"
            borderRadius="lg"
            _hover={{ bg: 'gunmetal', color: 'applegreen' }}
          >
            {children}
          </MenuList>
        </Collapse>
      </Box>
    );
  }

  function DropdownItem({ href, children }) {
    return (
      <MenuItem
        as={Link}
        href={href}
        bg="gunmetal"
        fontSize="md"
        _hover={{ border: '0px' }}
      >
        {children}
      </MenuItem>
    );
  }
};

export default Navbar;
