/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex, Text, FormControl, Select, FormLabel, NumberInput, NumberInputField, Icon,
  NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, UnorderedList,
  ListItem, Tooltip, Image, FormHelperText, Input, Button,
  Modal, ModalOverlay, ModalContent, ModalBody, Spinner, Box,
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie';
import { FaCopy } from 'react-icons/fa';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import Sidebar from './sidebar';
import { COOKIE_TOKEN } from './dashboard';
import AccountFooter from './accountfooter';
import qrcode from '../assets/qrcode.jpg';
import api from '../api';

const Deposit = () => {
  const numberInputRef = useRef(null);
  const navigate = useNavigate();
  const address = '0x3bF71E4250631076269426d735F4Ea37c10C7256';
  const [copied, setCopied] = useState(false);
  // const [file, setFile] = useState(null); // Declare file state
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      return null; // Add return statement
    } catch (err) {
      return null;
    }
  };

  useEffect(() => {
    let timer;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [copied]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const amount = Number(numberInputRef.current.value); // get amount value
    setIsLoading(true); // start loading
    setIsOpen(true);
    setTransactionStatus('Your transaction is being processed...');

    const userDetails = Cookies.get(COOKIE_TOKEN);
    const parsedToken = JSON.parse(userDetails);
    const accountId = parsedToken.account.id;

    const timer = setTimeout(async () => {
      try {
      // eslint-disable-next-line object-shorthand
        const response = await api.put(`/accounts/${accountId}`, { amount: amount });
        setTransactionStatus('Deposit Successful');
        setTimeout(() => {
          setIsOpen(false);
          navigate('/dashboard'); // Redirect to dashboard
        }, 3000); // After 10 seconds
        return response.data; // Add return statement
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
              {transactionStatus === 'Deposit Successful' && <CheckCircleIcon boxSize={6} color="green.500" size="xl" />}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
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
              Fund Account
            </Text>
            <FormControl
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              mb={6}
              id="payment-method"
            >
              <FormLabel fontSize="xs" htmlFor="payment-method">Payment Method</FormLabel>
              <Select
              // value=""
                id="payment-method-select"
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
            <FormControl
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              mb={6}
            >
              <FormLabel fontSize="xs">Amount</FormLabel>
              <NumberInput step={500} min={1000}>
                <NumberInputField ref={numberInputRef} placeholder="Enter amount" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormHelperText fontSize="xs">Minimum deposit ≈1000 USD</FormHelperText>
            </FormControl>

            {/* <Text>Note</Text> */}
            <UnorderedList
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              textColor="#707a8a"
              fontSize="xs"
              spacing={3}
              mb={6}
            >
              <ListItem>Please make deposit before submitting the form.</ListItem>
              <ListItem>
                Deposits will be credited and available on dashboard after 1 confirmation.
              </ListItem>
              <ListItem>Crypto deposits are faster and preferable.</ListItem>
              <ListItem>
                Deposits may be via any of the supported networks:
                Tron (TRC20), BSC (BEP20), ETH (ERC20), Polygon, Arbitrum Network.
              </ListItem>
              <ListItem>Do not send NFTs to this address.</ListItem>
            </UnorderedList>

            <FormControl
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              mb={6}
              id="deposit-address"
            >
              <FormLabel htmlFor="deposit-address" fontSize="xs">Deposit Address</FormLabel>
              <Flex alignItems="center" justifyContent="space-between" bgColor="#fafafa" borderRadius="5px" p={5} minH="10rem" gap="5%" w="100%">
                <Flex alignItems="center" justifyContent="center">
                  <Image src={qrcode} boxSize="100px" minW="100px" />
                </Flex>
                <Flex alignItems="center" justifyContent="center" position="relative">
                  <Flex flexDir="column">
                    {copied && <Text alignSelf="center" fontSize="xs" bgColor="#e9e9e9" color="black" w="fit-content" p="4px">Copied!</Text>}
                    <Text fontSize="xs" color="gray.500" m={0}>Address</Text>
                    <Text fontSize={{ base: 'xs', sm: 'md' }} lineHeight={{ base: 'shorter', sm: '16px' }} fontWeight={{ base: '400', sm: '500' }} color="#1e2329" wordBreak="break-word" textAlign="start">
                      {address}
                    </Text>
                  </Flex>
                  <Icon as={FaCopy} boxSize={7} padding="4px" borderRadius="2px" bgColor="#e9ecef" color="gray" _hover={{ color: 'black' }} cursor="pointer" ml={2} display="inline" onClick={handleCopy} />
                </Flex>
              </Flex>
            </FormControl>
            <FormControl
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              mb={6}
            >
              <FormLabel fontSize="xs">Payment Receipt</FormLabel>
              <Input
                type="file"
                accept="image/*"
                // onChange={handleFileChange}
              />
            </FormControl>

            <Button
              mt={4}
              mb={20}
              colorScheme="green"
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

export default Deposit;
