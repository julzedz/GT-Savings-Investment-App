import React, { useState } from 'react';
import {
  Flex, Text, Divider, Button, Tooltip, Image,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';
import earn from '../assets/earn.svg';
import Sidebar from './sidebar';
import margin from '../assets/margin.svg';

const Investment = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
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
          fontFamily="noto"
        >
          <Flex flexDir={{ base: 'column', lg: 'row' }} mb={8} alignItems="center" justifyContent="flex-start">
            <Text m={0} alignSelf="flex-start" fontSize="2xl" fontWeight="medium" pr={8} pb={{ base: 4, lg: 0 }}>
              Investment Account
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
            maxWidth="60rem"
            borderRadius="2xl"
            borderWidth={{ base: 'none', slg: '1px' }}
            borderColor="#eaecef"
            p={6}
            mb={6}
          >
            <Flex justifyContent="space-between">
              <Flex p={0} gap={1.5} alignItems="center" mb={0.5} justifyContent="space-evenly">
                <Text m={0} fontSize="xl" fontWeight="semibold"> Account Balance</Text>
                {isVisible ? (
                  <Tooltip label="Hide Balance" fontFamily="new" fontSize="xs" aria-label="A tooltip">
                    <ViewIcon cursor="pointer" onClick={toggleVisibility} />
                  </Tooltip>
                ) : (
                  <Tooltip label="Show Balance" fontFamily="new" fontSize="xs" aria-label="A tooltip">
                    <ViewOffIcon cursor="pointer" onClick={toggleVisibility} />
                  </Tooltip>
                )}
              </Flex>
              <Flex p={0} m={0} gap={3} display={{ base: 'none', slg: 'flex' }}>
                <Button
                  as={ReactRouterLink}
                  to="/deposit"
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
                  as={ReactRouterLink}
                  to="/withdrawal"
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
              <Text fontSize={{ base: '2xl', lg: '2rem' }} fontWeight="semibold" m={0}>{isVisible ? '355,760.32' : '****'}</Text>
              <Text fontSize="sm" fontWeight="semibold" lineHeight="short" m={0} ml={2} alignSelf="flex-end" pb={2}>USD</Text>
            </Flex>
            <Flex flexDir="column" mt={3}>
              <Text fontSize="sm" lineHeight="short" mb={3}>
                {isVisible ? '≈ 8.2734883 ' : '****'}
                BTC
              </Text>
              <Text fontSize="sm" lineHeight="short" mb={3}>
                Today&apos;s PnL
                <Text display="inline" ml="3" color="green">{isVisible ? '+ $712.50(0.2%)' : '****'}</Text>
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
            maxWidth="60rem"
            p={0}
            m={0}
            mb={6}
            alignItems="center"
            justifyContent="space-between"
            gap={{ base: '6', slg: 'none' }}
            flexDir={{ base: 'column', slg: 'row' }}
          >
            <Flex
              as={ReactRouterLink}
              to="/investment"
              borderWidth="1px"
              borderRadius="2xl"
              borderColor="#e5e7eb"
              w={{ base: '100%', slg: '49%' }}
              p={6}
              m={0}
              alignItems="center"
              justifyContent="space-between"
              cursor="pointer"
              transition="transform 0.01s ease-in-out"
              _hover={{ textDecoration: 'none', transform: 'translateX(-1px)' }}
            >
              <Flex flexDir="column" w="80%">
                <Text m={0} fontSize="md" fontWeight="medium" lineHeight={6} mb={1}>One-step investment solution, enjoy high returns.</Text>
                <Text m={0} fontSize="sm" fontWeight="normal" lineHeight="shorter">
                  ROI up to
                  <Text m={0} display="inline" fontWeight="medium" color="green"> 40%</Text>
                </Text>
                <Text color="#707a8a" m={0} mt={2} fontSize="sm" lineHeight="shorter">Simple Earn</Text>
              </Flex>
              <Flex>
                <Image src={earn} boxSize={20} />
              </Flex>
            </Flex>
            <Flex
              as={ReactRouterLink}
              to="/investmentplans"
              borderWidth="1px"
              borderRadius="2xl"
              borderColor="#e5e7eb"
              w={{ base: '100%', slg: '49%' }}
              p={6}
              m={0}
              alignItems="center"
              justifyContent="space-between"
              cursor="pointer"
              transition="transform 0.01s ease-in-out"
              _hover={{ textDecoration: 'none', transform: 'translateX(-1px)' }}
            >
              <Flex flexDir="column" w="80%">
                <Text m={0} fontSize="md" fontWeight="medium" lineHeight={6} mb={1}>Choose from a broad range of investment options.</Text>
                <Text m={0} fontSize="sm" fontWeight="normal" lineHeight="shorter">
                  S&P 500
                  <Text display="inline" fontWeight="medium" color="green"> + 48.40</Text>
                </Text>
                <Text color="#707a8a" m={0} mt={2} fontSize="sm" lineHeight="shorter">Securities</Text>
              </Flex>
              <Flex>
                <Image src={margin} boxSize={20} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Investment;
