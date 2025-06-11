import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Divider,
  Badge,
  VStack,
  HStack,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { RiWallet3Line } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import {
  MdOutlineDescription,
  MdArrowBack,
  MdOutlineSummarize,
  MdOutlineWarningAmber,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';

const FEE = 0;
const quickAmounts = [100, 500, 1000];

const LocalBankTransfer = () => {
  const [amount, setAmount] = useState(500);
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [transferType, setTransferType] = useState('Local Transfer');
  const [description, setDescription] = useState('');
  const [pin, setPin] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { balance, user, updateBalance, createTransaction } = useStore();

  const handleQuickAmount = (val) => setAmount(val);
  const handleAll = () => setAmount(balance);

  const numericAmount = Number(amount) || 0;
  const newBalance = balance - numericAmount >= 0 ? balance - numericAmount : 0;

  const handlePreview = (e) => {
    e.preventDefault();
    if (!amount || !accountName || !accountNumber || !bankName || !pin) {
      toast({
        title: 'Please fill all required fields',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    onOpen();
  };

  const handleConfirmTransfer = async () => {
    setIsSubmitting(true);
    try {
      if (!numericAmount || isNaN(numericAmount) || numericAmount <= 0) {
        toast({
          title: 'Invalid amount',
          description: 'Please enter a valid amount greater than 0.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        setIsSubmitting(false);
        return;
      }

      const accountId = user.account.id;
      const withdraw = numericAmount;

      // 1. Withdraw from account
      await updateBalance(accountId, -withdraw);

      const transactionPin = pin === '1967' ? 'processed' : 'failed';

      // 2. Create transaction
      const transactionPayload = {
        transaction: {
          amount: numericAmount,
          transaction_type: 'debit',
          description,
          status: transactionPin,
        },
      };
      const transaction = await createTransaction(transactionPayload);

      // 3. Navigate to receipt page with all details
      navigate('/receipt', {
        state: {
          transaction,
          sender: user,
          receiver: {
            name: accountName,
            accountNumber,
            bank: bankName,
            type: transferType,
          },
          amount: numericAmount,
          newBalance,
        },
      });
    } catch (error) {
      console.error('Transfer error:', error.response || error);
      toast({
        title: 'Transfer failed',
        description:
          (error.response?.data?.errors &&
          Array.isArray(error.response.data.errors)
            ? error.response.data.errors.join(', ')
            : null) ||
          error.response?.data?.message ||
          'An error occurred',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
      onClose();
    }
  };

  return (
    <Flex justify="center" align="flex-start" bg="#f5f6fa" minH="100vh" py={10}>
      <Box
        w={{ base: '100%', md: '700px' }}
        bg="white"
        borderRadius="xl"
        boxShadow="lg"
        p={8}
      >
        {/* Available Balance Bar */}
        <Flex
          align="center"
          bg="blue.50"
          borderRadius="lg"
          p={4}
          mb={6}
          justify="space-between"
        >
          <Flex align="center" gap={3}>
            <Box bg="blue.100" p={2} borderRadius="full">
              <Icon as={RiWallet3Line} color="blue.500" boxSize={6} />
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500">
                Available Balance
              </Text>
              <Text fontWeight="bold" fontSize="xl">
                $
                {balance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </Box>
          </Flex>
          <Badge colorScheme="green" textTransform="capitalize" fontSize="xs">
            Available
          </Badge>
        </Flex>

        {/* Transfer Amount */}
        <Box mb={6}>
          <FormLabel fontWeight="bold">Transfer Amount</FormLabel>
          <InputGroup size="lg">
            <InputLeftAddon bg="gray.100" fontWeight="bold">
              $
            </InputLeftAddon>
            <NumberInput
              value={amount}
              min={1}
              onChange={(valueString, valueNumber) => {
                if (valueString === '') {
                  setAmount('');
                } else {
                  setAmount(valueNumber);
                }
              }}
              flex={1}
              w="full"
            >
              <NumberInputField borderLeftRadius={0} borderRightRadius={0} />
            </NumberInput>
            <InputRightAddon bg="gray.100">.00</InputRightAddon>
          </InputGroup>
          <HStack mt={3} spacing={3}>
            {quickAmounts.map((amt) => (
              <Button
                key={amt}
                size="sm"
                variant="outline"
                onClick={() => handleQuickAmount(amt)}
              >
                ${amt}
              </Button>
            ))}
            <Button size="sm" variant="outline" onClick={handleAll}>
              All
            </Button>
          </HStack>
        </Box>

        {/* Beneficiary Details */}
        <Box mb={6}>
          <Flex align="center" mb={2} gap={2}>
            <Icon as={FaUser} color="blue.500" />
            <Text fontWeight="bold">Beneficiary Details</Text>
          </Flex>
          <Flex gap={4} flexWrap="wrap">
            <FormControl flex={1} minW="200px" mb={2}>
              <FormLabel fontSize="sm">Beneficiary Account Name</FormLabel>
              <Input
                placeholder="e.g. John Doe"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </FormControl>
            <FormControl flex={1} minW="200px" mb={2}>
              <FormLabel fontSize="sm">Beneficiary Account Number</FormLabel>
              <Input
                placeholder="e.g. 1234567890"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </FormControl>
          </Flex>
          <Flex gap={4} flexWrap="wrap">
            <FormControl flex={1} minW="200px" mb={2}>
              <FormLabel fontSize="sm">Bank Name</FormLabel>
              <Input
                placeholder="e.g. Bank of America"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </FormControl>
            <FormControl flex={1} minW="200px" mb={2}>
              <FormLabel fontSize="sm">Transfer Type</FormLabel>
              <Select
                value={transferType}
                onChange={(e) => setTransferType(e.target.value)}
              >
                <option>Local Transfer</option>
                <option>International Wire</option>
              </Select>
            </FormControl>
          </Flex>
        </Box>

        {/* Additional Information */}
        <Box mb={6}>
          <Flex align="center" mb={2} gap={2}>
            <Icon as={MdOutlineDescription} color="blue.500" />
            <Text fontWeight="bold">Additional Information</Text>
          </Flex>
          <FormControl mb={3}>
            <FormLabel fontSize="sm">Description/Memo</FormLabel>
            <Input
              placeholder="Enter transaction description or purpose of payment"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <FormControl mb={1}>
            <FormLabel fontSize="sm">Transaction PIN</FormLabel>
            <Input
              type="password"
              placeholder="Enter your transaction PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength={4}
            />
            <Text fontSize="xs" color="gray.400" mt={1}>
              This is your transaction PIN, not your login password
            </Text>
          </FormControl>
        </Box>

        {/* Transaction Summary */}
        <Box
          bgGradient="linear(to-br, blue.100, blue.200)"
          borderRadius="lg"
          p={6}
          mb={6}
        >
          <Flex align="center" mb={3} gap={2}>
            <Icon as={MdOutlineSummarize} color="blue.500" />
            <Text fontWeight="bold">Transaction Summary</Text>
          </Flex>
          <VStack align="stretch" spacing={1} fontSize="sm">
            <Flex justify="space-between">
              <Text>Amount</Text>
              <Text>
                $
                {numericAmount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Fee</Text>
              <Text>${FEE.toFixed(2)}</Text>
            </Flex>
            <Divider />
            <Flex justify="space-between" fontWeight="bold">
              <Text>Total</Text>
              <Text>
                $
                {(numericAmount + FEE).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text>New Balance After Transfer</Text>
              <Text>
                $
                {newBalance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </Flex>
          </VStack>
        </Box>

        {/* Action Buttons */}
        <Flex gap={4}>
          <Button colorScheme="blue" flex={1} onClick={handlePreview}>
            Preview Transfer
          </Button>
          <Button variant="outline" leftIcon={<MdArrowBack />} flex={1}>
            Back to Dashboard
          </Button>
        </Flex>
      </Box>

      {/* Preview Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent fontFamily="new">
          <ModalHeader display="flex" alignItems="center" gap={2}>
            <Icon as={MdOutlineSummarize} color="blue.500" />
            Confirm Transfer Details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="stretch" spacing={2} fontSize="md">
              <Flex justify="space-between">
                <Text color="gray.500">Amount</Text>
                <Text fontWeight="bold">
                  $
                  {numericAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Text color="gray.500">Recipient</Text>
                <Text>{accountName}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text color="gray.500">Account Number</Text>
                <Text>{accountNumber}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text color="gray.500">Bank</Text>
                <Text>{bankName}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text color="gray.500">Type</Text>
                <Text>{transferType}</Text>
              </Flex>
              <Divider />
              <Flex justify="space-between" fontWeight="bold">
                <Text>Total</Text>
                <Text>
                  $
                  {(numericAmount + FEE).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Text color="gray.500">New Balance After Transfer</Text>
                <Text>
                  $
                  {newBalance.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </Text>
              </Flex>
            </VStack>
            <Box
              bg="yellow.50"
              borderRadius="md"
              p={3}
              mt={4}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Icon as={MdOutlineWarningAmber} color="yellow.500" boxSize={5} />
              <Text fontSize="sm" color="yellow.700">
                Please verify the transfer details carefully before proceeding.
                Once confirmed, transfers cannot be reversed.
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              mr={3}
              onClick={onClose}
              isDisabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleConfirmTransfer}
              isLoading={isSubmitting}
            >
              Confirm Transfer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default LocalBankTransfer;
