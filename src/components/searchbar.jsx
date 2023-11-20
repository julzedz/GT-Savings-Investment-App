import {
  Input, InputGroup, InputRightElement, Box,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => (
  <Box width={{ base: '100%', lg: '' }} px={2} marginBottom={10}>
    <InputGroup>
      <Input
        type="text"
        placeholder="Search"
        fontSize="lg"
        size="md"
        variant="filled"
        width="100%"
        color="white"
        py={6}
      />
      <InputRightElement width={14} paddingTop={3} pointerEvents="none">
        <SearchIcon color="gray.500" />
      </InputRightElement>
    </InputGroup>
  </Box>
);

export default SearchBar;
