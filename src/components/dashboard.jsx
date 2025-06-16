import React, { useEffect } from 'react';
import {
  Flex,
  HStack,
  Text,
  Tooltip,
  Button,
  useDisclosure,
  Box,
  Skeleton,
} from '@chakra-ui/react';
import { Link as reactrouterlink, useNavigate } from 'react-router-dom';
import {
  ViewIcon,
  ViewOffIcon,
  ChevronRightIcon,
  CalendarIcon,
} from '@chakra-ui/icons';
import { RiWallet3Line } from 'react-icons/ri';
import Sidebar from './sidebar';
import Cookies from 'js-cookie';
import AccountFooter from './accountfooter';
import CurrentDateDisplay from './CurrentDateDisplay';
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaRegCircleQuestion,
} from 'react-icons/fa6';
import { BiCalendar, BiPlus, BiTachometer } from 'react-icons/bi';
import { MdHistory, MdOutlineShield } from 'react-icons/md';
import LiveClock from './LiveClock';
import { FaBuilding } from 'react-icons/fa';
import {
  IoChatbubbleEllipsesOutline,
  IoPaperPlaneOutline,
} from 'react-icons/io5';
import Header from './Header';
import RecentTransactionsTable from './RecentTransactionsTable';
import useStore from '../store/useStore';
import { FiBarChart2 } from 'react-icons/fi';

const isTokenExpired = (token) => {
  try {
    const { exp } = JSON.parse(atob(token.split('.')[1]));
    return exp < new Date().getTime() / 1000;
  } catch {
    return true;
  }
};

