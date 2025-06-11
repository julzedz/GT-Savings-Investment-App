import React from 'react';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Badge,
  Button,
  Icon,
  HStack,
  Box,
  Text,
  Skeleton,
} from '@chakra-ui/react';
import { RiDownload2Line, RiUpload2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import EmptyState from './EmptyState';
import useStore from '../store/useStore';

const RecentTransactionsTable = ({ showActionColumn = true, limit = 5 }) => {
  const navigate = useNavigate();
  const { isLoading, user, getRecentTransactions } = useStore();
  const transactions = getRecentTransactions(limit);

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
  ];

  if (showActionColumn) {
    headers.push({ text: 'Action', justify: 'center', textAlign: 'center' });
  }

  if (isLoading) {
    return (
      <Box mb={12}>
        <Text>Loading transactions...</Text>
        <Skeleton height="20px" my="10px" />
        <Skeleton height="20px" my="10px" />
        <Skeleton height="20px" my="10px" />
      </Box>
    );
  }

  return (
    <Box overflowX={{ base: 'scroll' }} mb={12}>
      {transactions.length > 0 ? (
        <Table variant="simple" size="md" width="full">
          <Thead>
            <Tr>
              {headers.map((header, index) => (
                <Th
                  key={header.text}
                  textAlign={header.textAlign}
                  textTransform="capitalize"
                  fontWeight="bold"
                  fontSize="sm"
                  py={3}
                  px={2}
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
                      {Number(transaction.amount).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </Text>
                  </HStack>
                </Td>
                <Td py={3} px={2} fontSize="sm" textAlign="center">
                  <Badge
                    colorScheme={
                      transaction.transaction_type === 'debit' ? 'red' : 'green'
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
                {showActionColumn && (
                  <Td py={3} px={2} fontSize="sm" textAlign="center">
                    <Button
                      size="xs"
                      colorScheme="blue"
                      onClick={() => handleViewReceipt(transaction)}
                    >
                      Receipt
                    </Button>
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <EmptyState message="No transactions found." />
      )}
    </Box>
  );
};

export default RecentTransactionsTable;
