import { Flex } from '@chakra-ui/react';
import Sidebar from './sidebar';

const Profile = () => (
  <>
    <Flex
      bgColor="gunmetal"
      color="white"
    >
      <Sidebar />
      <Flex
        flexDir="column"
        pos="relative"
        left="80"
        minHeight="3xl"
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
