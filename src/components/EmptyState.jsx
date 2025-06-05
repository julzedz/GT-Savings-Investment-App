import React from 'react';
import { Box, VStack, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { RiInboxArchiveLine } from 'react-icons/ri';

const EmptyState = ({ message = 'No transactions yet' }) => {
  const iconColor = useColorModeValue('gray.400', 'gray.500');
  const textColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Box
      p={8}
      w="100%"
      textAlign="center"
      borderRadius="lg"
      bg={useColorModeValue('#f5f5f5', 'gray.700')}
    >
      <VStack spacing={4}>
        <Icon as={RiInboxArchiveLine} w={12} h={12} color={iconColor} />
        <Text fontSize="lg" fontWeight="medium" color={textColor}>
          {message}
        </Text>
        <Text fontSize="sm" color={textColor}>
          Your transaction history will appear here
        </Text>
      </VStack>
    </Box>
  );
};

export default EmptyState;
