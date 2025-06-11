/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import {
  Flex,
  Divider,
  Box,
  Text,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Select,
  Tbody,
  Td,
  Badge,
  Button,
  FormControl,
  Input,
  HStack,
} from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';
import { RiDownload2Line, RiUpload2Line } from 'react-icons/ri';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';
import Header from './Header';
import EmptyState from './EmptyState';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';

const Transaction = () => {
  const navigate = useNavigate();
  const { user, isLoading, transactions, fetchUser, fetchTransactions } =
    useStore();

  useEffect(() => {
    const fetchData = async () => {
      await fetchUser();
      await fetchTransactions();
    };
    fetchData();
  }, [fetchUser, fetchTransactions]);

  let balance = 0;
  if (user && user.account) {
    balance = user.account.savings_account;
  }

  const handleViewReceipt = (transaction) => {
    const senderDetails = user;
    const receiverDetails = {
      name: transaction.recipient_name || 'N/A',
      accountNumber: transaction.recipient_account_number || 'N/A',
      bank: transaction.recipient_bank || 'N/A',
      type: transaction.recipient_type || 'N/A',
    };

    navigate('/receipt', {
      state: {
        transaction,
        sender: senderDetails,
        receiver: receiverDetails,
        amount: transaction.amount,
        newBalance: null,
        bankLogo: '/src/assets/bank-leaf.png',
      },
    });
  };

  const headers = [
    { text: 'Amount', justify: 'flex-start', textAlign: 'left' },
    { text: 'Type', justify: 'center', textAlign: 'center' },
    { text: 'Status', justify: 'center', textAlign: 'center' },
    { text: 'Reference ID', justify: 'center', textAlign: 'left' },
    { text: 'Description', justify: 'center', textAlign: 'left' },
    { text: 'Created', justify: 'center', textAlign: 'left' },
    { text: 'Action', justify: 'center', textAlign: 'center' },
  ];

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
            p={0}
            m={0}
            mx={6}
            mt={4}
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            fontSize={{ base: 'lg', xl: '2xl' }}
            fontWeight="bold"
            mb={6}
          >
            <Text m={0}>Transaction History</Text>
          </Flex>
          <Flex mx={6} gap={6} mt={3} mb={6}>
            <FormControl flex="1">
              <Input placeholder="Search by transaction reference..." />
            </FormControl>
            <Select
              variant="filled"
              w={32}
              textOverflow="ellipsis"
              icon={<MdArrowDropDown />}
              placeholder="Past 90 days"
            >
              <option value="option2">Past 30 days</option>
              <option value="option3">Past 7 days</option>
            </Select>
            <Select
              variant="filled"
              w={32}
              textOverflow="ellipsis"
              icon={<MdArrowDropDown />}
              placeholder="All"
            >
              <option value="option3">Deposit</option>
              <option value="option3">Withdrawal</option>
            </Select>
          </Flex>
          {isLoading ? (
            <Box mx={6}>
              <Text>Loading transactions...</Text>
            </Box>
          ) : (
            <Box overflowX={{ base: 'scroll' }} mb={12} mx={6}>
              {transactions.length > 0 ? (
                <Table variant="simple" size="md" width="full">
                  <Thead>
                    <Tr>
                      {headers.map((header) => (
                        <Th
                          key={header.text}
                          textAlign={header.textAlign}
                          textTransform="capitalize"
                          fontWeight="bold"
                          fontSize="sm"
                          py={3}
                          px={2}
                        >
                          {header.text}
                        </Th>
                      ))}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {transactions.map((transaction) => (
                      <Tr
                        key={transaction.id || transaction.reference_id}
                        _hover={{ bgColor: 'gray.50' }}
                      >
                        <Td py={3} px={2} fontSize="sm">
                          <HStack>
                            <Icon
                              as={
                                transaction.transaction_type === 'debit'
                                  ? RiUpload2Line
                                  : RiDownload2Line
                              }
                              boxSize={5}
                              color={
                                transaction.transaction_type === 'debit'
                                  ? 'red.500'
                                  : 'green.500'
                              }
                            />
                            <Text fontWeight="medium">
                              $
                              {Number(transaction.amount).toLocaleString(
                                undefined,
                                { minimumFractionDigits: 2 }
                              )}
                            </Text>
                          </HStack>
                        </Td>
                        <Td py={3} px={2} fontSize="sm" textAlign="center">
                          <Badge
                            colorScheme={
                              transaction.transaction_type === 'debit'
                                ? 'red'
                                : 'green'
                            }
                            textTransform="capitalize"
                            px={2}
                            py={1}
                            borderRadius="md"
                          >
                            {transaction.transaction_type}
                          </Badge>
                        </Td>
                        <Td py={3} px={2} fontSize="sm" textAlign="center">
                          <Badge
                            colorScheme={
                              transaction.status === 'processed'
                                ? 'green'
                                : transaction.status === 'pending'
                                  ? 'yellow'
                                  : 'red'
                            }
                            textTransform="capitalize"
                            px={2}
                            py={1}
                            borderRadius="md"
                          >
                            {transaction.status}
                          </Badge>
                        </Td>
                        <Td py={3} px={2} fontSize="sm">
                          {transaction.reference_id || 'N/A'}
                        </Td>
                        <Td py={3} px={2} fontSize="sm">
                          {transaction.description || 'N/A'}
                        </Td>
                        <Td py={3} px={2} fontSize="sm">
                          {transaction.formatted_created_at || 'N/A'}
                        </Td>
                        <Td py={3} px={2} fontSize="sm" textAlign="center">
                          <Button
                            size="xs"
                            colorScheme="blue"
                            onClick={() => handleViewReceipt(transaction)}
                          >
                            Receipt
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              ) : (
                <EmptyState message="No transactions found." />
              )}
            </Box>
          )}
          <Flex alignSelf="center" mt="auto">
            <AccountFooter />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Transaction;
