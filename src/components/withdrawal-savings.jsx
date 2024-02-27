import React, { useRef, useState } from 'react';
import {
  Flex, Text, FormControl, FormLabel, Select, NumberInput, NumberInputField, NumberInputStepper,
  NumberIncrementStepper, NumberDecrementStepper, Input, Button, ListItem, UnorderedList,
  Modal, ModalOverlay, ModalContent, ModalBody, Box, Spinner,
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { WarningIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { COOKIE_TOKEN } from './dashboard';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';
import api from '../api';

const userDetails = Cookies.get(COOKIE_TOKEN);
let parsedToken;
let savingsAccount;
if (userDetails) {
  parsedToken = JSON.parse(userDetails);
  if (parsedToken.account) {
    savingsAccount = parsedToken.account.savings_account;
  }
}

const Withdrawalsavings = () => {
  const numberInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const withdraw = Number(numberInputRef.current.value);
    setIsLoading(true); // start loading
    setIsOpen(true);
    setTransactionStatus('Your transaction is being processed...');

    const userDetails = Cookies.get(COOKIE_TOKEN);
    const parsedToken = JSON.parse(userDetails);
    const accountId = parsedToken.account.id;

    setTimeout(async () => {
      try {
        // eslint-disable-next-line object-shorthand
        const response = await api.put(`/accounts/${accountId}`, { withdraw: withdraw });
        setTransactionStatus('Withdrawal Successful');
        setTimeout(() => {
          setIsOpen(false);
          navigate('/dashboard'); // Redirect to dashboard
        }, 3000); // After 10 seconds
        return response.data;
      } catch (error) {
        setTransactionStatus('Transaction Failed');
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
        return null;
      } finally {
        setIsLoading(false);
      }
    }, 5000);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={10} fontFamily="noto" fontSize="md" fontWeight="700">
              <Text mb={4}>{transactionStatus}</Text>
              {transactionStatus === 'Transaction Failed' && <WarningIcon w={8} h={8} color="red.500" ml={2} />}
              {transactionStatus === 'Your transaction is being processed...' && (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="green.500"
                size="xl"
              />
              )}
              {transactionStatus === 'Withdrawal Successful' && <CheckCircleIcon boxSize={6} color="green.500" size="xl" />}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
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
            <FormControl
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              mb={6}
            >
              <FormLabel fontSize="xs">Withdraw amount</FormLabel>
              <NumberInput step={100} min={500}>
                <NumberInputField ref={numberInputRef} placeholder="Enter amount" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              mb={6}
            >
              <FormLabel fontSize="xs">Send To: Address</FormLabel>
              <Input
              // value=""
              // onChange=""
                type="text"
                placeholder="Enter address"
              />
            </FormControl>
            <FormControl
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              mb={6}
            >
              <FormLabel fontSize="xs">Select network</FormLabel>
              <Select
                // value=""
                id="networks"
                placeholder="Network"
              >
                <option value="BSC">BSC (BEP20)</option>
                <option value="ETH">Ethereum (ERC20)</option>
                <option value="MATIC">Polygon</option>
                <option value="Tron">Tron (TRC20)</option>
                <option value="Arbitrum">Arbitrum One</option>
              </Select>
            </FormControl>
            <Flex
              justifyContent="space-between"
              fontFamily="new"
              width={{
                base: '100%', sm: '70%', md: '60%', lg: '50%', slg: '40%', xl: '30%',
              }}
              mb={9}
            >
              <Flex flexDir="column">
                <Text fontSize="xs" mb={1} color="gray">Wallet balance</Text>
                <Text display="inline">
                  <Text display="inline">
                    {savingsAccount ? `Balance: ${savingsAccount}` : '0.00'}
                    {' '}
                  </Text>
                  USD
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Text fontSize="xs" mb={1} color="gray">Minimum withdrawal</Text>
                <Text>500 USD</Text>
              </Flex>
            </Flex>
            <UnorderedList
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              textColor="#707a8a"
              fontSize="xs"
              spacing={3}
              mb={6}
            >
              <ListItem>Arrival time is typically ≈10 mins</ListItem>
              <ListItem>
                Please ensure your receiving platform supports the token
                and network you are withdrawing.
              </ListItem>
              <ListItem>Crypto deposits are faster and preferable.</ListItem>
            </UnorderedList>
            <Button
              mt={4}
              mb={20}
              colorScheme="green"
                // isLoading={props.isSubmitting}
                // disabled={props.isSubmitting}
              type="submit"
              fontFamily="noto"
              w="40%"
              alignSelf="center"
              p={6}
              onClick={handleSubmit}
              isLoading={isLoading}
            >
              Submit
            </Button>
          </Flex>
          <AccountFooter />
        </Flex>
      </Flex>
    </>
  );
};

export default Withdrawalsavings;
