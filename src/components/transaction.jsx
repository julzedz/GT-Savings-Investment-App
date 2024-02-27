/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  Flex, Divider, Box, Text, Icon,
  Table, Thead, Tr, Th, Select,
  Tbody, Td,
} from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';
// import { RiDownload2Line, RiUpload2Line } from 'react-icons/ri';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';
import api from '../api';

const Transaction = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await api.get('/users/me');
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    // Handle errors (e.g., redirect to login)
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUser();
      setUser(userData);
    };
    fetchUserData();
  }, []);

  const transactions = [
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-1,250.43', date: '2024-02-11 19:42:31', status: 'Completed',
    // },
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-10,001.92', date: '2024-02-05 14:35:15', status: 'Completed',
    // },
    // {
    //   icon: RiDownload2Line, action: 'Deposit USDT', amount: '+45,490.38', date: '2024-02-01 07:26:33', status: 'Completed',
    // },
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-2,500.34', date: '2024-01-24 05:32:15', status: 'Completed',
    // },
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-500.76', date: '2024-01-22 20:17:15', status: 'Completed',
    // },
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-950.92', date: '2024-01-20 19:28:15', status: 'Completed',
    // },
    // {
    //   icon: RiDownload2Line, action: 'Deposit USDT', amount: '+10,000', date: '2024-01-18 07:50:33', status: 'Completed',
    // },
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-16,250.57', date: '2024-01-14 14:45:15', status: 'Completed',
    // },
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-16,250.57', date: '2024-01-14 13:15:05', status: 'Completed',
    // },
    // {
    //   icon: RiDownload2Line, action: 'Deposit USDT', amount: '+15,003.89', date: '2024-01-11 04:36:33', status: 'Completed',
    // },
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-16,250.57', date: '2024-01-09 14:32:15', status: 'Completed',
    // },
    // {
    //   icon: RiDownload2Line, action: 'Deposit USDT', amount: '+12,004.21', date: '2024-01-04 07:26:33', status: 'Completed',
    // },
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-5,501.33', date: '2024-01-02 07:41:15', status: 'Completed',
    // },
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-9,002.84', date: '2024-01-01 14:32:15', status: 'Completed',
    // },
    // {
    //   icon: RiDownload2Line, action: 'Deposit USDT', amount: '+23,001.29', date: '2023-12-31 08:59:33', status: 'Completed',
    // },
    // {
    //   icon: RiDownload2Line, action: 'Deposit USDT', amount: '+30,002.76', date: '2023-12-30 07:26:20', status: 'Completed',
    // },
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-1,501.83', date: '2023-12-28 14:32:15', status: 'Completed',
    // },
    // {
    //   icon: RiDownload2Line, action: 'Deposit USDT', amount: '+5,003.12', date: '2023-12-25 21:31:33', status: 'Completed',
    // },
    // {
    //   icon: RiUpload2Line, action: 'Withdraw USDT', amount: '-4,501.92', date: '2023-12-20 14:32:15', status: 'Completed',
    // },
    // {
    //   icon: RiDownload2Line, action: 'Deposit USDT', amount: '+25,002.11', date: '2023-11-01 05:36:33', status: 'Completed',
    // },
  ];

  return (
    <>
      <Flex
        color="black"
        w="100%"
      >
        <Sidebar />
        <Flex
          ml={4}
          flexDir="column"
          minHeight="xl"
          p={5}
          flex="1"
          marginLeft={{ base: 20, md: '21rem' }}
          fontFamily="noto"
        >
          <Flex flexDir={{ base: 'column', lg: 'row' }} mb={8} alignItems="center" justifyContent="flex-start">
            <Text m={0} alignSelf="flex-start" fontSize="2xl" fontWeight="medium" pr={8} pb={{ base: 4, lg: 0 }}>
              Transactions
            </Text>
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
          <Text
            p={0}
            m={0}
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            fontSize={{ base: 'lg', xl: '2xl' }}
            fontWeight="bold"
            mb={6}
          >
            Transaction History
          </Text>
          <Flex gap={6} mt={3}>
            <Select variant="filled" w={32} textOverflow="ellipsis" icon={<MdArrowDropDown />} placeholder="Past 90 days">
              <option value="option2">Past 30 days</option>
              <option value="option3">Past 7 days</option>
            </Select>
            <Select mb={12} variant="filled" w={32} textOverflow="ellipsis" icon={<MdArrowDropDown />} placeholder="All">
              <option value="option3">Deposit</option>
              <option value="option3">Withdrawal</option>
            </Select>
          </Flex>
          <Box overflowX={{ base: 'scroll' }} mb="96">
            <Table>
              <Thead>
                <Tr>
                  <Th>Transactions</Th>
                  <Th>Amount</Th>
                  <Th>Date</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transactions.length > 0
                  ? transactions.map((transaction) => (
                    <Tr key={transaction.id} _hover={{ bgColor: '#f0f1f1' }}>
                      <Td py={6} px={1}>
                        <Flex>
                          <Icon as={transaction.icon} boxSize={6} />
                          <Text m={0} ml={4} fontSize="sm">{transaction.action}</Text>
                        </Flex>
                      </Td>
                      <Td px={0}>{transaction.amount}</Td>
                      <Td py={6} px={0} fontSize="sm">{transaction.date}</Td>
                      <Td py={6} px={1} fontSize="sm">{transaction.status}</Td>
                    </Tr>
                  )) : <Text textAlign="center" p={6}> </Text>}
              </Tbody>
              {/* <Tbody>
                <Tr>
                  <Td>Deposit</Td>
                  <Td>$1250.00</Td>
                  <Td>2021-12-15</Td>
                  <Td>Completed</Td>
                </Tr>
                <Tr>
                  <Td>Withdrawal</Td>
                  <Td>$55,000.00</Td>
                  <Td>2021-02-17</Td>
                  <Td>Completed</Td>
                </Tr>
                <Tr>
                  <Td>Deposit</Td>
                  <Td>$15,340.00</Td>
                  <Td>2021-10-09</Td>
                  <Td>Completed</Td>
                </Tr>
                <Tr>
                  <Td>Withdrawal</Td>
                  <Td>$5,000.00</Td>
                  <Td>2021-01-26</Td>
                  <Td>Completed</Td>
                </Tr>
                <Tr>
                  <Td>Withdrawal</Td>
                  <Td>$3,720.00</Td>
                  <Td>2021-03-14</Td>
                  <Td>Completed</Td>
                </Tr>
              </Tbody> */}
            </Table>
          </Box>
          <AccountFooter />
        </Flex>
      </Flex>
    </>
  );
};

export default Transaction;
