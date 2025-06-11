import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { COOKIE_TOKEN } from './dashboard';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';
import Header from './Header';
import LocalBankTransfer from './LocalBankTransfer';

const userDetails = Cookies.get(COOKIE_TOKEN);
let parsedToken;
let savings;
if (userDetails) {
  parsedToken = JSON.parse(userDetails);
  if (parsedToken.account) {
    savings = parsedToken.account.savings_account;
  }
}

const Withdrawal = () => (
  <Flex color="black" w="100%">
    <Sidebar />
    <Flex
      flexDir="column"
      minHeight="3xl"
      flex="1"
      marginLeft={{ base: 20, md: '11.01rem' }}
      overflowY="scroll"
      fontFamily="noto"
      bgColor="gray.200"
    >
      <Header />
      <Flex px={4} minHeight="3xl" flexDir="column">
        <Text
          alignSelf="center"
          justifySelf="center"
          fontSize={{ base: 'lg', xl: '2xl' }}
          fontWeight="bold"
          mt={6}
        >
          Local Bank Transfer
        </Text>
        <Text mb={6} align="center">
          Send money to any local bank account securely
        </Text>
        <LocalBankTransfer />
      </Flex>
      <AccountFooter />
    </Flex>
  </Flex>
);

export default Withdrawal;
