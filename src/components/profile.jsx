import {
  Flex, Divider, Text, Box, Image, Button, Link as ReactRouterLink,
} from '@chakra-ui/react';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';
import avatar from '../assets/avatar-icon.webp';

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
        {/* <h3>Contact Information</h3> */}
        <Flex flexDir="column" bgColor="#f5f5f5" pb={16}>
          <Image
            borderRadius="full"
            boxSize="200px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            alignSelf="center"
            fallbackSrc={avatar}
            m={6}
          />
          <Text
            textAlign="center"
            fontFamily="noto"
            fontSize={{ base: 'lg', xl: '2xl' }}
            fontWeight="bold"
          >
            Rob Smith

          </Text>

          <Text alignSelf="center" textAlign="center" fontFamily="noto" padding={2} bgColor="rgba(159, 167, 34, 0.6)" color="applegreen" fontWeight="semibold" width="80px" borderRadius="50">User</Text>
          <Flex
            fontFamily="new"
            textAlign="left"
          // maxW="md"
            minW={{ base: '2xs', md: 'md', lg: 'lg' }}
            alignSelf="center"
            my={6}
            p={6}
            flexDir="column"
          >
            <Flex px={6} pb={2} flexDir="column">
              <Box color="applegreen" fontWeight="semibold">Email</Box>
              <Box fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium">robsmith@hotmail.com</Box>
            </Flex>
            <Divider />
            <Flex px={6} pb={2} flexDir="column">
              <Box color="applegreen" fontWeight="semibold">Phone Number</Box>
              <Box fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium">+1(234)56789</Box>
            </Flex>
            <Divider />
            <Flex px={6} pb={2} flexDir="column">
              <Box color="applegreen" fontWeight="semibold">Address</Box>
              <Box fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium">Illinois, United States of America</Box>
            </Flex>
            <Divider />
            <Flex px={6} pb={4} flexDir="column">
              <Box color="applegreen" fontWeight="semibold">Created At</Box>
              <Box fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium">2023-12-19</Box>
            </Flex>
          </Flex>
          <Button
            w="200px"
            alignSelf="center"
            m={5}
            p={7}
            fontFamily="new"
            bgColor="applegreen"
            as={ReactRouterLink}
            to=""
            _hover={{ color: 'white', bgColor: 'gunmetal' }}
          >
            Reset Password
          </Button>
        </Flex>

        <AccountFooter />
      </Flex>
    </Flex>
  </>
);

export default Profile;
