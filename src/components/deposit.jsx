import { Flex } from '@chakra-ui/react';
import Sidebar from './sidebar';

const Deposit = () => (
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
      <h2>Deposit Services</h2>
      <h3>Deposit</h3>
    </Flex>
  </Flex>
);

export default Deposit;
