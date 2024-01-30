/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  Flex, Divider, Box, Text, Table, Thead, Tbody, Tr, Th, Td, Select,
} from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';
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
            <Select variant="filled" w={32} textOverflow="ellipsis" icon={<MdArrowDropDown />} placeholder="Past 7 days">
              <option value="option2">Past 30 days</option>
              <option value="option3">Past 90 days</option>
            </Select>
            <Select mb={12} variant="filled" w={32} textOverflow="ellipsis" icon={<MdArrowDropDown />} placeholder="All">
              <option value="option3">Deposit</option>
              <option value="option3">Withdrawal</option>
            </Select>
          </Flex>
          <Box overflowX={{ base: 'scroll' }}>
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
              </Tbody>
            </Table>
          </Box>
          <AccountFooter />
        </Flex>
      </Flex>
    </>
  );
};

export default Transaction;
