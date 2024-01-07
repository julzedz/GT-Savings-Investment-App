import {
  Flex, Text, FormControl, Select, FormLabel, NumberInput, NumberInputField, Icon,
  NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, UnorderedList,
  ListItem, Tooltip,
} from '@chakra-ui/react';
import { FaCopy } from 'react-icons/fa';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';
// import Tether from '../assets/icons8-tether.svg';

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
              <a href="https://icons8.com/icon/U8V97McJaXmr/tether">Tether</a>
              icon by
              <a href="https://icons8.com">
                Icons8
              </a>
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
              <NumberInputField placeholder="Min. deposit 1000 USDT" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <Text>Note</Text>
          <UnorderedList fontSize="xs" spacing={3} mb={6}>
            <ListItem>Please make deposit before submitting the form.</ListItem>
            <ListItem>
              Deposits will be credited and available on dashboard after 1 confirmation.
            </ListItem>
            <ListItem>Crypto deposits are faster and preferable.</ListItem>
            <ListItem>Do not send NFTs to this address.</ListItem>
          </UnorderedList>

          <FormControl w="60%" mb={6}>
            <FormLabel fontSize="xs">Deposit Address</FormLabel>
            <Text fontSize="14px" lineHeight="20px" fontWeight="500" color="#1e2329" wordBreak="break-word" textAlign="start">
              0x3bF71E4250631076269426d735F4Ea37c10C7256
            </Text>
            <Tooltip label="Click to copy" fontFamily="new" fontSize="xs">
              <Icon as={FaCopy} cursor="pointer" ml={1} display="inline" />
            </Tooltip>
          </FormControl>
        </Flex>
        <AccountFooter />
      </Flex>
    </Flex>
  </>
);

export default Deposit;
