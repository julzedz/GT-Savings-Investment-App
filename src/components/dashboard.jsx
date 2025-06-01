/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  Flex,
  HStack,
  Text,
  Divider,
  Tooltip,
  Button,
  Icon,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  NumberInput,
  NumberDecrementStepper,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  FormHelperText,
  useDisclosure,
  Avatar,
  Box,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
} from '@chakra-ui/react';
import { Link as reactrouterlink, useNavigate } from 'react-router-dom';
import {
  ViewIcon,
  ViewOffIcon,
  ChevronRightIcon,
  CalendarIcon,
} from '@chakra-ui/icons';
import {
  RiNotification2Fill,
  // RiDownload2Line,
  RiUpload2Line,
  RiWallet3Line,
} from 'react-icons/ri';
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import Cookies from 'js-cookie';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';
import earn from '../assets/earn.svg';
import margin from '../assets/margin.svg';
import api from '../api';
import usePrice from './usePrice';
import CurrentDateDisplay from './CurrentDateDisplay';
import { FaArrowTrendDown, FaArrowTrendUp, FaShield } from 'react-icons/fa6';
import { BiPlus, BiTachometer } from 'react-icons/bi';
import { MdOutlineShield } from 'react-icons/md';
import LiveClock from './LiveClock';
import { FaBuilding } from 'react-icons/fa';
import { use } from 'react';
import EmptyState from './EmptyState';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const isTokenExpired = (token) => {
  try {
    const { exp } = JSON.parse(atob(token.split('.')[1]));
    return exp < new Date().getTime() / 1000;
  } catch {
    return true;
  }
};

