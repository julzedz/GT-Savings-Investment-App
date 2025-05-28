import React from 'react';
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const NavItem = ({
  navSize, icon, title, href, isActive,
}) => (
  <Flex
    mt={1}
    flexDir="column"
    width="100%"
    alignItems={navSize === 'small' ? 'center' : 'flex-start'}
    color="white"
  >
    <Menu placement="right">
      <Link
        href={href}
        bg={isActive && 'gunmetal'}
        p={1}
        borderRadius={4}
        _hover={{ textDecoration: 'none', bg: 'gunmetal' }}
        width={navSize === 'large' && '100%'}
        fontFamily="heading"
      >
        <MenuButton w="100%">
          <Flex p={0} alignItems="center" px={1}>
            <Icon as={icon} fontSize="sm" color={isActive ? 'white' : 'gray.300'} />
            <Text pl={2} fontSize="xs" m={0} display={navSize === 'small' ? 'none' : 'flex'}>{title}</Text>
          </Flex>
        </MenuButton>
      </Link>
    </Menu>
  </Flex>
);

NavItem.propTypes = {
  navSize: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default NavItem;
