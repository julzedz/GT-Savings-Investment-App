import { Flex } from '@chakra-ui/react';
import Sidebar from './sidebar';

const Dashboard = () => (
  <>
    <Flex
      bgColor="gunmetal"
      color="white"
      w="100%"
    >
      <Sidebar />
      <Flex flexDir="column" minHeight="3xl" p={5} pos="relative" left={{ base: 20, md: 80 }} overflowY="scroll">
        <h2>Dashboard</h2>
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
