import {
  Flex, Text, Divider, Button, Table, Thead, Tr, Th,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon, ChevronRightIcon } from '@chakra-ui/icons';

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
        <Flex flexDir={{ base: 'column', lg: 'row' }} mb={8} alignItems="center" justifyContent="flex-start">
          <Text m={0} alignSelf="flex-start" fontSize="2xl" fontWeight="medium" pr={8} pb={{ base: 4, lg: 0 }}>
            Welcome Rob! 👋
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
        <Flex
          flexDir="column"
          // bgColor="blue"
          maxWidth="60rem"
          borderRadius="2xl"
          borderWidth={{ base: 'none', slg: '1px' }}
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
            <Flex p={0} m={0} gap={3} display={{ base: 'none', slg: 'flex' }}>
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
            <Text fontSize={{ base: '2xl', lg: '2rem' }} fontWeight="semibold" m={0}>355,760.32</Text>
            <Text fontSize="sm" fontWeight="semibold" lineHeight="short" m={0} ml={2} alignSelf="flex-end" pb={2}>USD</Text>
          </Flex>
          <Flex flexDir="column" mt={3}>
            <Text fontSize="sm" lineHeight="short" mb={3}>≈ 8.2734883 BTC</Text>
            <Text fontSize="sm" lineHeight="short" mb={3}>
              Today&apos;s PnL
              <Text display="inline" ml="3" color="green">+ $152.50(0.2%)</Text>
            </Text>
          </Flex>
          <Flex justifyContent={{ base: 'space-between', lg: 'normal' }} p={0} m={0} mt={{ base: 4, lg: 0 }} gap={{ base: 0, lg: 3 }} display={{ base: 'flex', slg: 'none' }}>
            <Button
              fontSize="sm"
              fontWeight="600"
              lineHeight="short"
              colorScheme="gray"
              size="sm"
              width={{ base: '30%', slg: 'auto' }}
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
              width={{ base: '30%', slg: 'auto' }}
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
              width={{ base: '30%', slg: 'auto' }}
            >
              Transfer
            </Button>
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          // bgColor="blue"
          maxWidth="60rem"
          borderRadius="2xl"
          borderWidth={{ base: 'none', slg: '1px' }}
          borderColor="#eaecef"
          p={6}
          mb={6}
        >
          <Flex
            flexDir="column"
          >
            <Flex
              p={0}
              m={0}
              alignItems="center"
              justifyContent="space-between"
              w="100%"
              fontSize="2xl"
              fontWeight="bold"
            >
              <Text m={0}>Recent Transactions</Text>
              <Button
                colorScheme="none"
                variant="ghost"
                rightIcon={<ChevronRightIcon alignSelf="center" p={0} m={-2} />}
                fontSize="sm"
                textAlign="center"
                p={0}
                m={0}
              >
                More
              </Button>
            </Flex>
            <Flex
              w="inherit"
            >
              <Table
                w="100%"
              >
                <Thead>
                  <Tr>
                    <Th
                      justifySelf="flex-start"
                      textAlign="left"
                      textTransform="Capitalized"
                      fontWeight="100"
                    >
                      Transactions
                    </Th>
                    <Th
                      justifySelf="flex-end"
                      textAlign="right"
                      textTransform="Capitalized"
                      fontWeight="100"
                    >
                      Amount
                    </Th>
                    <Th
                      justifySelf="flex-end"
                      textAlign="right"
                      textTransform="Capitalized"
                      fontWeight="100"
                    >
                      Date
                    </Th>
                    <Th
                      justifySelf="flex-end"
                      textAlign="right"
                      textTransform="Capitalized"
                      fontWeight="100"
                    >
                      Status
                    </Th>
                  </Tr>
                </Thead>
              </Table>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </>
);

export default Dashboard;
