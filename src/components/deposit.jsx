import { Flex } from '@chakra-ui/react';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';

const Deposit = () => (
  <>
    <Flex>
      <Sidebar />
      <Flex
        ml={4}
        flexDir="column"
        minHeight="3xl"
        p={5}
        flex="1"
        marginLeft={{ base: 20, md: '21rem' }}
        fontFamily="noto"
      >
        <Flex minHeight="3xl" flexDir="column">
          <h2>Deposit Services</h2>
          <h3>Deposit</h3>
        </Flex>
        <AccountFooter />
      </Flex>
    </Flex>
  </>
);

export default Deposit;
