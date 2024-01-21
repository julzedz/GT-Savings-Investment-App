import { Flex } from '@chakra-ui/react';
import Sidebar from './sidebar';

const Profile = () => (
  <>
    <Flex
      color="black"
      w="100%"
    >
      <Sidebar />
      <Flex
        flexDir="column"
        pos="relative"
        p={5}
        left={{ base: 20, md: 80 }}
        minHeight="3xl"
        ml={4}
        flex="1"
        marginLeft={{ base: 20, md: '21rem' }}
        overflowY="scroll"
        fontFamily="noto"
      >
        <h2>Profile </h2>
        <h3>Inbox</h3>
        <h3>Notifications</h3>
        <h3>Email</h3>
        <h3>Transfer</h3>
        <h3>Settings</h3>
        <h3>Login settings</h3>
      </Flex>
    </Flex>
  </>
);

export default Profile;
