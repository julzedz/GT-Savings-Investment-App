import { React, useState } from 'react';
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
import { useLocation } from 'react-router-dom';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Squeeze } from 'hamburger-react';
import logo from '../assets/bank-leaf.png';
import '../styles/navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  // const { isOpen, onToggle } = useDisclosure();
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
            <DropdownItem href="/loans" border="none">Loans</DropdownItem>
            <DropdownItem href="/mortgages" border="none">Mortgages</DropdownItem>
          </DropdownMenu>
          <DropdownMenu label="Support" isActive={isActive('/support' || '/appointment' || 'contact')}>
            <DropdownItem href="/support" border="none">Contact Us</DropdownItem>
            <DropdownItem href="/about" border="none">About Us</DropdownItem>
            <DropdownItem href="/about" border="none">Make an Appointment</DropdownItem>
          </DropdownMenu>
          <DropdownMenu label="Investment Services" isActive={isActive('/investment' || '/insurance')}>
            <DropdownItem href="/investment" border="none">Investment</DropdownItem>
            <DropdownItem href="/insurance" border="none">Insurance</DropdownItem>
          </DropdownMenu>
        </Flex>

        {/* <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Navigation"
          onClick={onToggle}
          display={{ base: 'flex', lg: 'none' }}
        /> */}
        <Flex display={{ base: 'flex', lg: 'none' }}>
          <Squeeze easing="ease-in" rounded toggled={isOpen} toggle={setOpen} color="#97A722" label="Navigation" />
        </Flex>
      </Flex>

      <Collapse in={isOpen} id="navbar-collapse">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
          <NavLink href="/" isActive={isActive('/home')}>Home</NavLink>
          <DropdownMenu label="Banking & Borrowing" isActive={isActive('/banking' || '/loans' || 'mortgage')}>
            <DropdownItem href="/banking">Online Banking</DropdownItem>
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
      </Collapse>
    </>
  );
};

const NavLink = ({ children, href, isActive }) => (
  <Link
    href={href}
    fontSize="md"
    color={isActive ? 'applegreen' : 'white'}
    bg={isActive ? 'gunmetal' : 'black'}
    px={4}
    py={6}
    _hover={{ bg: 'gunmetal', color: 'applegreen' }}
    transition="background 0.4s"
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
        fontSize="md"
        color={isActive ? 'applegreen' : 'white'}
        bg={isActive ? 'gunmetal' : 'black'}
        px={4}
        py={6}
        _hover={{ bg: 'gunmetal', color: 'applegreen' }}
        transition="background 0.4s"
        onMouseEnter={() => onToggle(true)}
        onMouseLeave={() => onToggle(false)}
      >
        <Flex align="center">
          <Text my={0}>{label}</Text>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList
        bg="gunmetal"
        width="250px"
        color="white"
        borderRadius="base"
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
