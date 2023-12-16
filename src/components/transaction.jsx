import {
  Flex, Box, Text, Table, Thead, Tbody, Tr, Th, Td,
} from '@chakra-ui/react';
import Sidebar from './sidebar';

const Transaction = () => (
  <>
    <Flex>
      <Sidebar />
      <Flex>
        <Box>
          <Text>Transactions</Text>
          <Table>
            <Thead>
              <Tr>
                <Th>Transaction ID</Th>
                <Th>Transaction Type</Th>
                <Th>Amount</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Deposit</Td>
                <Td>$100.00</Td>
                <Td>1/1/2021</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Withdrawal</Td>
                <Td>$50.00</Td>
                <Td>1/2/2021</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Flex>
  </>
);

export default Transaction;
