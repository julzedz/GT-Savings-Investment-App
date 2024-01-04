import { Flex, Text } from '@chakra-ui/react';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';

const Deposit = () => (
  <>
    <Flex>
      <Sidebar />
      <Flex
        ml={4}
        flexDir="column"
        minHeight="3xl"
        p={5}
        flex="1"
        marginLeft={{ base: 20, md: '21rem' }}
        fontFamily="noto"
      >
        <Flex bgColor="red" minHeight="3xl" flexDir="column">
          <Text
            alignSelf="center"
            justifySelf="center"
            fontSize={{ base: 'lg', xl: '2xl' }}
            fontWeight="bold"
            mb={6}
          >
            Fund your account
          </Text>
          <Text>Deposit</Text>
        </Flex>
        <AccountFooter />
      </Flex>
    </Flex>
  </>
);

export default Deposit;
