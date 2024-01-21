import {
  Flex, Divider, Text, Box,
} from '@chakra-ui/react';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';

const Profile = () => (
  <>
    <Flex
      color="black"
      w="100%"
    >
      <Sidebar />
      <Flex
        ml={4}
        flexDir="column"
        minHeight="3xl"
        p={5}
        flex="1"
        marginLeft={{ base: 20, md: '21rem' }}
        overflowY="scroll"
        fontFamily="noto"
      >
        <Flex flexDir={{ base: 'column', lg: 'row' }} mb={8} alignItems="center" justifyContent="flex-start">
          <Text m={0} alignSelf="flex-start" fontSize="2xl" fontWeight="medium" pr={8} pb={{ base: 4, lg: 0 }}>
            My Profile
          </Text>
          <Divider display={{ base: 'none', lg: 'inline' }} w="1px" color="#eaecef" orientation="vertical" />
          <Flex w={{ base: '100%', lg: 'auto' }} flexDir={{ base: 'column', lg: 'row' }} fontSize="sm" lineHeight="shorter" alignItems="center" px={{ base: 0, lg: 8 }}>
            <Flex w={{ base: 'inherit', lg: 'auto' }} alignItems="center" justifyContent={{ base: 'space-between', lg: 'center' }} m={0} mr={{ base: 0, lg: 12 }} flexDir={{ base: 'row', lg: 'column' }}>
              <Text color="#929aa5" m={0} mb={1}>User ID</Text>
              <Text m={0}>123456789</Text>
            </Flex>
            <Flex w={{ base: 'inherit', lg: 'auto' }} alignItems="center" justifyContent={{ base: 'space-between', lg: 'center' }} m={0} mr={{ base: 0, lg: 12 }} flexDir={{ base: 'row', lg: 'column' }}>
              <Text color="#929aa5" m={0} mb={1}>User Type</Text>
              <Text m={0}>Personal</Text>
            </Flex>
          </Flex>
        </Flex>
        <h3>Contact Information</h3>
        <h4>Rob Smith</h4>
        <Flex flexDir="column">
          <Flex flexDir="column">
            <Box>Email</Box>
            <Box>robsmith@gmail.com</Box>
          </Flex>
          <Flex flexDir="column">
            <Box>Phone Number</Box>
            <Box>+1(234)56789</Box>
          </Flex>
          <Flex flexDir="column">
            <Box>Created At</Box>
            <Box>2023-12-19</Box>
          </Flex>
        </Flex>

        <AccountFooter />
      </Flex>
    </Flex>
  </>
);

export default Profile;
