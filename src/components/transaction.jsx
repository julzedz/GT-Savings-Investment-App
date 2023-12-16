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
        left="80"
      >
        <Box>
          <Text>Transactions</Text>
          <Table>
            <Thead>
              <Tr>
                <Th>Transaction ID</Th>
                <Th>Name</Th>
                <Th>Transaction Type</Th>
                <Th>Date</Th>
                <Th>Status</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>874201569</Td>
                <Td>Clifford Mgbeojikwe</Td>
                <Td>Deposit</Td>
                <Td>1/1/2021</Td>
                <Td>Completed</Td>
                <Td>$1250.00</Td>
              </Tr>
              <Tr>
                <Td>326987415</Td>
                <Td>Hyginus Mbonu</Td>
                <Td>Withdrawal</Td>
                <Td>1/2/2021</Td>
                <Td>Completed</Td>
                <Td>$55,000.00</Td>
              </Tr>
              <Tr>
                <Td>590134682</Td>
                <Td>Ozumba Mbadiwe</Td>
                <Td>Deposit</Td>
                <Td>1/5/2021</Td>
                <Td>Completed</Td>
                <Td>$15,340.00</Td>
              </Tr>
              <Tr>
                <Td>712465839</Td>
                <Td>Ojo Maduekwe</Td>
                <Td>Withdrawal</Td>
                <Td>11/2/2021</Td>
                <Td>Completed</Td>
                <Td>$5,000.00</Td>
              </Tr>
              <Tr>
                <Td>945803216</Td>
                <Td>Sabinus Okafo</Td>
                <Td>Withdrawal</Td>
                <Td>13/5/2021</Td>
                <Td>Completed</Td>
                <Td>$3,720.00</Td>
              </Tr>
              <Tr>
                <Td>874201569</Td>
                <Td>Clifford Mgbeojikwe</Td>
                <Td>Deposit</Td>
                <Td>1/1/2021</Td>
                <Td>Completed</Td>
                <Td>$1250.00</Td>
              </Tr>
              <Tr>
                <Td>326987415</Td>
                <Td>Hyginus Mbonu</Td>
                <Td>Withdrawal</Td>
                <Td>1/2/2021</Td>
                <Td>Completed</Td>
                <Td>$55,000.00</Td>
              </Tr>
              <Tr>
                <Td>590134682</Td>
                <Td>Ozumba Mbadiwe</Td>
                <Td>Deposit</Td>
                <Td>1/5/2021</Td>
                <Td>Completed</Td>
                <Td>$15,340.00</Td>
              </Tr>
              <Tr>
                <Td>712465839</Td>
                <Td>Ojo Maduekwe</Td>
                <Td>Withdrawal</Td>
                <Td>11/2/2021</Td>
                <Td>Completed</Td>
                <Td>$5,000.00</Td>
              </Tr>
              <Tr>
                <Td>945803216</Td>
                <Td>Sabinus Okafo</Td>
                <Td>Withdrawal</Td>
                <Td>13/5/2021</Td>
                <Td>Completed</Td>
                <Td>$3,720.00</Td>
              </Tr>
              <Tr>
                <Td>874201569</Td>
                <Td>Clifford Mgbeojikwe</Td>
                <Td>Deposit</Td>
                <Td>1/1/2021</Td>
                <Td>Completed</Td>
                <Td>$1250.00</Td>
              </Tr>
              <Tr>
                <Td>326987415</Td>
                <Td>Hyginus Mbonu</Td>
                <Td>Withdrawal</Td>
                <Td>1/2/2021</Td>
                <Td>Completed</Td>
                <Td>$55,000.00</Td>
              </Tr>
              <Tr>
                <Td>590134682</Td>
                <Td>Ozumba Mbadiwe</Td>
                <Td>Deposit</Td>
                <Td>1/5/2021</Td>
                <Td>Completed</Td>
                <Td>$15,340.00</Td>
              </Tr>
              <Tr>
                <Td>712465839</Td>
                <Td>Ojo Maduekwe</Td>
                <Td>Withdrawal</Td>
                <Td>11/2/2021</Td>
                <Td>Completed</Td>
                <Td>$5,000.00</Td>
              </Tr>
              <Tr>
                <Td>945803216</Td>
                <Td>Sabinus Okafo</Td>
                <Td>Withdrawal</Td>
                <Td>13/5/2021</Td>
                <Td>Completed</Td>
                <Td>$3,720.00</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Flex>
  </>
);

export default Transaction;
