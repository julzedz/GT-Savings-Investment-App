import {
  Flex, Text, Divider,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import Sidebar from './sidebar';

const Dashboard = () => (
  <>
    <Flex
      bgColor="gunmetal"
      color="white"
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
        <Flex mb={8} alignItems="center" justifyContent="flex-start">
          <Text m={0} fontSize="2xl" fontWeight="medium" pr={8}>
            Welcome Rob!
          </Text>
          <Divider w="1px" color="#eaecef" orientation="vertical" />
          <Flex fontSize="sm" lineHeight="shorter" alignItems="center" px={8}>
            <Flex alignItems="center" justifyContent="center" m={0} mr={12} flexDir="column">
              <Text color="#929aa5" m={0} mb={1}>User ID</Text>
              <Text m={0}>123456789</Text>
            </Flex>
            <Flex alignItems="center" justifyContent="center" m={0} mr={12} flexDir="column">
              <Text color="#929aa5" m={0} mb={1}>User Type</Text>
              <Text m={0}>Personal</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Flex>
            <Text> Estimated Balance</Text>
            <ViewIcon />
            <ViewOffIcon display="none" />
          </Flex>
        </Flex>
        <h3>My Wallet</h3>
        <h5>Hi User</h5>
        <h5>$355,760.00</h5>
        <h3>Send a payment</h3>
        <h3>Request a payment</h3>
        <h3>Transaction history</h3>
      </Flex>
    </Flex>
  </>
);

export default Dashboard;
