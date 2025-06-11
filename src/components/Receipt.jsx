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
import approved from '../assets/approved.png';
import failed from '../assets/failed.png';

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const receiptRef = useRef();
  const { transaction, sender, receiver, amount } = location.state || {};

  // Determine text and color based on transaction status
  const statusText = transaction?.status || 'Unknown';
  const isProcessed = statusText === 'processed';
  const isFailed = statusText === 'failed';
  const statusColor = isProcessed
    ? 'green.600'
    : isFailed
      ? 'red.600'
      : 'orange.500';
  const headerMessage = isProcessed
    ? 'Transaction Successful'
    : isFailed
      ? 'Transaction Failed'
      : 'Transaction Status';
  const subHeaderMessage = isProcessed
    ? 'Your transfer was completed successfully.'
    : isFailed
      ? 'Your transfer could not be completed.'
      : 'Check transaction status for more details.';

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
    <Flex
      fontFamily="new"
      justify="center"
      align="center"
      minH="100vh"
      bg="#f5f6fa"
    >
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
          <Flex
            bgColor="black"
            color="white"
            alignSelf="center"
            justifySelf="center"
            p={2}
            borderRadius="lg"
            width="fit-content"
            align="center"
            justify="center"
            mb={6}
            gap={3}
          >
            <Image src={bankLogo} alt="Bank Logo" boxSize="30px" />
            <Text
              fontSize="xl"
              fontWeight="bold"
              // color="black"
              fontFamily="'Atomic Age', sans-serif"
            >
              GT Savings Bank
              <Text as="span" color="applegreen" fontSize="2xl">
                .
              </Text>
            </Text>
          </Flex>
          <Text fontSize="xl" fontWeight="bold" align="center" mb={2}>
            {headerMessage}
          </Text>
          <Text fontSize="sm" color={statusColor} align="center" mb={6}>
            {subHeaderMessage}
          </Text>
          <Divider mb={6} />
          <VStack fontSize="sm" align="stretch" spacing={3} mb={6}>
            <HStack justify="space-between">
              <Text color="red.300" fontWeight="semibold">
                Transaction ID:
              </Text>
              <Text>{transaction.reference_id}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text color="red.300" fontWeight="semibold">
                Date:
              </Text>
              <Text>{transaction.formatted_created_at}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text color="red.300" fontWeight="semibold">
                Amount:
              </Text>
              <Text>
                $
                {Number(amount).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </HStack>
            <HStack justify="space-between">
              <Text color="red.300" fontWeight="semibold">
                New Balance:
              </Text>
              <Text>
                $
                {Number(sender.account?.savings_account).toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                  }
                )}
              </Text>
            </HStack>
            <HStack justify="space-between">
              <Text color="red.300" fontWeight="semibold">
                Status:
              </Text>
              <Text color={statusColor} textTransform="capitalize">
                {statusText}
              </Text>
            </HStack>
          </VStack>
          <Divider mb={6} />
          <Text fontWeight="bold" mb={2}>
            Sender Details
          </Text>
          <VStack fontSize="sm" align="stretch" spacing={1} mb={4}>
            <HStack justify="space-between">
              <Text color="red.300" fontWeight="semibold">
                Name:
              </Text>
              <Text>
                {sender.fullname || sender.first_name + ' ' + sender.last_name}
              </Text>
            </HStack>
            <HStack justify="space-between">
              <Text color="red.300" fontWeight="semibold">
                Account Number:
              </Text>
              <Text>
                {sender.account?.account_number || sender.account_number}
              </Text>
            </HStack>
          </VStack>
          <Text fontWeight="bold" mb={2}>
            Beneficiary Details
          </Text>
          <VStack fontSize="sm" align="stretch" spacing={1}>
            <HStack justify="space-between">
              <Text color="red.300" fontWeight="semibold">
                Name:
              </Text>
              <Text>{receiver.name}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text color="red.300" fontWeight="semibold">
                Account Number:
              </Text>
              <Text>{receiver.accountNumber}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text color="red.300" fontWeight="semibold">
                Bank:
              </Text>
              <Text>{receiver.bank}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text color="red.300" fontWeight="semibold">
                Type:
              </Text>
              <Text>{receiver.type}</Text>
            </HStack>
          </VStack>
          {isProcessed ? (
            <Box
              w="fit-content"
              mx="auto"
              position="relative"
              top="-90px"
              zIndex={1}
            >
              <img src={approved} width={150} alt="" />
            </Box>
          ) : isFailed ? (
            <Box
              w="fit-content"
              mx="auto"
              position="relative"
              top="-90px"
              zIndex={1}
            >
              <img src={failed} width={150} alt="" />
            </Box>
          ) : null}
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
