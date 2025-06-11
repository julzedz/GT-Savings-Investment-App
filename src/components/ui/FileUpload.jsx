import React from 'react';
import {
  Box,
  Icon,
  Text,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';

const FileUpload = ({
  onChange,
  accept = 'image/*,application/pdf',
  maxSize = 5, // in MB
  ...props
}) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const bgColor = useColorModeValue('gray.50', 'gray.700');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > maxSize * 1024 * 1024) {
        alert(`File size should not exceed ${maxSize}MB`);
        return;
      }
      onChange(file);
    }
  };

  return (
    <Box
      border="2px dashed"
      borderColor={borderColor}
      borderRadius="lg"
      p={8}
      textAlign="center"
      bg={bgColor}
      cursor="pointer"
      onClick={() => document.getElementById('file-upload-input').click()}
      {...props}
    >
      <Icon as={FaUpload} boxSize={8} color="blue.400" mb={2} />
      <Text fontWeight="semibold" color="blue.600">
        Click to upload
      </Text>
      <Text color="gray.400">or drag and drop</Text>
      <Text color="gray.400" fontSize="sm">
        PNG, JPG or PDF (max. {maxSize}MB)
      </Text>
      <Input
        id="file-upload-input"
        type="file"
        accept={accept}
        display="none"
        onChange={handleFileChange}
      />
    </Box>
  );
};

export default FileUpload; 