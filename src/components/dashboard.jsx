/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  Flex, Text, Divider, Tooltip, Button, Icon, Image, Table, Thead, Tbody, Tr, Th, Td,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  FormControl, FormLabel, NumberInput, NumberDecrementStepper, NumberInputStepper,
  NumberInputField, NumberIncrementStepper, FormHelperText, useDisclosure,
} from '@chakra-ui/react';
import { Link as reactrouterlink } from 'react-router-dom';
import { ViewIcon, ViewOffIcon, ChevronRightIcon } from '@chakra-ui/icons';
// eslint-disable-next-line no-unused-vars
import { RiDownload2Line, RiUpload2Line } from 'react-icons/ri';
// eslint-disable-next-line import/no-extraneous-dependencies
// import Cookies from 'js-cookie';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';
import earn from '../assets/earn.svg';
import margin from '../assets/margin.svg';
// import { COOKIE_TOKEN } from './transaction';
import api from '../api';

const Dashboard = () => {
  const [user, setUser] = useState(null);

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
      const userData = await fetchUser();
      setUser(userData);
    };

    fetchUserData();
    // const userDetails = Cookies.get(COOKIE_TOKEN);
    // setUser(JSON.parse(userDetails));
  }, []);

  let balance = 0.00;
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
      text: 'Transactions', justify: 'flex-start', textAlign: 'left', width: '40%',
    },
    { text: 'Amount', justify: 'center', textAlign: 'right' },
    { text: 'Date', justify: 'center', textAlign: 'right' },
    {
      text: 'Status', justify: 'center', textAlign: 'right', width: '22%',
    },
  ];

  const transactions = [
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-21250.75', date: '2023-11-18 19:42:31', status: 'Completed',
    // },
    // {
    //   icon: RiDownload2Line, action: 'Deposit USDT', amount: '+16250.57', date: '2023-09-15 19:42:31', status: 'Completed',
    // },
    // {
    //   icon: RiDownload2Line, action: 'Deposit USDT', amount: '+45490.38', date: '2023-08-21 19:42:31', status: 'Completed',
    // },
  ];

  return (
    <>
      <Flex
      // bgColor="gunmetal"
      // color="white"
        color="black"
        w="100%"
      >
        <Sidebar />
        <Flex
          ml={4}
          flexDir="column"
          minHeight="3xl"
          p={5}
          flex="1"
          marginLeft={{ base: 20, md: '21rem' }}
          overflowY="scroll"
          fontFamily="noto"
        >
          <Flex flexDir={{ base: 'column', lg: 'row' }} mb={8} alignItems="center" justifyContent="flex-start">
            {user && (
              <Text m={0} alignSelf="flex-start" fontSize="2xl" fontWeight="medium" pr={8} pb={{ base: 4, lg: 0 }}>{`Welcome ${user.first_name} 👋`}</Text>
            )}
            <Divider display={{ base: 'none', lg: 'inline' }} w="1px" color="#eaecef" orientation="vertical" />
            <Flex w={{ base: '100%', lg: 'auto' }} flexDir={{ base: 'column', lg: 'row' }} fontSize="sm" lineHeight="shorter" alignItems="center" px={{ base: 0, lg: 8 }}>
              <Flex w={{ base: 'inherit', lg: 'auto' }} alignItems="center" justifyContent={{ base: 'space-between', lg: 'center' }} m={0} mr={{ base: 0, lg: 12 }} flexDir={{ base: 'row', lg: 'column' }}>
                <Text color="#929aa5" m={0} mb={1}>User ID</Text>
                {user && (
                  <Text m={0}>{user.account_number}</Text>
                )}
              </Flex>
              <Flex w={{ base: 'inherit', lg: 'auto' }} alignItems="center" justifyContent={{ base: 'space-between', lg: 'center' }} m={0} mr={{ base: 0, lg: 12 }} flexDir={{ base: 'row', lg: 'column' }}>
                <Text color="#929aa5" m={0} mb={1}>User Type</Text>
                <Text m={0}>Personal</Text>
              </Flex>
            </Flex>
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
            <Flex justifyContent="space-between">
              <Flex p={0} gap={1.5} alignItems="center" mb={0.5} justifyContent="space-evenly">
                <Text m={0} fontSize="xl" fontWeight="semibold"> Estimated Balance</Text>
                {isVisible ? (
                  <Tooltip label="Hide Balance" fontFamily="new" fontSize="xs" aria-label="A tooltip">
                    <ViewIcon cursor="pointer" onClick={toggleVisibility} />
                  </Tooltip>
                ) : (
                  <Tooltip label="Show Balance" fontFamily="new" fontSize="xs" aria-label="A tooltip">
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
                  to="/withdrawal"
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
                    <FormHelperText fontSize="xs">Transfer amount to your Investment Account</FormHelperText>
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
              <Text fontSize={{ base: '2xl', lg: '2rem' }} fontWeight="semibold" m={0}>{isVisible ? `$${balance}` : '****'}</Text>
              <Text fontSize="sm" fontWeight="semibold" lineHeight="short" m={0} ml={2} alignSelf="flex-end" pb={2}>USD</Text>
            </Flex>
            <Flex flexDir="column" mt={3}>
              <Text fontSize="sm" lineHeight="short" mb={3}>
                {isVisible ? `≈ ${(balance / 41000).toFixed(8)} ` : '****'}
                BTC
              </Text>
              {/* <Text fontSize="sm" lineHeight="short" mb={3}>
                Today&apos;s PnL
                <Text display="inline" ml="3" color="green">
                  {isVisible ? '+ $712.50(0.2%)' : '****'}
                </Text>
              </Text> */}
            </Flex>
            <Flex justifyContent={{ base: 'space-between', lg: 'normal' }} p={0} m={0} mt={{ base: 4, lg: 0 }} gap={{ base: 0, lg: 3 }} display={{ base: 'flex', slg: 'none' }}>
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
          </Flex>
          <Flex
            maxWidth="60rem"
            p={0}
            m={0}
            mb={6}
            alignItems="center"
            justifyContent="space-between"
            gap={{ base: '6', slg: 'none' }}
            flexDir={{ base: 'column', slg: 'row' }}
          >
            <Flex
              as={reactrouterlink}
              to="/invest-deposit"
              borderWidth="1px"
              borderRadius="2xl"
              borderColor="#e5e7eb"
              w={{ base: '100%', slg: '49%' }}
              p={6}
              m={0}
              alignItems="center"
              justifyContent="space-between"
              cursor="pointer"
              transition="transform 0.01s ease-in-out"
              _hover={{ textDecoration: 'none', transform: 'translateX(-1px)' }}
              bgColor="#f5f5f5"
            >
              <Flex flexDir="column" w="80%">
                <Text m={0} fontSize={{ base: 'sm', sm: 'md' }} fontWeight="medium" lineHeight={6} mb={1}>One-step investment solution, enjoy high returns.</Text>
                <Text m={0} fontSize="sm" fontWeight="normal" lineHeight="shorter">
                  ROI up to
                  <Text m={0} display="inline" fontWeight="medium" color="green"> 40%</Text>
                </Text>
                <Text color="#707a8a" m={0} mt={2} fontSize="sm" lineHeight="shorter">Simple Earn</Text>
              </Flex>
              <Flex>
                <Image src={earn} boxSize={{ base: 14, sm: 20 }} />
              </Flex>
            </Flex>
            <Flex
              as={reactrouterlink}
              to="/investmentplans"
              borderWidth="1px"
              borderRadius="2xl"
              borderColor="#e5e7eb"
              w={{ base: '100%', slg: '49%' }}
              p={6}
              m={0}
              alignItems="center"
              justifyContent="space-between"
              cursor="pointer"
              transition="transform 0.01s ease-in-out"
              _hover={{ textDecoration: 'none', transform: 'translateX(-1px)' }}
              bgColor="#f5f5f5"
            >
              <Flex flexDir="column" w="80%">
                <Text m={0} fontSize={{ base: 'sm', sm: 'md' }} fontWeight="medium" lineHeight={6} mb={1}>Choose from a broad range of investment options.</Text>
                <Text m={0} fontSize="sm" fontWeight="normal" lineHeight="shorter">
                  S&P 500
                  <Text display="inline" fontWeight="medium" color="green"> + 48.40</Text>
                </Text>
                <Text color="#707a8a" m={0} mt={2} fontSize="sm" lineHeight="shorter">Securities</Text>
              </Flex>
              <Flex>
                <Image src={margin} boxSize={{ base: 14, sm: 20 }} />
              </Flex>
            </Flex>
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
            <Flex
              flexDir="column"
            >
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
                  rightIcon={(
                    <ChevronRightIcon
                      _hover={{ color: '#eaecef' }}
                      color="black"
                      boxSize={4}
                      fontWeight="bold"
                      alignSelf="center"
                      p={0}
                      m={-2}
                    />
                )}
                  fontSize="sm"
                  textAlign="center"
                  p={0}
                  m={0}
                >
                  More
                </Button>
              </Flex>
              <Flex overflowX={{ base: 'scroll' }}>
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
                    {transactions.length > 0
                      ? transactions.map((transaction) => (
                        <Tr key={transaction.id} _hover={{ bgColor: '#f0f1f1' }}>
                          <Td py={6} px={1}>
                            <Flex>
                              <Icon as={transaction.icon} boxSize={6} />
                              <Text m={0} ml={4}>{transaction.action}</Text>
                            </Flex>
                          </Td>
                          <Td py={6} px={0} textAlign="right">{transaction.amount}</Td>
                          <Td py={6} px={0} textAlign="right">{transaction.date}</Td>
                          <Td py={6} px={1} textAlign="right">{transaction.status}</Td>
                        </Tr>
                      )) : <Text textAlign="center">No transactions yet</Text>}
                  </Tbody>
                </Table>
              </Flex>
            </Flex>
          </Flex>
          <AccountFooter />
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
