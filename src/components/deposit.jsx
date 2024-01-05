import {
  Flex, Text, FormControl, Select, FormLabel, NumberInput, NumberInputField,
  NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
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
        <Flex minHeight="3xl" flexDir="column">
          <Text
            alignSelf="center"
            justifySelf="center"
            fontSize={{ base: 'lg', xl: '2xl' }}
            fontWeight="bold"
            mb={6}
          >
            Fund your account
          </Text>
          <FormControl w="60%" mb={6}>
            <FormLabel fontSize="xs">Payment Method</FormLabel>
            <Select
              // value=""
              id="payment"
              placeholder="Select payment method"
            >
              <option value="USDT">USDT</option>
              <option value="USDC">USDC</option>
              <option value="BTC">BTC</option>
              <option value="ETH">Ethereum</option>
              <option value="cashapp">Cashapp</option>
              <option value="venmo">Venmo</option>
              <option value="paypal">PayPal</option>
              <option value="zelle">Zelle</option>
            </Select>
          </FormControl>
          <FormControl w="60%" mb={6}>
            <FormLabel fontSize="xs">Amount</FormLabel>
            <NumberInput step={1000} min={1000}>
              <NumberInputField placeholder="Minimum ≈ 1000 USDT" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Flex>
        <AccountFooter />
      </Flex>
    </Flex>
  </>
);

export default Deposit;
