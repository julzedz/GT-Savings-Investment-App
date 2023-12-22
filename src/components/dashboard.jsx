import React, { useState } from 'react';
import {
  Flex,
  Text,
  Divider,
  Tooltip,
  Button,
  Icon,
  Image,
  Table,
  Thead,
  Tbody,
  Tr, Th, Td,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ViewIcon, ViewOffIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { RiDownload2Line, RiUpload2Line } from 'react-icons/ri';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';
import earn from '../assets/earn.svg';
import margin from '../assets/margin.svg';

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

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
            <Text m={0} alignSelf="flex-start" fontSize="2xl" fontWeight="medium" pr={8} pb={{ base: 4, lg: 0 }}>
              Welcome Rob! 👋
            </Text>
            <Divider display={{ base: 'none', lg: 'inline' }} w="1px" color="#eaecef" orientation="vertical" />
            <Flex w={{ base: '100%', lg: 'auto' }} flexDir={{ base: 'column', lg: 'row' }} fontSize="sm" lineHeight="shorter" alignItems="center" px={{ base: 0, lg: 8 }}>
              <Flex w={{ base: 'inherit', lg: 'auto' }} alignItems="center" justifyContent={{ base: 'space-between', lg: 'center' }} m={0} mr={{ base: 0, lg: 12 }} flexDir={{ base: 'row', lg: 'column' }}>
                <Text color="#929aa5" m={0} mb={1}>User ID</Text>
                <Text m={0}>123456789</Text>
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
                  fontSize="sm"
                  fontWeight="600"
                  lineHeight="short"
                  colorScheme="gray"
                  size="sm"
                  variant="solid"
                >
                  Deposit
                </Button>
                <Button
                  colorScheme="gray"
                  size="sm"
                  variant="solid"
                  fontSize="sm"
                  fontWeight="600"
                  lineHeight="short"
                >
                  Withdraw
                </Button>
                <Button
                  colorScheme="gray"
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
              <Text fontSize={{ base: '2xl', lg: '2rem' }} fontWeight="semibold" m={0}>{isVisible ? '355,760.32' : '****'}</Text>
              <Text fontSize="sm" fontWeight="semibold" lineHeight="short" m={0} ml={2} alignSelf="flex-end" pb={2}>USD</Text>
            </Flex>
            <Flex flexDir="column" mt={3}>
              <Text fontSize="sm" lineHeight="short" mb={3}>
                {isVisible ? '≈ 8.2734883' : '****'}
                BTC
              </Text>
              <Text fontSize="sm" lineHeight="short" mb={3}>
                Today&apos;s PnL
                <Text display="inline" ml="3" color="green">{isVisible ? '+ $152.50(0.2%)' : '****'}</Text>
              </Text>
            </Flex>
            <Flex justifyContent={{ base: 'space-between', lg: 'normal' }} p={0} m={0} mt={{ base: 4, lg: 0 }} gap={{ base: 0, lg: 3 }} display={{ base: 'flex', slg: 'none' }}>
              <Button
                fontSize="sm"
                fontWeight="600"
                lineHeight="short"
                colorScheme="gray"
                size="sm"
                width={{ base: '30%', slg: 'auto' }}
                variant="solid"
              >
                Deposit
              </Button>
              <Button
                colorScheme="gray"
                size="sm"
                variant="solid"
                fontSize="sm"
                fontWeight="600"
                lineHeight="short"
                width={{ base: '30%', slg: 'auto' }}
              >
                Withdraw
              </Button>
              <Button
                colorScheme="gray"
                size="sm"
                variant="solid"
                fontSize="sm"
                fontWeight="600"
                lineHeight="short"
                width={{ base: '30%', slg: 'auto' }}
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
          >
            <Flex
              as={ReactRouterLink}
              to="/investment"
              _hover={{ textDecoration: 'none' }}
              borderWidth="1px"
              borderRadius="2xl"
              borderColor="#e5e7eb"
              w="49%"
              p={6}
              m={0}
              alignItems="center"
              justifyContent="space-between"
              cursor="pointer"
            >
              <Flex flexDir="column" w="80%">
                <Text m={0} fontSize="md" fontWeight="medium" lineHeight={6} mb={1}>One-step investment solution, enjoy high returns.</Text>
                <Text m={0} fontSize="sm" fontWeight="normal" lineHeight="shorter">
                  APR up to
                  <Text m={0} display="inline" fontWeight="medium" color="green"> 7.5%</Text>
                </Text>
                <Text color="#707a8a" m={0} mt={2} fontSize="sm" lineHeight="shorter">Simple Earn</Text>
              </Flex>
              <Flex>
                <Image src={earn} boxSize={20} />
              </Flex>
            </Flex>
            <Flex
              as={ReactRouterLink}
              to="/investment"
              _hover={{ textDecoration: 'none' }}
              borderWidth="1px"
              borderRadius="2xl"
              borderColor="#e5e7eb"
              w="49%"
              p={6}
              m={0}
              alignItems="center"
              justifyContent="space-between"
              cursor="pointer"
            >
              <Flex flexDir="column" w="80%">
                <Text m={0} fontSize="md" fontWeight="medium" lineHeight={6} mb={1}>Choose from a broad range of investment options.</Text>
                <Text m={0} fontSize="sm" fontWeight="normal" lineHeight="shorter">
                  S&P 500
                  <Text display="inline" fontWeight="medium" color="green"> + 48.40</Text>
                </Text>
                <Text color="#707a8a" m={0} mt={2} fontSize="sm" lineHeight="shorter">Securities</Text>
              </Flex>
              <Flex>
                <Image src={margin} boxSize={20} />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDir="column"
          // bgColor="blue"
            maxWidth="60rem"
            borderRadius="2xl"
            borderWidth={{ base: 'none', slg: '1px' }}
            borderColor="#eaecef"
            p={6}
            mb={6}
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
                fontSize="2xl"
                fontWeight="bold"
                mb={6}
              >
                <Text m={0}>Recent Transactions</Text>
                <Button
                  as={ReactRouterLink}
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
              <Flex>
                <Table
                  w="100%"
                >
                  <Thead>
                    <Tr>
                      <Th
                        justifySelf="flex-start"
                        textAlign="left"
                        textTransform="Capitalized"
                        fontWeight="100"
                        p={0}
                        borderBottom={0}
                        w="40%"
                      >
                        Transactions
                      </Th>
                      <Th
                        justifySelf="flex-end"
                        textAlign="right"
                        textTransform="Capitalized"
                        fontWeight="100"
                        p={0}
                        borderBottom={0}
                      >
                        Amount
                      </Th>
                      <Th
                        justifySelf="flex-end"
                        textAlign="right"
                        textTransform="Capitalized"
                        fontWeight="100"
                        p={0}
                        borderBottom={0}
                      >
                        Date
                      </Th>
                      <Th
                        justifySelf="flex-end"
                        textAlign="right"
                        textTransform="Capitalized"
                        fontWeight="100"
                        p={0}
                        borderBottom={0}
                        w="22%"
                      >
                        Status
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr
                      _hover={{ bgColor: '#f5f5f5' }}
                    >
                      <Td borderBottom={0} py={6} px={1}>
                        <Flex>
                          <Icon as={RiUpload2Line} boxSize={6} />
                          <Text m={0} ml={4}>Withdraw USDT</Text>
                        </Flex>
                      </Td>
                      <Td borderBottom={0} py={6} px={0} textAlign="right">- 21250.75</Td>
                      <Td borderBottom={0} py={6} px={0} textAlign="right">2023-11-18 19:42:31</Td>
                      <Td borderBottom={0} py={6} px={1} textAlign="right">Completed</Td>
                    </Tr>
                    <Tr
                      _hover={{ bgColor: '#f5f5f5' }}
                    >
                      <Td borderBottom={0} py={6} px={1}>
                        <Flex>
                          <Icon as={RiDownload2Line} boxSize={6} />
                          <Text m={0} ml={4}>Deposit USDT</Text>
                        </Flex>
                      </Td>
                      <Td borderBottom={0} py={6} px={0} textAlign="right">+ 16250.57</Td>
                      <Td borderBottom={0} py={6} px={0} textAlign="right">2023-09-15 19:42:31</Td>
                      <Td borderBottom={0} py={6} px={1} textAlign="right">Completed</Td>
                    </Tr>
                    <Tr
                      _hover={{ bgColor: '#f5f5f5' }}
                    >
                      <Td borderBottom={0} py={6} px={1}>
                        <Flex>
                          <Icon as={RiDownload2Line} boxSize={6} />
                          <Text m={0} ml={4}>Deposit USDT</Text>
                        </Flex>
                      </Td>
                      <Td borderBottom={0} py={6} px={0} textAlign="right">+ 45490.38</Td>
                      <Td borderBottom={0} py={6} px={0} textAlign="right">2023-08-21 19:42:31</Td>
                      <Td borderBottom={0} py={6} px={1} textAlign="right">Completed</Td>
                    </Tr>
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
