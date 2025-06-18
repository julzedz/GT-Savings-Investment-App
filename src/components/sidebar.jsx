import React, { useEffect } from 'react';
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Heading,
  Image,
  Button,
  useBreakpointValue,
  Avatar,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiHome,
  FiUser,
  FiDollarSign,
  FiDownload,
} from 'react-icons/fi';
import { RiArrowLeftLine } from 'react-icons/ri';
import { FaCreditCard, FaGlobe } from 'react-icons/fa';
import { GrDocument } from 'react-icons/gr';
import { TbReceiptTax } from 'react-icons/tb';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsFillGearFill, BsGraphUpArrow } from 'react-icons/bs';
import { GoQuestion } from 'react-icons/go';
import { useLocation } from 'react-router';
import { Link as reactrouterlink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ArrowBackIcon } from '@chakra-ui/icons';
import NavItem from './navitem';
import logo from '../assets/bank-leaf.png';
import useStore from '../store/useStore';

const Sidebar = () => {
  const breakpointnavsize = useBreakpointValue({ base: 'small', md: 'large' });
  const [navSize, setNavSize] = React.useState(breakpointnavsize);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();

  const { user, fetchUser } = useStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    setNavSize(breakpointnavsize);
  }, [breakpointnavsize]);

  const handleLogout = async () => {
    try {
      localStorage.removeItem('token');
      Cookies.remove('COOKIE_TOKEN');
      navigate('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const toggleNavSize = () => {
    setNavSize(navSize === 'small' ? 'large' : 'small');
  };

  return (
    <Flex
      pos="fixed"
      zIndex="sticky"
      breakpointnavsize="true"
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize === 'small' ? 20 : 44}
      borderRadius={navSize === 'small' ? '2px' : '0'}
      flexDir="column"
      bgColor="applegreen"
      color="white"
      justifyContent="flex-start"
    >
      <Flex
        p="15px"
        flexDir="column"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        as="nav"
        pb={0}
      >
        <Flex>
          <IconButton
            bg="none"
            mt={5}
            _hover={{ bg: 'none' }}
            display={{ base: 'flex', md: 'none' }}
            icon={<FiMenu />}
            onClick={toggleNavSize}
          />
          <Flex
            display={navSize === 'small' ? 'none' : 'flex'}
            my={5}
            align="center"
            justifyContent="center"
            className="logo-group"
            cursor="pointer"
            as={reactrouterlink}
            to="/home"
            bgColor="black"
            p={2}
            borderRadius={8}
          >
            <Image src={logo} alt="Logo" boxSize="20px" />
            <div>
              <Text
                fontSize="12px"
                fontWeight="bold"
                color="white"
                fontFamily="Atomic Age"
                align="center"
                my={0}
              >
                GT Savings Bank
                <Text color="applegreen" display="inline">
                  .
                </Text>
              </Text>
            </div>
          </Flex>
        </Flex>
        <Text
          p={0}
          m={0}
          color="gray.600"
          fontFamily="noto"
          fontWeight="semibold"
          fontSize="xs"
        >
          MAIN MENU
        </Text>
        <NavItem
          href="/dashboard"
          isActive={isActive('/dashboard')}
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          // m={0}
        />
        <NavItem
          href="/transaction"
          isActive={isActive('/transaction')}
          navSize={navSize}
          icon={FiDollarSign}
          title="Transactions"
          active
          // m={0}
        />
        <NavItem
          href="/cards"
          isActive={isActive('/cards')}
          navSize={navSize}
          icon={FaCreditCard}
          title="Cards"
          // m={0}
        />
        <Text
          p={0}
          m={0}
          color="gray.600"
          fontFamily="noto"
          fontWeight="semibold"
          fontSize="xs"
        >
          TRANSFERS
        </Text>
        <NavItem
          href="/withdrawal"
          isActive={isActive('/withdrawal')}
          navSize={navSize}
          icon={IoPaperPlaneOutline}
          title="Local Transfer"
        />
        <NavItem
          href="/internationalwire"
          isActive={isActive('/internationalwire')}
          navSize={navSize}
          icon={FaGlobe}
          title="International Wire"
        />
        <NavItem
          href="/deposit"
          isActive={isActive('/deposit')}
          navSize={navSize}
          icon={FiDownload}
          title="Deposit"
        />
        <Text
          p={0}
          m={0}
          color="gray.600"
          fontFamily="noto"
          fontWeight="semibold"
          fontSize="xs"
        >
          SERVICES
        </Text>
        <NavItem
          href="/investment"
          isActive={isActive('/investment')}
          navSize={navSize}
          icon={BsGraphUpArrow}
          title="Investment"
        />
        <NavItem
          href="/loan"
          isActive={isActive('/loan')}
          navSize={navSize}
          icon={GrDocument}
          title="Loan Request"
        />
        <NavItem
          href="/taxrefund"
          isActive={isActive('/taxrefund')}
          navSize={navSize}
          icon={TbReceiptTax}
          title="IRS Tax Refund"
        />
        <Text
          p={0}
          m={0}
          color="gray.600"
          fontFamily="noto"
          fontWeight="semibold"
          fontSize="xs"
        >
          ACCOUNT
        </Text>
        <NavItem
          navSize={navSize}
          href="/profile"
          isActive={isActive('/profile')}
          icon={BsFillGearFill}
          title="Settings"
        />
        <NavItem
          navSize={navSize}
          href="/profile"
          isActive={isActive('/#')}
          icon={GoQuestion}
          title="Support Ticket"
        />
      </Flex>
      <Button
        display={{ base: 'block', md: 'none' }}
        alignSelf="flex-start"
        as="reactrouterlink"
        onClick={handleLogout}
        fontFamily="noto"
        textDecoration="underline"
        fontSize="sm"
        p
        leftIcon={<ArrowBackIcon _hover={{ color: 'black' }} boxSize={6} />}
        colorScheme="white"
        variant="link"
      >
        {' '}
      </Button>
      <Divider my={2} display={navSize === 'small' ? 'none' : 'flex'} />
      <Flex
        px={2}
        my={2}
        pb="15%"
        alignSelf="center"
        justifySelf="center"
        bgColor="rgba(255, 255, 255, 0.1)"
        color="black"
        borderRadius={10}
        flexDir="column"
        w="90%"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        mb={4}
      >
        {user && (
          <Flex mt={4} alignItems="center" _hover={{ textDecoration: 'none' }}>
            <Avatar src={logo} size="sm" bgColor="black" />
            <Flex
              flexDir="column"
              ml={4}
              display={navSize === 'small' ? 'none' : 'flex'}
            >
              <Heading textTransform="capitalize" as="h5" size="xs" mb={0}>
                {user.fullname}
              </Heading>
              <Text
                color="gray.700"
                fontFamily="noto"
                fontWeight="normal"
                fontSize="xs"
              >
                ID: {user.account_number}
              </Text>
            </Flex>
          </Flex>
        )}
        <Flex
          alignSelf="center"
          fontFamily="new"
          width="100%"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          pt={6}
          gap={2}
        >
          <Button
            variant="solid"
            as={reactrouterlink}
            to="/profile"
            colorScheme="green"
            size="xs"
            fontSize="xs"
            leftIcon={<FiUser />}
            w="100%"
          >
            Profile
          </Button>
          <Button
            display={{ base: 'none', md: 'flex' }}
            variant="outline"
            colorScheme="red"
            fontSize="xs"
            size="xs"
            w="100%"
            onClick={handleLogout}
          >
            <RiArrowLeftLine /> Logout
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
