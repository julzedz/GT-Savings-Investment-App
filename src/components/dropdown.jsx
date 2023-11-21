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
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const DropdownMenu = ({ label, children, isActive }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Menu isOpen={isOpen} onToggle={onToggle}>
      <MenuButton
        as={Link}
        fontSize="lg"
        fontWeight={{ base: 'semibold', lg: isActive ? 'semibold' : 'normal' }}
        color={isActive ? 'applegreen' : 'white'}
        bg={isActive ? 'gunmetal' : 'black'}
        px={4}
        py={6}
        _hover={{ bg: 'gunmetal', color: 'applegreen' }}
        transition="background 0.4s"
        onMouseEnter={() => onToggle(true)}
        onMouseLeave={() => onToggle(false)}
        borderBottom="none"
      >
        <Flex align="center" justify="space-between">
          <Text my={0}>{label}</Text>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList
        bg="gunmetal"
        width="xs"
        color="white"
        borderRadius="base"
        // position="absolute"
        top={0}
        // transform="translateX(0) translateY(-50%)"
        border="none"
        _hover={{ bg: 'gunmetal' }}
      >
        {children}
      </MenuList>
    </Menu>
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
