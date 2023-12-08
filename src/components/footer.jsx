/* eslint-disable max-len */
import { Box, Text, Button } from '@chakra-ui/react';
import skyscraper from '../assets/blackandwhite.jpg';

const Footer = () => (
  <>
    <Box
      p={8}
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundImage={`linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${skyscraper})`}
      bgSize="cover"
      minHeight={32}
      bgPos="center"
      textColor="white"
    >
      <Text
        fontSize="sm"
        fontFamily="lit"
        fontWeight="bold"
        letterSpacing="widest"
        lineHeight="short"
        textAlign="center"
        mt={8}
      >
        GET IN TOUCH
      </Text>
      <Text
        fontFamily="new"
        fontSize="2xl"
      >
        We&apos;d love to speak with you.
      </Text>
      <Text>
        Please call us at 800-947-6438, email us at info@gtsavingsbank.net or click the button below to access our contact form.
      </Text>
      <Button
        m={5}
      >
        Contact Us
      </Button>
    </Box>
  </>
);

export default Footer;
