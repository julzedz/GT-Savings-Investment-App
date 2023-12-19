import {
  Flex, Text, Divider, Button,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import Sidebar from './sidebar';

const Dashboard = () => (
  <>
    <Flex
      // bgColor="gunmetal"
      // color="white"
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
        <Flex mb={8} alignItems="center" justifyContent="flex-start">
          <Text m={0} fontSize="2xl" fontWeight="medium" pr={8}>
            Welcome Rob!
          </Text>
          <Divider w="1px" color="#eaecef" orientation="vertical" />
          <Flex fontSize="sm" lineHeight="shorter" alignItems="center" px={8}>
            <Flex alignItems="center" justifyContent="center" m={0} mr={12} flexDir="column">
              <Text color="#929aa5" m={0} mb={1}>User ID</Text>
              <Text m={0}>123456789</Text>
            </Flex>
            <Flex alignItems="center" justifyContent="center" m={0} mr={12} flexDir="column">
              <Text color="#929aa5" m={0} mb={1}>User Type</Text>
              <Text m={0}>Personal</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          // bgColor="blue"
          maxWidth="60rem"
          borderRadius="2xl"
          borderWidth="1px"
          borderColor="#eaecef"
          p={6}
          mb={6}
        >
          <Flex justifyContent="space-between">
            <Flex p={0} gap={1.5} alignItems="center" mb={0.5} justifyContent="space-evenly">
              <Text m={0} fontSize="xl" fontWeight="semibold"> Estimated Balance</Text>
              <ViewIcon />
              <ViewOffIcon display="none" />
            </Flex>
            <Flex p={0} m={0} gap={3}>
              <Button
                fontSize="sm"
                fontWeight="600"
                lineHeight="short"
                colorScheme="gray"
                size="sm"
                variant="solid"
              >
                Deposit
              </Button>
              <Button
                colorScheme="gray"
                size="sm"
                variant="solid"
                fontSize="sm"
                fontWeight="600"
                lineHeight="short"
              >
                Withdraw
              </Button>
              <Button
                colorScheme="gray"
                size="sm"
                variant="solid"
                fontSize="sm"
                fontWeight="600"
                lineHeight="short"
              >
                Transfer
              </Button>
            </Flex>
          </Flex>
          <Flex width="fit-content">
            <Text fontSize="2rem" fontWeight="semibold" m={0}>355,760.32</Text>
            <Text fontSize="sm" fontWeight="semibold" lineHeight="short" m={0} ml={2} alignSelf="flex-end" pb={2}>USD</Text>
          </Flex>
          <Flex flexDir="column" mt={3}>
            <Text fontSize="sm" lineHeight="short" mb={3}>≈ 8.2734883 BTC</Text>
            <Text fontSize="sm" lineHeight="short" mb={3}>
              Today&apos;s PnL
              <Text display="inline" ml="3" color="green">+ $152.50(0.2%)</Text>
            </Text>
          </Flex>
        </Flex>
        <h3>Transaction history</h3>
      </Flex>
    </Flex>
  </>
);

export default Dashboard;