export const COOKIE_TOKEN = '124';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = React.useState(true);

  const { user, isLoading, getFormattedBalance, transactions, initializeApp } =
    useStore();
  const formattedBalance = getFormattedBalance();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (isTokenExpired(token)) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  const handleGoProfile = () => {
    navigate('/profile');
  };
  const handleSend = () => {
    navigate('/withdrawal');
  };
  const handleDeposit = () => {
    navigate('/deposit');
  };
  const handleTransaction = () => {
    navigate('/transaction');
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleOpenChat = () => {
    if (window.drift) {
      window.drift.show();
    }
  };

  return (
    <>
      <Flex color="black" w="100%">
        <Sidebar />
        <Flex
          flexDir="column"
          minHeight="3xl"
          flex="1"
          marginLeft={{ base: 20, md: '11.01rem' }}
          overflowY="scroll"
          fontFamily="noto"
          bgColor="gray.200"
        >
          <Header />
          <Flex
            m={4}
            gap={4}
            flexDir={{ base: 'column', lg: 'row' }}
            alignItems="center"
          >
            {isLoading ? (
              <>
                <Skeleton height="120px" width="25%" borderRadius="xl" />
                <Skeleton height="120px" width="25%" borderRadius="xl" />
                <Skeleton height="120px" width="25%" borderRadius="xl" />
                <Skeleton height="120px" width="25%" borderRadius="xl" />
              </>
            ) : (
              <>
                <Flex
                  w="25%"
                  border="1px solid blue.700"
                  bgGradient="linear(to-r, blue.200, blue.100)"
                  px={4}
                  py={4}
                  borderRadius="xl"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Flex flexDir="column">
                    <Text
                      fontSize="0.65rem"
                      color="gray.600"
                      fontWeight="medium"
                    >
                      Current Balance
                    </Text>
                    <Text fontSize="md" fontWeight="bold">
                      ${formattedBalance}
                    </Text>
                  </Flex>
                  <Box bgColor="blue.500" p={3} borderRadius={'full'}>
                    <RiWallet3Line />
                  </Box>
                </Flex>
                <Flex
                  w="25%"
                  border="1px solid green.500"
                  bgGradient="linear(to-r, green.50, white)"
                  px={4}
                  py={4}
                  borderRadius="xl"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Flex flexDir="column">
                    <Text
                      fontSize="0.65rem"
                      color="gray.500"
                      fontWeight="medium"
                    >
                      Monthly Income
                    </Text>
                    <Text fontSize="md" color="green" fontWeight="bold">
                      ${formattedBalance}
                    </Text>
                  </Flex>
                  <Box bgColor="green.200" p={3} borderRadius={'full'}>
                    <FaArrowTrendUp color="green" />
                  </Box>
                </Flex>
                <Flex
                  w="25%"
                  border="1px solid red.600"
                  bgGradient="linear(to-r, red.50, white)"
                  px={4}
                  py={4}
                  borderRadius="xl"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Flex flexDir="column">
                    <Text
                      fontSize="0.65rem"
                      color="gray.500"
                      fontWeight="medium"
                    >
                      Monthly Outgoing
                    </Text>
                    <Text fontSize="md" color="red.500" fontWeight="bold">
                      ${formattedBalance}
                    </Text>
                  </Flex>
                  <Box
                    bgColor="red.200"
                    color="red.400"
                    p={3}
                    borderRadius={'full'}
                  >
                    <FaArrowTrendDown />
                  </Box>
                </Flex>
                <Flex
                  w="25%"
                  border="1px solid blue.700"
                  bgGradient="linear(to-r, purple.50, white)"
                  px={4}
                  py={4}
                  borderRadius="xl"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Flex flexDir="column">
                    <Text
                      fontSize="0.65rem"
                      color="gray.600"
                      fontWeight="medium"
                    >
                      Transaction Limit
                    </Text>
                    <Text fontSize="md" color="purple.600" fontWeight="bold">
                      $500,000.00
                    </Text>
                  </Flex>
                  <Box
                    bgColor="purple.200"
                    color="purple.500"
                    p={3}
                    borderRadius={'full'}
                  >
                    <BiTachometer />
                  </Box>
                </Flex>
              </>
            )}
          </Flex>
          <Flex width="100%" mb={4} mx={4} alignItems="center" gap={4}>
            <Flex
              flexDir="column"
              borderRadius="2xl"
              borderWidth={{ base: 'none', slg: '1px' }}
              borderColor="#eaecef"
              p={6}
              bgColor="#f5f5f5"
              w="65%"
            >
              <Flex justifyContent="space-between">
                <Flex
                  p={0}
                  gap={1.5}
                  alignItems="center"
                  mb={0.5}
                  justifyContent="space-evenly"
                >
                  <Text m={0} fontSize="xl" fontWeight="semibold">
                    {' '}
                    Estimated Balance
                  </Text>
                  {isVisible ? (
                    <Tooltip
                      label="Hide Balance"
                      fontFamily="new"
                      fontSize="xs"
                      aria-label="A tooltip"
                    >
                      <ViewIcon cursor="pointer" onClick={toggleVisibility} />
                    </Tooltip>
                  ) : (
                    <Tooltip
                      label="Show Balance"
                      fontFamily="new"
                      fontSize="xs"
                      aria-label="A tooltip"
                    >
                      <ViewOffIcon
                        cursor="pointer"
                        onClick={toggleVisibility}
                      />
                    </Tooltip>
                  )}
                </Flex>
                <Flex
                  p={0}
                  m={0}
                  gap={3}
                  display={{ base: 'none', slg: 'flex' }}
                >
                  <Button
                    as={reactrouterlink}
                    to="/deposit"
                    fontSize="sm"
                    fontWeight="600"
                    lineHeight="short"
                    colorScheme="green"
                    size="sm"
                    variant="solid"
                  >
                    Deposit
                  </Button>
                  <Button
                    as={reactrouterlink}
                    to="/withdrawal"
                    colorScheme="green"
                    size="sm"
                    variant="solid"
                    fontSize="sm"
                    fontWeight="600"
                    lineHeight="short"
                  >
                    Transfer
                  </Button>
                </Flex>
              </Flex>
              <Flex width="fit-content">
                <Text
                  fontSize={{ base: '2xl', lg: '2rem' }}
                  fontWeight="semibold"
                  m={0}
                >
                  {isVisible ? `$${formattedBalance}` : '****'}
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  lineHeight="short"
                  m={0}
                  ml={2}
                  alignSelf="flex-end"
                  pb={2}
                >
                  USD
                </Text>
              </Flex>
              <Flex flexDir="column" mt={3}></Flex>
              <Flex
                justifyContent={{ base: 'space-between', lg: 'normal' }}
                p={0}
                m={0}
                mt={{ base: 4, lg: 0 }}
                gap={{ base: 0, lg: 3 }}
                display={{ base: 'flex', slg: 'none' }}
              >
                <Button
                  as={reactrouterlink}
                  to="/deposit"
                  fontSize={{ base: 'xs', sm: 'sm' }}
                  fontWeight="600"
                  lineHeight="short"
                  colorScheme="green"
                  size="sm"
                  width={{ base: '30%', slg: 'auto' }}
                  variant="solid"
                >
                  Deposit
                </Button>
                <Button
                  as={reactrouterlink}
                  to="/withdrawal"
                  colorScheme="green"
                  size="sm"
                  variant="solid"
                  fontSize={{ base: 'xs', sm: 'sm' }}
                  fontWeight="600"
                  lineHeight="short"
                  px={8}
                  width={{ base: '30%', slg: 'auto' }}
                >
                  Withdraw
                </Button>
              </Flex>
              <Flex
                justifyContent="space-between"
                bgColor="gray.100"
                p={3}
                borderRadius={3}
              >
                <Flex gap={4} alignItems="center">
                  <Flex>
                    <Box bgColor="gray.300" p={2} borderRadius={'full'}>
                      <MdOutlineShield />
                    </Box>
                  </Flex>
                  <Flex flexDir="column">
                    <Text fontSize="xs" fontWeight="medium">
                      Your Account Number{' '}
                    </Text>
                    {user && (
                      <Text fontWeight="bold" letterSpacing="2px">
                        {user.account_number}
                      </Text>
                    )}
                  </Flex>
                </Flex>
                <Flex flexDir="column">
                  <Text fontWeight="bold" alignSelf="flex-end">
                    <LiveClock />
                  </Text>
                  <Text fontSize="xs">
                    <CurrentDateDisplay />
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              flexDir="column"
              bgColor="#f5f5f5"
              borderRadius="2xl"
              height="100%"
              w="31%"
            >
              <Flex flexDir="column">
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  p={2}
                  px={4}
                  w="100%"
                  borderColor="gray.300"
                  borderBottomWidth="1px"
                >
                  Account Statistics
                </Text>
                <Flex
                  mt={2}
                  mx={4}
                  flexDir="column"
                  alignItems="flex-start"
                  gap={3}
                >
                  <Flex alignItems="center" justifyContent="center" gap={1}>
                    <Box
                      bgColor="purple.100"
                      color="purple.500"
                      p={2}
                      borderRadius={'full'}
                    >
                      <BiCalendar />
                    </Box>
                    <Flex fontSize="xs" flexDir="column" ml={2}>
                      <Text color="gray.600">Account Age</Text>
                      <Text fontSize="sm" fontWeight="semibold">
                        5 years
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center" gap={1}>
                    <Box
                      bgColor="green.100"
                      color="green.500"
                      p={2}
                      borderRadius={'full'}
                    >
                      <FiBarChart2 />
                    </Box>
                    <Flex fontSize="xs" flexDir="column" ml={2}>
                      <Text color="gray.600">Transaction Volume</Text>
                      <Text fontSize="sm" fontWeight="semibold">
                        $1,598,216.76
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center" gap={1}>
                    <Box
                      bgColor="blue.100"
                      color="blue.500"
                      p={2}
                      borderRadius={'full'}
                    >
                      <BiTachometer />
                    </Box>
                    <Flex fontSize="xs" flexDir="column" ml={2}>
                      <Text color="gray.600">Transaction Limit</Text>
                      <Text fontSize="sm" fontWeight="semibold">
                        $500,000.00
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex width="100%" mb={4} mx={4} alignItems="center" gap={4}>
            <Flex
              width="65%"
              p={6}
              bgColor="#f5f5f5"
              flexDir="column"
              borderRadius="2xl"
            >
              {isLoading ? (
                <>
                  <Skeleton height="30px" width="200px" mb={4} />
                  <Skeleton height="40px" width="150px" mb={4} />
                  <Skeleton height="20px" width="100%" mb={2} />
                  <Skeleton height="20px" width="80%" mb={2} />
                  <Skeleton height="20px" width="60%" />
                </>
              ) : (
                <>
                  <Box mb={4}>
                    <Text fontWeight="bold">
                      What would you like to do today?
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                      Choose from our popular actions below
                    </Text>
                  </Box>
                  <HStack w="100%">
                    <Flex
                      as={Button}
                      px={12}
                      py={12}
                      w="100%"
                      bg="gray.300"
                      _hover={{
                        bg: 'gray.400',
                      }}
                      _active={{
                        bg: 'gray.500',
                      }}
                      flexDir="column"
                      alignItems="center"
                      borderRadius="xl"
                      onClick={handleGoProfile}
                    >
                      <Box
                        bgColor="gray.400"
                        color="gray.500"
                        p={2}
                        borderRadius={'full'}
                        mb={3}
                      >
                        <FaBuilding />
                      </Box>
                      <Text fontSize="xs" fontWeight="semibold">
                        Account Info
                      </Text>
                    </Flex>
                    <Flex
                      as={Button}
                      px={12}
                      py={12}
                      w="100%"
                      bg="blue.100"
                      _hover={{
                        bg: 'blue.200',
                      }}
                      _active={{
                        bg: 'blue.300',
                      }}
                      flexDir="column"
                      alignItems="center"
                      borderRadius="xl"
                      onClick={handleSend}
                    >
                      <Box
                        bgColor="blue.500"
                        color="blue.700"
                        p={2}
                        borderRadius={'full'}
                        mb={3}
                      >
                        <IoPaperPlaneOutline />
                      </Box>
                      <Text fontSize="xs" fontWeight="semibold">
                        Send Money
                      </Text>
                    </Flex>
                    <Flex
                      as={Button}
                      px={12}
                      py={12}
                      w="100%"
                      bg="green.100"
                      _hover={{
                        bg: 'green.200',
                      }}
                      _active={{
                        bg: 'green.300',
                      }}
                      flexDir="column"
                      alignItems="center"
                      borderRadius="xl"
                      onClick={handleDeposit}
                    >
                      <Box
                        bgColor="green.400"
                        color="green.700"
                        p={2}
                        borderRadius={'full'}
                        mb={3}
                      >
                        <BiPlus />
                      </Box>
                      <Text fontSize="xs" fontWeight="semibold">
                        Deposit
                      </Text>
                    </Flex>
                    <Flex
                      as={Button}
                      px={12}
                      py={12}
                      w="100%"
                      bg="purple.100"
                      _hover={{
                        bg: 'purple.200',
                      }}
                      _active={{
                        bg: 'purple.300',
                      }}
                      flexDir="column"
                      alignItems="center"
                      borderRadius="xl"
                      onClick={handleTransaction}
                    >
                      <Box
                        bgColor="purple.300"
                        color="purple.500"
                        p={2}
                        borderRadius={'full'}
                        mb={3}
                      >
                        <MdHistory />
                      </Box>
                      <Text fontSize="xs" fontWeight="semibold">
                        History
                      </Text>
                    </Flex>
                  </HStack>
                </>
              )}
            </Flex>
            <Flex
              flexDir="column"
              bgColor="#6a90d9"
              borderRadius="2xl"
              height="100%"
              w="31%"
              alignItems="center"
              gap={2}
            >
              <Box
                bgColor="white"
                m={3}
                color="blue.700"
                p={3}
                borderRadius="full"
              >
                <FaRegCircleQuestion size={32} />
              </Box>
              <Text
                fontSize="sm"
                color="blue.900"
                fontWeight="semibold"
                letterSpacing="wide"
              >
                Need Help?
              </Text>
              <Text fontSize="0.7rem" color="gray.600">
                Our support team is here to assist you 24/7
              </Text>
              <Button size="xs" variant="solid" onClick={handleOpenChat}>
                <HStack spacing={2}>
                  <IoChatbubbleEllipsesOutline size={14} />
                  <Text>Contact Support</Text>
                </HStack>
              </Button>
            </Flex>
          </Flex>
          <Flex
            flexDir="column"
            maxWidth="100%"
            borderRadius="2xl"
            borderWidth={{ base: 'none', slg: '1px' }}
            borderColor="#eaecef"
            p={6}
            mb={6}
            bgColor="#f5f5f5"
            mx={4}
          >
            {isLoading ? (
              <>
                <Skeleton height="30px" width="200px" mb={4} />
                <Skeleton height="20px" width="100%" mb={2} />
                <Skeleton height="20px" width="100%" mb={2} />
                <Skeleton height="20px" width="100%" mb={2} />
                <Skeleton height="20px" width="100%" />
              </>
            ) : (
              <>
                <Flex flexDir="column">
                  <Flex
                    p={0}
                    m={0}
                    alignItems="center"
                    justifyContent="space-between"
                    w="100%"
                    fontSize={{ base: 'lg', xl: '2xl' }}
                    fontWeight="bold"
                    mb={6}
                  >
                    <Text m={0}>Recent Transactions</Text>
                    <Button
                      as={reactrouterlink}
                      to="/transaction"
                      colorScheme="none"
                      variant="ghost"
                      rightIcon={
                        <ChevronRightIcon
                          _hover={{ color: '#eaecef' }}
                          color="black"
                          boxSize={4}
                          fontWeight="bold"
                          alignSelf="center"
                          p={0}
                          m={-2}
                        />
                      }
                      fontSize="sm"
                      textAlign="center"
                      p={0}
                      m={0}
                    >
                      More
                    </Button>
                  </Flex>
                  <RecentTransactionsTable
                    transactions={transactions}
                    isLoading={isLoading}
                    showActionColumn={false}
                    limit={5}
                  />
                </Flex>
              </>
            )}
          </Flex>
          <AccountFooter />
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
