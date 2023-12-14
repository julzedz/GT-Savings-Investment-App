import React from 'react';
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  // MenuList,
} from 'chakra-ui/react';
import PropTypes from 'prop-types';

const NavItem = ({
  navSize, icon, title, active, href,
}) => (
  <Flex
    mt={30}
    flexDir="column"
    width="100%"
    alignItems={navSize === 'small' ? 'center' : 'flex-start'}
  >
    <Menu placement="right">
      <Link
        href={href}
        bg={active && 'gunmetal'}
        p={3}
        borderRadius={8}
        _hover={{ textDecoration: 'none', bg: 'persianred' }}
        width={navSize === 'large' && '100%'}
      >
        <MenuButton w="100%">
          <Flex>
            <Icon as={icon} fontSize="xl" color={active ? 'gunmetal' : 'gray.500'} />
            <Text ml={5} display={navSize === 'small' ? 'none' : 'flex'}>{title}</Text>
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
  active: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavItem;
