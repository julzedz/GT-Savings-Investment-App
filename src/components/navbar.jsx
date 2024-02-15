import { React, useState } from 'react';
import {
  Box, Flex, Image, Text, Collapse, Accordion, AccordionItem, AccordionButton,
  AccordionPanel, AccordionIcon, Button,
} from '@chakra-ui/react';
import { useLocation, Link as reactrouterlink } from 'react-router-dom';
import { Squeeze } from 'hamburger-react';
import logo from '../assets/bank-leaf.png';
import '../styles/navbar.css';
import SearchBar from './searchbar';
import AccordionLink from './accordionlink';
import { DropdownMenu, DropdownItem } from './dropdown';
import NavLink from './navlink';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isOpen, setOpen] = useState(false);
  const token = localStorage.getItem('token');

  return (
    <>
      <Flex
        bg="black"
        px={4}
        align="center"
        justify="space-between"
        boxShadow="md"
        pos="fixed"
        zIndex="sticky"
        width="100%"
        top={0}
        left={0}
      >
        {/* Logo */}
        <Box py={{ base: 3 }}>
          <Flex align="center" className="logo-group" as={reactrouterlink} to="/">

            <Image src={logo} alt="Logo" boxSize="40px" />
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

        {/* Login */}
        {!token && (
          <Button
            as={reactrouterlink}
            to="/login"
            order={{ base: 2, slg: 3 }}
            bg="applegreen"
            alignItems="center"
            height="auto"
            color="white"
            px={4}
            py={3}
            _hover={{ bg: 'applegreen', color: 'black' }}
            fontFamily="new"
            display={{ base: 'block', xl: 'none' }}
          >
            Login
          </Button>
        )}

        {/* Nav Links */}
        <Flex align="center" className="nav-menu" mx={10} alignItems="center" justifyContent="center" display={{ base: 'none', slg: 'flex' }}>
          <NavLink href="/" isActive={isActive('/home')}>Home</NavLink>
          <DropdownMenu label="Banking & Borrowing" isActive={isActive('/banking' || '/loans' || 'mortgage')}>
            <DropdownItem href="/dashboard">Online Banking</DropdownItem>
            <DropdownItem href="/loans">Loans</DropdownItem>
            <DropdownItem href="/mortgages">Mortgages</DropdownItem>
          </DropdownMenu>
          <DropdownMenu label="Investment Services" isActive={isActive('/investment' || '/insurance')}>
            <DropdownItem href="/investment">Investment</DropdownItem>
            <DropdownItem href="/investmentplans">Investment Plans</DropdownItem>
            <DropdownItem href="/insurance">Insurance</DropdownItem>
          </DropdownMenu>
          <DropdownMenu label="Support" isActive={isActive('/about' || '/appointment' || 'contactform')}>
            <DropdownItem href="/contactform">Contact Us</DropdownItem>
            <DropdownItem href="/about">About Us</DropdownItem>
            <DropdownItem href="/appointment">Make an Appointment</DropdownItem>
          </DropdownMenu>
          {!token && (
            <Button
              as={reactrouterlink}
              to="/login"
              bg="applegreen"
              alignItems="center"
              height="auto"
              color="white"
              px={4}
              py={3}
              _hover={{ bg: 'applegreen', color: 'black' }}
              fontFamily="new"
              display={{ base: 'none', xl: 'block' }}
            >
              Login
            </Button>
          )}

        </Flex>

        <Flex display={{ base: 'flex', slg: 'none' }} order={{ base: 3 }}>
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
          pos="fixed"
          zIndex="sticky"
          mt={16}
          top={0}
          left={0}
          right={0}
        >
          <SearchBar />
          <NavLink href="/">HOME</NavLink>
          <Accordion
            allowToggle
            width="100%"
            fontSize="lg"
            fontWeight="semibold"
            bg="gunmetal"
          >
            <AccordionItem
              color="white"
              width="100%"
              fontSize="lg"
              fontWeight="semibold"
              bg="gunmetal"
            >
              <h2 style={{ margin: '0px' }}>
                <AccordionButton
                  py={6}
                  fontSize="lg"
                  fontWeight="semibold"
                  _hover={{ bg: 'black', color: 'applegreen' }}
                  transition="background 0.4s"
                  borderBottom="white solid 2px"
                >
                  <Box as="span" flex="1" textAlign="left">
                    BANKING & BORROWING
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb={0} letterSpacing="widest"> Banking Overview</Text>
                <Flex
                  flexDirection="column"
                  justify="flex-start"
                  alignItems="flex-start"
                  px={2}
                  py={4}
                >
                  <AccordionLink href="/dashboard">Online Banking</AccordionLink>
                  <AccordionLink href="/loans">Loans</AccordionLink>
                  <AccordionLink href="/mortgages">Mortgages</AccordionLink>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              color="white"
              width="100%"
              fontSize="lg"
              bg="gunmetal"
            >
              <h2 style={{ margin: '0px' }}>
                <AccordionButton
                  py={6}
                  fontSize="lg"
                  fontWeight="semibold"
                  _hover={{ bg: 'black', color: 'applegreen' }}
                  transition="background 0.4s"
                  borderBottom="white solid 2px"
                >
                  <Box as="span" flex="1" textAlign="left">
                    INVESTMENT SERVICES
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb={0} letterSpacing="widest"> Investment Overview</Text>
                <Flex
                  flexDirection="column"
                  justify="flex-start"
                  alignItems="flex-start"
                  px={2}
                  py={4}
                >
                  <AccordionLink href="/investment">Investment</AccordionLink>
                  <AccordionLink href="/loans">Insurance</AccordionLink>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              color="white"
              width="100%"
              fontSize="lg"
              bg="gunmetal"
            >
              <h2 style={{ margin: '0px' }}>
                <AccordionButton
                  py={6}
                  fontSize="lg"
                  fontWeight="semibold"
                  _hover={{ bg: 'black', color: 'applegreen' }}
                  transition="background 0.4s"
                  borderBottom="white solid 2px"
                >
                  <Box as="span" flex="1" textAlign="left">
                    SUPPORT
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb={0} letterSpacing="widest"> Support Overview</Text>
                <Flex
                  flexDirection="column"
                  justify="flex-start"
                  alignItems="flex-start"
                  px={2}
                  py={4}
                >
                  <AccordionLink href="/contactform">Contact Us</AccordionLink>
                  <AccordionLink href="/about">About Us</AccordionLink>
                  <AccordionLink href="/appointment">Make an Appointment</AccordionLink>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Collapse>
    </>
  );
};

export default Navbar;
