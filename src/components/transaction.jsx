import {
  Flex, Box, Text, Table, Thead, Tbody, Tr, Th, Td,
} from '@chakra-ui/react';
import Sidebar from './sidebar';

const Transaction = () => (
  <>
    <Flex
      bgColor="gunmetal"
      color="white"
    >
      <Sidebar />
      <Flex
        pos="relative"
        left={{ base: 20, md: 80 }}
        ml={4}
        p={5}
        minHeight="3xl"
      >
        <Box>
          <Text>Transactions</Text>
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
      </Flex>
    </Flex>
  </>
);

export default Transaction;
