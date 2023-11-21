import { Link } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';

const AccordionLink = ({ children, href }) => (
  <Link
    href={href}
    _hover={{ bg: 'black', color: 'applegreen' }}
    borderRadius="base"
    width="100%"
    py={2}
    px={2}
  >
    {children}
  </Link>
);

AccordionLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
export default AccordionLink;
