import { Flex } from '@chakra-ui/react';
import Sidebar from './sidebar';

const Investment = () => (
  <>
    <Flex
      bgColor="gunmetal"
      color="white"
    >
      <Sidebar />
      <Flex
        flexDir="column"
        pos="relative"
        left="80"
        minHeight="3xl"
      >
        <h2>Investment Services</h2>
        <h3>Investments</h3>
        <h3>Insurance</h3>
      </Flex>
    </Flex>
  </>
);

export default Investment;
