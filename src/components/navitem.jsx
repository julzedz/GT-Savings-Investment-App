import React from 'react';
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from 'chakra-ui/react';

const NavItem = ({ navSize, icon, title, active }) => {
  return (
    <Flex
      mt={30}
      flexDir="column"
      width="100%"
      alignItems={navSize === 'small' ? center : 'flex-start'}
    >
      <Menu placement="right">
        <Link
          bg={active && 'gunmetal'}
          p={3}
          borderRadius={8}
          _hover={{ textDecoration: none, bg: 'persianred' }}
          width={navSize === 'large' && '100%'}
        >
          <MenuButton>
            <Flex>
              <Icon as={icon} />
              <Text>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}

export default NavItem;
