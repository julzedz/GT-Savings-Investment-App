import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Button,
  Divider,
  Image,
  VStack,
  HStack,
} from '@chakra-ui/react';
import bankLogo from '../assets/bank-leaf.png';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const receiptRef = useRef();
  const { transaction, sender, receiver, amount, newBalance } =
    location.state || {};

  const handlePrint = async () => {
    const input = receiptRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth * 0.9;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(
      imgData,
      'PNG',
      (pageWidth - pdfWidth) / 2,
      40,
      pdfWidth,
      pdfHeight
    );
    pdf.save('transaction_receipt.pdf');
  };

  if (!transaction || !sender || !receiver) {
    return (
      <Box p={10}>
        <Text>Missing receipt data.</Text>
      </Box>
    );
  }

  return (
    <Flex fontFamily="new" justify="center" align="center" minH="100vh" bg="#f5f6fa">
      <Box
        w={{ base: '100%', md: '600px' }}
        bg="white"
        borderRadius="xl"
        boxShadow="lg"
        p={8}
        mt={10}
      >
        <Box ref={receiptRef}>
          {/* Logo and Bank Name */}
          <Flex align="center" justify="center" mb={6} gap={3}>
            <Image src={bankLogo} alt="Bank Logo" boxSize="40px" />
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="black"
              fontFamily="'Atomic Age', sans-serif"
            >
              GT Savings Bank
              <Text as="span" color="applegreen" fontSize="2xl">
                .
              </Text>
            </Text>
          </Flex>
          <Text fontSize="xl" fontWeight="bold" align="center" mb={2}>
            Transaction Successful
          </Text>
          <Text fontSize="md" color="green.500" align="center" mb={6}>
            Your transfer was completed successfully.
          </Text>
          <Divider mb={6} />
          <VStack align="stretch" spacing={3} mb={6}>
            <HStack justify="space-between">
              <Text fontWeight="semibold">Reference ID:</Text>
              <Text>{transaction.reference_id}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="semibold">Date:</Text>
              <Text>
                {transaction.formatted_created_at
                  ? transaction.formatted_created_at
                  : ''}
              </Text>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="semibold">Amount:</Text>
              <Text>
                $
                {Number(amount).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="semibold">New Balance:</Text>
              <Text>
                $
                {Number(newBalance).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="semibold">Status:</Text>
              <Text color="green.600">Processed</Text>
            </HStack>
          </VStack>
          <Divider mb={6} />
          <Text fontWeight="bold" mb={2}>
            Sender Details
          </Text>
          <VStack align="stretch" spacing={1} mb={4}>
            <HStack justify="space-between">
              <Text>Name:</Text>
              <Text>
                {sender.fullname || sender.first_name + ' ' + sender.last_name}
              </Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Account Number:</Text>
              <Text>
                {sender.account?.account_number || sender.account_number}
              </Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Email:</Text>
              <Text>{sender.email}</Text>
            </HStack>
          </VStack>
          <Text fontWeight="bold" mb={2}>
            Receiver Details
          </Text>
          <VStack align="stretch" spacing={1}>
            <HStack justify="space-between">
              <Text>Name:</Text>
              <Text>{receiver.name}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Account Number:</Text>
              <Text>{receiver.accountNumber}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Bank:</Text>
              <Text>{receiver.bank}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Type:</Text>
              <Text>{receiver.type}</Text>
            </HStack>
          </VStack>
        </Box>
        <Flex gap={4} mt={8} justify="center">
          <Button
            colorScheme="green"
            variant="outline"
            onClick={() => navigate('/dashboard')}
          >
            Dismiss
          </Button>
          <Button colorScheme="blue" onClick={handlePrint}>
            Print Receipt
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Receipt;
