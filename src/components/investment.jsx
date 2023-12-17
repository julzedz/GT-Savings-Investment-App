import { Flex } from '@chakra-ui/react';
import Sidebar from './sidebar';

const Investment = () => (
  <>
    <Flex
      bgColor="gunmetal"
      color="white"
      width="100%"
    >
      <Sidebar />
      <Flex
        flexDir="column"
        ml={4}
        p={5}
        pos="relative"
        left={{ base: 20, md: 80 }}
        minHeight="4xl"
      >
        <h2>Investment Services</h2>
        <h3>Investments</h3>
        <h3>Insurance</h3>
      </Flex>
    </Flex>
  </>
);

export default Investment;
