import { Flex } from '@chakra-ui/react';
import Sidebar from './sidebar';

const Account = () => (
  <>
    <Flex
      bgColor="gunmetal"
      color="white"
    >
      <Sidebar />
      <Flex flexDir="column" pos="relative" left="80">
        <h2>Account Page</h2>
        <h3>My Wallet</h3>
        <h5>Hi User</h5>
        <h5>$355,760</h5>
        <h3>Send a payment</h3>
        <h3>Request a payment</h3>
        <h3>Transaction history</h3>
        <h2>Account Page</h2>
        <h3>My Wallet</h3>
        <h5>Hi User</h5>
        <h5>$355,760</h5>
        <h3>Send a payment</h3>
        <h3>Request a payment</h3>
        <h3>Transaction history</h3>
        <h2>Account Page</h2>
        <h3>My Wallet</h3>
        <h5>Hi User</h5>
        <h5>$355,760</h5>
        <h3>Send a payment</h3>
        <h3>Request a payment</h3>
        <h3>Transaction history</h3>
      </Flex>
    </Flex>
  </>
);

export default Account;
