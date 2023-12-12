import PropTypes from 'prop-types';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Flex,
  Text,
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
      px={5}
      m={0}
    >
      <Menu isOpen={isOpen || isHovered} onToggle={onToggle}>
        <MenuButton
          as={Link}
          fontSize="lg"
          fontWeight={{ base: 'semibold', lg: isActive ? 'semibold' : 'normal' }}
          color={isActive ? 'applegreen' : 'white'}
          bg={isActive ? 'gunmetal' : 'black'}
          px={4}
          py={0}
          mb={0}
          _hover={{ bg: 'gunmetal', color: 'applegreen' }}
          transition="background 0.4s"
          onMouseEnter={() => onToggle(true)}
          onMouseLeave={() => onToggle(false)}
        >
          <Flex align="center" justify="space-between">
            <Text my={0}>{label}</Text>
            <ChevronDownIcon />
          </Flex>
        </MenuButton>
        <MenuList
          bg="gunmetal"
          mt={-1.5}
          width="xs"
          color="white"
          borderRadius="base"
          border="none"
          _hover={{ bg: 'gunmetal' }}
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
    bg="gunmetal"
    fontSize="md"
    _hover={{ border: 'none', bg: 'persianred', color: 'applegreen' }}
  >
    {children}
  </MenuItem>
);

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export { DropdownMenu, DropdownItem };
