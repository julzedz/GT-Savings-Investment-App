import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Icon,
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
} from '@chakra-ui/react';
import { FaCopy } from 'react-icons/fa';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';
import Header from './Header';
import useStore from '../store/useStore';

const Deposit = () => {
  const numberInputRef = useRef(null);
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [paymentReceipt, setPaymentReceipt] = useState(null);

  const { user, updateBalance, createTransaction } = useStore();

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
    const amount = Number(numberInputRef.current.value);
    setIsLoading(true);
    setIsOpen(true);
    setTransactionStatus('Your transaction is being processed...');

    try {
      // First create the transaction
      const transactionPayload = {
        transaction: {
          amount,
          transaction_type: 'credit',
          description: 'Deposit',
          status: 'processed',
        },
      };

      await createTransaction(transactionPayload);

      // Then update the balance
      const accountId = user?.account?.id;
      if (!accountId) {
        throw new Error('Account ID not found');
      }

      await updateBalance(accountId, amount);

      setTransactionStatus('Deposit Successful');
      setTimeout(() => {
        setIsOpen(false);
        navigate('/dashboard');
      }, 3000);
    } catch (error) {
      console.error('Deposit error:', error);
      setTransactionStatus('Transaction Failed');
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

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
          <Header />
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
                    <Input />
                    <Icon
                      as={FaCopy}
                      boxSize={5}
                      color="gray.400"
                      cursor="pointer"
                      position="absolute"
                      right={3}
                      top={9}
                    />
                  </FormControl>
                  <FormControl flex={1}>
                    <FormLabel fontSize="sm">Account Name</FormLabel>
                    <Input />
                    <Icon
                      as={FaCopy}
                      boxSize={5}
                      color="gray.400"
                      cursor="pointer"
                      position="absolute"
                      right={3}
                      top={9}
                    />
                  </FormControl>
                </Flex>
                <Flex gap={4}>
                  <FormControl flex={1}>
                    <FormLabel fontSize="sm">Account Number</FormLabel>
                    <Input />
                    <Icon
                      as={FaCopy}
                      boxSize={5}
                      color="gray.400"
                      cursor="pointer"
                      position="absolute"
                      right={3}
                      top={9}
                    />
                  </FormControl>
                  <FormControl flex={1}>
                    <FormLabel fontSize="sm">Swift Code</FormLabel>
                    <Input />
                    <Icon
                      as={FaCopy}
                      boxSize={5}
                      color="gray.400"
                      cursor="pointer"
                      position="absolute"
                      right={3}
                      top={9}
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
