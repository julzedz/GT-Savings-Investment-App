import React from 'react';
import {
  Flex, Text, FormControl, FormLabel, Select,
} from '@chakra-ui/react';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';

const Withdrawal = () => (
  <Flex
    color="black"
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
      fontFamily="noto"
    >
      <Flex minHeight="3xl" flexDir="column">
        <Text
          alignSelf="center"
          justifySelf="center"
          fontSize={{ base: 'lg', xl: '2xl' }}
          fontWeight="bold"
          mb={6}
        >
          Withdraw Fund
        </Text>
        <FormControl
          w={{
            base: '100%', md: '80%', lg: '70%', slg: '60%',
          }}
          mb={6}
        >
          <FormLabel fontSize="xs">Select coin</FormLabel>
          <Select
              // value=""
            id="payment"
            placeholder="Coin"
          >
            <option value="USDT">USDT</option>
            <option value="USDC">USDC</option>
            <option value="BTC">BTC</option>
            <option value="ETH">Ethereum</option>
          </Select>
        </FormControl>
      </Flex>
      <AccountFooter />
    </Flex>
  </Flex>
);

export default Withdrawal;
