import {
  Flex, Text, Box, Divider,
} from '@chakra-ui/react';
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
        bgColor="green"
      >
        <Flex bgColor="blue" alignItems="center" justifyContent="flex-start">
          <Box fontFamily="lit" pr={5}>
            Welcome Firstname!
          </Box>
          <Divider />
          <Flex>
            <Flex m={0} flexDir="column">
              <Text m={0}>User ID</Text>
              <Text>123456789</Text>
            </Flex>
            <Flex m={0} flexDir="column">
              <Text m={0}>User Type</Text>
              <Text>Personal</Text>
            </Flex>
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
