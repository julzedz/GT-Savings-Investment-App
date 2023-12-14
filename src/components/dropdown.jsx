import PropTypes from 'prop-types';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  // Flex,
  // Text,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const DropdownMenu = ({ label, children, isActive }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      m={0}
    >
      <Menu isOpen={isOpen || isHovered} onToggle={onToggle}>
        <MenuButton
          as={Link}
          fontSize="lg"
          fontWeight={{ base: 'semibold', lg: isActive ? 'semibold' : 'normal' }}
          px={5}
          py={6}
          m={0}
          transition="background 0.4s"
          onMouseEnter={() => onToggle(true)}
          onMouseLeave={() => onToggle(false)}
          sx={{
            display: 'flex',
            color: isActive ? 'applegreen' : 'white',
            bg: isActive ? 'gunmetal' : 'black',
            '&:hover, &:focus': {
              bg: 'gunmetal',
              textDecoration: 'none',
              color: 'applegreen',
            },
            width: '100%',
            alignItems: 'center',
          }}
        >
          {label}
          <ChevronDownIcon m={0} p={0} />
        </MenuButton>
        <MenuList
          bg="black"
          mt={-2}
          width="xs"
          color="white"
          borderRadius="none"
          border="none"
        >
          {children}
        </MenuList>
      </Menu>
    </Box>
  );
};

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const DropdownItem = ({ href, children }) => (
  <MenuItem
    as={Link}
    py={3}
    px={5}
    href={href}
    bg="black"
    fontSize="md"
    _hover={{
      border: 'none', bg: 'gunmetal', color: 'applegreen', textDecoration: 'none', outline: 'none',
    }}
    _focus={{ boxShadow: 'none' }}
  >
    {children}
  </MenuItem>
);

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export { DropdownMenu, DropdownItem };
