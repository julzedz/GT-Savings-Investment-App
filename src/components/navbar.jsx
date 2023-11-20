import { React, useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  Collapse,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Squeeze } from 'hamburger-react';
import logo from '../assets/bank-leaf.png';
import '../styles/navbar.css';
import SearchBar from './searchbar';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Flex
        bg="black"
        px={4}
        align="center"
        justify="space-between"
        boxShadow="md"
      >
        {/* Logo */}
        <Box py={{ base: 3 }}>
          <Flex align="center" className="logo-group" href="/">

            <Image src={logo} alt="Logo" boxSize="50px" />
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
                  color={isActive('/home') ? 'applegreen' : 'persianred'}
                  style={{ display: 'inline' }}
                >
                  .
                </Text>
              </Text>
            </div>
          </Flex>
        </Box>

        {/* Nav Links */}
        <Flex align="center" className="nav-menu" mx={10} display={{ base: 'none', lg: 'flex' }}>
          <NavLink href="/" isActive={isActive('/home')}>Home</NavLink>
          <DropdownMenu label="Banking & Borrowing" isActive={isActive('/banking' || '/loans' || 'mortgage')}>
            <DropdownItem href="/banking" border="none">Online Banking</DropdownItem>
            <DropdownItem href="/loans">Loans</DropdownItem>
            <DropdownItem href="/mortgages">Mortgages</DropdownItem>
          </DropdownMenu>
          <DropdownMenu label="Support" isActive={isActive('/support' || '/appointment' || 'contact')}>
            <DropdownItem href="/support">Contact Us</DropdownItem>
            <DropdownItem href="/about">About Us</DropdownItem>
            <DropdownItem href="/about">Make an Appointment</DropdownItem>
          </DropdownMenu>
          <DropdownMenu label="Investment Services" isActive={isActive('/investment' || '/insurance')}>
            <DropdownItem href="/investment">Investment</DropdownItem>
            <DropdownItem href="/insurance">Insurance</DropdownItem>
          </DropdownMenu>
        </Flex>

        <Flex display={{ base: 'flex', lg: 'none' }}>
          <Squeeze easing="ease-in" rounded toggled={isOpen} toggle={setOpen} color="#97A722" label="Navigation" />
        </Flex>
      </Flex>

      <Collapse in={isOpen} id="navbar-collapse">
        <Flex
          justify="flex-start"
          alignItems="flex-start"
          px={4}
          py={6}
          flexDirection="column"
          bg="gunmetal"
          height={{ base: '90vh', lg: 'auto' }}
          display={{ base: 'flex', lg: 'none' }}
        >
          <SearchBar />
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
      </Collapse>
    </>
  );
};

const NavLink = ({ children, href, isActive }) => (
  <Link
    href={href}
    fontSize="lg"
    color={{ base: 'white', lg: isActive ? 'applegreen' : 'white' }}
    bg={{ base: 'gunmetal', lg: isActive ? 'gunmetal' : 'black' }}
    width={{ base: '100%', lg: 'auto' }}
    px={4}
    py={6}
    _hover={{ bg: { base: 'black', lg: 'gunmetal' }, color: 'applegreen' }}
    transition="background 0.4s"
    borderBottom={{ base: 'white solid 2px', lg: 'none' }}
  >
    {children}
  </Link>
);

const DropdownMenu = ({ label, children, isActive }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Menu isOpen={isOpen} onToggle={onToggle}>
      <MenuButton
        as={Link}
        fontSize="lg"
        width={{ base: '100%', lg: 'auto' }}
        color={isActive ? 'applegreen' : 'white'}
        bg={{ base: 'gunmetal', lg: isActive ? 'gunmetal' : 'black' }}
        px={4}
        py={6}
        _hover={{ bg: { base: 'black', lg: 'gunmetal' }, color: 'applegreen' }}
        transition="background 0.4s"
        onMouseEnter={() => onToggle(true)}
        onMouseLeave={() => onToggle(false)}
        borderBottom={{ base: 'white solid 2px', lg: 'none' }}
      >
        <Flex align="center" justify="space-between">
          <Text my={0}>{label}</Text>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList
        bg="gunmetal"
        width="sm"
        color="white"
        borderRadius="base"
        border="none"
        _hover={{ bg: 'gunmetal' }}
      >
        {children}
      </MenuList>
    </Menu>
  );
};

const DropdownItem = ({ href, children }) => (
  <MenuItem
    as={Link}
    py={3}
    px={5}
    href={href}
    bg="gunmetal"
    fontSize="md"
    _hover={{ border: 'none', bg: 'persianred', color: 'applegreen' }}
  >
    {children}
  </MenuItem>
);

export default Navbar;
