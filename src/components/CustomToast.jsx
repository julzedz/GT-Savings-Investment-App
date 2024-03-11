/* eslint-disable react/prop-types */
import { Box, Text } from '@chakra-ui/react';

const CustomToast = ({ title, description }) => (
  <Box bg="red.500" p={3} color="white" fontFamily="Menlo, monospace">
    <Text fontWeight="bold">{title}</Text>
    <Text mt={1}>{description}</Text>
  </Box>
);

export default CustomToast;
