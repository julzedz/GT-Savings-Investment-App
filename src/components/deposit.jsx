import {
  Flex, Text, FormControl, Select, FormLabel,
} from '@chakra-ui/react';
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
        <Flex bgColor="red" minHeight="3xl" flexDir="column">
          <Text
            alignSelf="center"
            justifySelf="center"
            fontSize={{ base: 'lg', xl: '2xl' }}
            fontWeight="bold"
            mb={6}
          >
            Fund your account
          </Text>
          <FormControl>
            <FormLabel fontSize="xs" htmlFor="payment">Payment Method</FormLabel>
            <Select
              value=""
              id="payment"
              placeholder="Select payment method"
            >
              <option value="USDT">USDT</option>
              <option value="USDC">USDC</option>
              <option value="BTC">BTC</option>
              <option value="ETH">Ethereum</option>
              <option value="Germany">Germany</option>
            </Select>
          </FormControl>
        </Flex>
        <AccountFooter />
      </Flex>
    </Flex>
  </>
);

export default Deposit;
