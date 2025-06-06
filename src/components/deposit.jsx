import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Text,
  FormControl,
  Select,
  FormLabel,
  NumberInput,
  NumberInputField,
  Icon,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  UnorderedList,
  ListItem,
  Tooltip,
  Image,
  FormHelperText,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spinner,
  Box,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  HStack,
  useToast,
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { FaCopy } from 'react-icons/fa';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import Sidebar from './sidebar';
import { COOKIE_TOKEN } from './dashboard';
import AccountFooter from './accountfooter';
import api from '../api';
import Header from './Header';

const Deposit = () => {
  const numberInputRef = useRef(null);
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [paymentReceipt, setPaymentReceipt] = useState(null);
  const toast = useToast();

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    toast({
      title: 'Copied!',
      description: `${value} copied to clipboard.`,
      status: 'success',
      duration: 1500,
      isClosable: true,
      position: 'top',
    });
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
    setTimeout(async () => {
      try {
        const response = await api.put(`/accounts/${accountId}`, {
          amount: amount,
        });
        setTransactionStatus('Deposit Successful');
        setTimeout(() => {
          setIsOpen(false);
          navigate('/dashboard'); // Redirect to dashboard
        }, 3000);
        return null; // response.data; // Add return statement
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

  const [savings, setSavings] = useState(() => {
    const userDetails = Cookies.get(COOKIE_TOKEN);
    if (userDetails) {
      const parsedToken = JSON.parse(userDetails);
      if (parsedToken.account) {
        return parsedToken.account.savings_account;
      }
    }
    return 0;
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={10}
              fontFamily="noto"
              fontSize="md"
              fontWeight="700"
            >
              <Text mb={4}>{transactionStatus}</Text>
              {transactionStatus === 'Transaction Failed' && (
                <WarningIcon w={8} h={8} color="red.500" ml={2} />
              )}
              {transactionStatus ===
                'Your transaction is being processed...' && (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="green.500"
                  size="xl"
                />
              )}
              {transactionStatus === 'Deposit Successful' && (
                <CheckCircleIcon boxSize={6} color="green.500" size="xl" />
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex>
        <Sidebar />
        <Flex
          flexDir="column"
          minHeight="3xl"
          flex="1"
          marginLeft={{ base: 20, md: '11.01rem' }}
          overflowY="scroll"
          fontFamily="noto"
          bgColor="gray.200"
        >
          <Header isLoading={false} balance={savings || 0} />
          <Flex ml={6} minHeight="3xl" flexDir="column">
            <Text
              alignSelf="center"
              justifySelf="center"
              fontSize={{ base: 'lg', xl: '2xl' }}
              fontWeight="bold"
              mb={6}
            >
              Make Deposit
            </Text>

            {/* Deposit Amount Input */}
            <Box mx={6} mb={6}>
              <FormLabel fontWeight="bold">Deposit Amount</FormLabel>
              <InputGroup size="lg">
                <InputLeftAddon bg="gray.100" fontWeight="bold">
                  $
                </InputLeftAddon>
                <NumberInput
                  value={depositAmount}
                  min={1}
                  onChange={(valueString, valueNumber) => {
                    if (valueString === '') {
                      setDepositAmount('');
                    } else {
                      setDepositAmount(valueNumber);
                    }
                  }}
                  flex={1}
                  w="full"
                >
                  <NumberInputField
                    borderLeftRadius={0}
                    borderRightRadius={0}
                    placeholder="Enter amount"
                    ref={numberInputRef}
                  />
                </NumberInput>
                <InputRightAddon bg="gray.100">.00</InputRightAddon>
              </InputGroup>
              <HStack mt={3} spacing={3}>
                {[100, 500, 1000, 5000, 10000].map((amt) => (
                  <Button
                    key={amt}
                    size="sm"
                    variant="outline"
                    onClick={() => setDepositAmount(amt)}
                  >
                    ${amt}
                  </Button>
                ))}
              </HStack>
            </Box>

            {/* Bank Transfer Details */}
            <Box mx={6} mb={6}>
              <Text fontWeight="bold" mb={2} fontSize="lg">
                Bank Transfer Details
              </Text>
              <Box bg="gray.50" borderRadius="lg" p={6}>
                <Flex gap={4} mb={4}>
                  <FormControl flex={1}>
                    <FormLabel fontSize="sm">Bank Name</FormLabel>
                    <Input value="Mining Bank" isReadOnly />
                    <Icon
                      as={FaCopy}
                      boxSize={5}
                      color="gray.400"
                      cursor="pointer"
                      position="absolute"
                      right={3}
                      top={9}
                      onClick={() => handleCopy('Mining Bank')}
                    />
                  </FormControl>
                  <FormControl flex={1}>
                    <FormLabel fontSize="sm">Account Name</FormLabel>
                    <Input value="Miller Frost" isReadOnly />
                    <Icon
                      as={FaCopy}
                      boxSize={5}
                      color="gray.400"
                      cursor="pointer"
                      position="absolute"
                      right={3}
                      top={9}
                      onClick={() => handleCopy('Miller Frost')}
                    />
                  </FormControl>
                </Flex>
                <Flex gap={4}>
                  <FormControl flex={1}>
                    <FormLabel fontSize="sm">Account Number</FormLabel>
                    <Input value="9938838352" isReadOnly />
                    <Icon
                      as={FaCopy}
                      boxSize={5}
                      color="gray.400"
                      cursor="pointer"
                      position="absolute"
                      right={3}
                      top={9}
                      onClick={() => handleCopy('9938838352')}
                    />
                  </FormControl>
                  <FormControl flex={1}>
                    <FormLabel fontSize="sm">Swift Code</FormLabel>
                    <Input value="3222ASD" isReadOnly />
                    <Icon
                      as={FaCopy}
                      boxSize={5}
                      color="gray.400"
                      cursor="pointer"
                      position="absolute"
                      right={3}
                      top={9}
                      onClick={() => handleCopy('3222ASD')}
                    />
                  </FormControl>
                </Flex>
              </Box>
            </Box>

            {/* File Upload for Receipt */}
            <Box mx={6} mb={6}>
              <FormLabel fontWeight="bold">Upload Payment Proof</FormLabel>
              <Box
                border="2px dashed #CBD5E0"
                borderRadius="lg"
                p={8}
                textAlign="center"
                bg="gray.50"
                cursor="pointer"
                onClick={() =>
                  document.getElementById('file-upload-input').click()
                }
              >
                <Icon as={FaCopy} boxSize={8} color="blue.400" mb={2} />
                <Text fontWeight="semibold" color="blue.600">
                  Click to upload
                </Text>
                <Text color="gray.400">or drag and drop</Text>
                <Text color="gray.400" fontSize="sm">
                  PNG, JPG or PDF (max. 5MB)
                </Text>
                <Input
                  id="file-upload-input"
                  type="file"
                  accept="image/*,application/pdf"
                  display="none"
                  onChange={(e) => setPaymentReceipt(e.target.files[0])}
                />
                {paymentReceipt && (
                  <Text mt={2} color="green.500">
                    {paymentReceipt.name}
                  </Text>
                )}
              </Box>
            </Box>

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
              isDisabled={!depositAmount}
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
