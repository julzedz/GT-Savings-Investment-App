/* eslint-disable max-len */
import { Box, Text, Button } from '@chakra-ui/react';
import skyscraper from '../assets/skyscraper1.jpg';

const Footer = () => (
  <>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundImage={skyscraper}
      bgSize="cover"

    >
      <Text
        fontSize="sm"
        fontFamily="lit"
        fontWeight="thin"
        letterSpacing="widest"
        lineHeight="short"
        textAlign="center"
        mt={20}
      >
        GET IN TOUCH
      </Text>
      <Text>
        We&apos;d love to speak with you.
      </Text>
      <Text>
        Please call us at 800-947-6438, email us at info@gtsavingsbank.net or click the button below to access our contact form.
      </Text>
      <Button>
        Contact Us
      </Button>
    </Box>
  </>
);

export default Footer;