export const COOKIE_TOKEN = '124';

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { price } = usePrice();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (isTokenExpired(token)) {
      navigate('/login');
    }
  }, [navigate]);

  const handleGoProfile = () => {
    navigate('/profile');
  };
  const handleSend = () => {
    navigate('/withdrawal-savings');
  };
  const handleDeposit = () => {
    navigate('/deposit');
  };
  const handleTransaction = () => {
    navigate('/transaction');
  };

  const fetchUser = async () => {
    try {
      const response = await api.get('/users/me');
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      return `$ ${0}`;
      // Handle errors (e.g., redirect to login)
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      const userData = await fetchUser();
      Cookies.set(COOKIE_TOKEN, JSON.stringify(userData));
      setUser(userData);
      setIsLoading(false);
    };

    fetchUserData();
    // const userDetails = Cookies.get(COOKIE_TOKEN);
    // setUser(JSON.parse(userDetails));
  }, []);

  let balance = 0.0;
  if (user && user.account) {
    balance = user.account.savings_account;
  }
  const [isVisible, setIsVisible] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const headers = [
    {
      text: 'Transactions',
      justify: 'flex-start',
      textAlign: 'left',
      width: '40%',
    },
    { text: 'Amount', justify: 'center', textAlign: 'right' },
    { text: 'Date', justify: 'center', textAlign: 'right' },
    {
      text: 'Status',
      justify: 'center',
      textAlign: 'right',
      width: '22%',
    },
  ];

  const transactions =
    user && user.id === 3
      ? [
          {
            icon: RiUpload2Line,
            action: 'Withdraw USDT',
            amount: '-1000.00',
            date: '2024-03-11 10:16:20',
            status: 'Completed',
          },
          {
            icon: RiUpload2Line,
            action: 'Withdraw USDT',
            amount: '-1000.00',
            date: '2024-03-09 19:06:46',
            status: 'Completed',
          },
          {
            icon: RiUpload2Line,
            action: 'Withdraw USDT',
            amount: '-1000.00',
            date: '2024-03-07 21:11:54',
            status: 'Completed',
          },
          {
            icon: RiUpload2Line,
            action: 'Withdraw USDT',
            amount: '-1000.00',
            date: '2024-03-06 21:37:31',
            status: 'Completed',
          },
        ]
      : [];

  return (
    <>
      <Flex color="black" w="100%">
        <Sidebar />
        <Flex
          flexDir="column"
          minHeight="3xl"
          // p={5}
          flex="1"
          marginLeft={{ base: 20, md: '11.01rem' }}
          overflowY="scroll"
          fontFamily="noto"
          bgColor="gray.200"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid gray.500"
            bgColor="white"
            fontSize="xs"
            px={6}
            py={3}
          >
            <Flex
              alignItems="center"
              gap={2}
              color="gray.500"
              fontWeight="medium"
            >
              <CalendarIcon />
              <CurrentDateDisplay />
            </Flex>
            <Flex gap={4} alignItems="center">
              <Flex
                bgColor="tiffanyblue"
                alignItems="center"
                py={0.5}
                px={2}
                gap={2}
                borderRadius="lg"
                fontWeight="medium"
              >
                <RiWallet3Line />
                {isLoading ? (
                  <Skeleton height="20px" width="60px" />
                ) : (
                  <Text>${balance}</Text>
                )}
              </Flex>
              <RiNotification2Fill />
              <Avatar size="xs" />
            </Flex>
          </Flex>
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
                      ${balance}
                    </Text>
                  </Flex>
                  <Box bgColor="blue.500" p={3} borderRadius={'full'}>
                    <RiWallet3Line color="blue" />
                  </Box>
                </Flex>
                <Flex
                  w="25%"
                  border="1px solid blue.700"
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
                      ${balance}
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
                      ${balance}
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
          <Flex
            flexDir="column"
            maxWidth="65%"
            borderRadius="2xl"
            borderWidth={{ base: 'none', slg: '1px' }}
            borderColor="#eaecef"
            p={6}
            mb={4}
            ml={4}
            bgColor="#f5f5f5"
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
                    <ViewOffIcon cursor="pointer" onClick={toggleVisibility} />
                  </Tooltip>
                )}
              </Flex>
              <Flex p={0} m={0} gap={3} display={{ base: 'none', slg: 'flex' }}>
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
                  to="/withdrawal-savings"
                  colorScheme="green"
                  size="sm"
                  variant="solid"
                  fontSize="sm"
                  fontWeight="600"
                  lineHeight="short"
                >
                  Withdraw
                </Button>
                <Button
                  colorScheme="green"
                  size="sm"
                  variant="solid"
                  fontSize="sm"
                  fontWeight="600"
                  lineHeight="short"
                  onClick={onOpen}
                >
                  Transfer
                </Button>
              </Flex>
            </Flex>
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader fontFamily="noto">Transfer</ModalHeader>
                <ModalCloseButton />
                <ModalBody fontFamily="noto" pb={6}>
                  <FormControl>
                    <FormLabel fontSize="xs">Savings Account</FormLabel>
                    <NumberInput ref={initialRef} step={500} min={100}>
                      <NumberInputField placeholder="Enter amount" />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <FormHelperText fontSize="xs">
                      Transfer amount to your Investment Account
                    </FormHelperText>
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button fontFamily="noto" colorScheme="green">
                    Send
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Flex width="fit-content">
              <Text
                fontSize={{ base: '2xl', lg: '2rem' }}
                fontWeight="semibold"
                m={0}
              >
                {isVisible ? `$${balance}` : '****'}
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
                to="/withdrawal-savings"
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
              <Button
                colorScheme="green"
                size="sm"
                variant="solid"
                fontSize={{ base: 'xs', sm: 'sm' }}
                fontWeight="600"
                lineHeight="short"
                width={{ base: '30%', slg: 'auto' }}
                onClick={onOpen}
              >
                Transfer
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
            maxWidth="65%"
            p={6}
            mb={4}
            ml={4}
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
                      <FaBuilding />
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
            maxWidth="60rem"
            borderRadius="2xl"
            borderWidth={{ base: 'none', slg: '1px' }}
            borderColor="#eaecef"
            p={6}
            mb={6}
            bgColor="#f5f5f5"
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
                  <Flex overflowX={{ base: 'scroll' }}>
                    {transactions.length > 0 ? (
                      <Table
                        w="100%"
                        variant="unstyled"
                        size={{ base: 'sm', xl: 'md' }}
                      >
                        <Thead>
                          <Tr>
                            {headers.map((header) => (
                              <Th
                                key={header.id}
                                justifySelf={header.justify}
                                textAlign={header.textAlign}
                                textTransform="capitalize"
                                fontWeight="100"
                                p={0}
                                w={header.width}
                              >
                                {header.text}
                              </Th>
                            ))}
                          </Tr>
                        </Thead>
                        <Tbody>
                          {transactions.map((transaction) => (
                            <Tr
                              key={transaction.id}
                              _hover={{ bgColor: '#f0f1f1' }}
                            >
                              <Td py={6} px={1}>
                                <Flex>
                                  <Icon as={transaction.icon} boxSize={6} />
                                  <Text m={0} ml={4}>
                                    {transaction.action}
                                  </Text>
                                </Flex>
                              </Td>
                              <Td py={6} px={0} textAlign="right">
                                {transaction.amount}
                              </Td>
                              <Td py={6} px={0} textAlign="right">
                                {transaction.date}
                              </Td>
                              <Td py={6} px={1} textAlign="right">
                                {transaction.status}
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    ) : (
                      <EmptyState message="No recent transactions" />
                    )}
                  </Flex>
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
