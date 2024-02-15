import PropTypes from 'prop-types';
import {
  Link,
} from '@chakra-ui/react';

const NavLink = ({ children, href, isActive }) => (
  <Link
    href={href}
    fontSize="lg"
    fontWeight={{ base: 'semibold', lg: isActive ? 'semibold' : 'normal' }}
    color={{ base: 'white', lg: isActive ? 'applegreen' : 'white' }}
    bg={{ base: 'gunmetal', lg: isActive ? 'gunmetal' : 'black' }}
    width={{ base: '100%', lg: 'auto' }}
    px={4}
    py={6}
    _hover={{ bg: { base: 'black', lg: 'gunmetal' }, color: 'applegreen' }}
    transition="background 0.4s"
    borderBottom={{ base: 'white solid 2px', lg: 'none' }}
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default NavLink;
