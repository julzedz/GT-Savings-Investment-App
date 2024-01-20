/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Flex, Text, Divider, Button, Tooltip, Image, Box, useDisclosure,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  FormControl, FormLabel, NumberInput, NumberDecrementStepper,
  NumberInputStepper, NumberInputField, NumberIncrementStepper, FormHelperText, Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import earn from '../assets/earn.svg';
import Sidebar from './sidebar';
import margin from '../assets/margin.svg';
import AccountFooter from './accountfooter';

const Investment = () => {
  const [isVisible, setIsVisible] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  const scroll = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
`;

  const assetItems = [
    {
      name: 'Crude Oil', price: '44.85', change: '-3.47%', color: 'red',
    },
    {
      name: 'Gold', price: '1270.80', change: '-0.40%', color: 'red',
    },
    {
      name: 'Bitcoin', price: '41381.61', change: '-2.74%', color: 'red',
    },
    {
      name: 'Ethereum', price: '2489.80', change: '-1.40%', color: 'red',
    },
    {
      name: 'US 10 Year', price: '4.145', change: '+0.07%', color: 'green',
    },
  ];

  const topNews = [
    {
      title: 'Dow futures waver as market awaits further earnings', source: 'Investing.com', time: '16h ago', link: 'https://www.investing.com/',
    },
    {
      title: 'Fed raises rate, gives details on balance sheet reduction', source: 'MarketWatch', time: '12h ago', link: 'https://www.marketwatch.com/',
    },
    {
      title: 'US STOCKS-S&P 500 ends higher as AI optimism lifts chip stocks', source: 'Reuters', time: '11h ago', link: 'https://www.reuters.com/',
    },
    {
      title: 'Will Big Tech be the markets hero after a rocky 2024 start?', source: 'Associated Press', time: '2h ago', link: 'https://www.associatedpress.com/',
    },
  ];

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Flex
        // bgColor="#dcdfe0"
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
            bgColor="#f5f5f5"
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
                  colorScheme="green"
                  size="sm"
                  variant="solid"
                >
                  Deposit
                </Button>
                <Button
                  as={ReactRouterLink}
                  to="/withdrawal"
                  colorScheme="green"
                  size="sm"
                  variant="solid"
                  fontSize="sm"
                  fontWeight="600"
                  lineHeight="short"
                >
                  Withdraw
                </Button>
                <Button
                  colorScheme="green"
                  size="sm"
                  variant="solid"
                  fontSize="sm"
                  fontWeight="600"
                  lineHeight="short"
                  onClick={onOpen}
                >
                  Transfer
                </Button>
              </Flex>
            </Flex>
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader fontFamily="noto">
                  Transfer
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody fontFamily="noto" pb={6}>
                  <FormControl>
                    <FormLabel fontSize="xs">Investment Account</FormLabel>
                    <NumberInput ref={initialRef} step={500} min={100}>
                      <NumberInputField placeholder="Enter amount" />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <FormHelperText fontSize="xs">Transfer amount to your Savings Account</FormHelperText>
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button fontFamily="noto" colorScheme="green">
                    Send
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Flex width="fit-content">
              <Text fontSize={{ base: '2xl', lg: '2rem' }} fontWeight="semibold" m={0}>{isVisible ? '125,760.32' : '****'}</Text>
              <Text fontSize="sm" fontWeight="semibold" lineHeight="short" m={0} ml={2} alignSelf="flex-end" pb={2}>USD</Text>
            </Flex>
            <Flex flexDir="column" mt={3}>
              <Text fontSize="sm" lineHeight="short" mb={3}>
                {isVisible ? '≈ 4.2734883 ' : '****'}
                BTC
              </Text>
              <Flex justifyContent="space-around" maxWidth="50rem" gap={{ base: 1, sm: 6 }} mt={4} borderRadius={6} p={6} bgColor="gunmetal" color="white" w={{ base: '100%', sm: 'fit-content' }} textAlign="center" whiteSpace={{ base: 'nowrap', sm: 'nowrap' }}>
                <Text fontSize={{ base: 'xs', sm: 'md' }} fontWeight="medium" lineHeight={6} mb={1}>
                  Stakes
                  <Box fontSize={{ base: 'xxs', sm: 'sm' }} ml={{ base: 0, sm: 3 }}>{isVisible ? '$112,512.91' : '****'}</Box>
                </Text>
                <Text fontSize={{ base: 'xs', sm: 'md' }} fontWeight="medium" lineHeight={6} mb={1}>
                  Earnings
                  <Box fontSize={{ base: 'xxs', sm: 'sm' }} ml={{ base: 0, sm: 3 }}>{isVisible ? '$32,512.91' : '****'}</Box>
                </Text>
                <Text fontSize={{ base: 'xs', sm: 'sm' }} lineHeight={6} mb={1}>
                  Today&apos;s PnL
                  <Box fontSize={{ base: 'xxs', sm: 'sm' }} ml={{ base: 0, sm: 3 }} color="green">{isVisible ? '+ $712.50(0.2%)' : '****'}</Box>
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent={{ base: 'space-between', lg: 'normal' }} p={0} m={0} mt={{ base: 4, slg: 0 }} gap={{ base: 0, lg: 3 }} display={{ base: 'flex', slg: 'none' }}>
              <Button
                as={ReactRouterLink}
                to="/deposit"
                fontSize="sm"
                fontWeight="600"
                lineHeight="short"
                colorScheme="green"
                size="sm"
                width={{ base: '30%', slg: 'auto' }}
                variant="solid"
              >
                Deposit
              </Button>
              <Button
                colorScheme="green"
                as={ReactRouterLink}
                to="/withdrawal"
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
                colorScheme="green"
                size="sm"
                variant="solid"
                fontSize="sm"
                fontWeight="600"
                lineHeight="short"
                width={{ base: '30%', slg: 'auto' }}
                onClick={onOpen}
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
              to="/invest-deposit"
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
              bgColor="#f5f5f5"
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
              bgColor="#f5f5f5"
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
          <Flex
            maxWidth="60rem"
            w="100%"
            p={6}
            m={0}
            bgColor="#f5f5f5"
            flexDir="column"
            mb={6}
            borderRadius={4}
            overflowX={{ base: 'hidden' }}
          >
            <Flex flexDir="column">
              <Flex flexDir="column">
                <Text
                  fontSize={{ base: 'lg', xl: '2xl' }}
                  fontWeight="bold"
                  m={0}
                >
                  Today&apos;s Markets
                </Text>
                <Text fontSize="sm" color="gray">US Markets Overview</Text>
              </Flex>
              <Divider colorScheme="red" />
              <Flex fontSize="lg" alignItems="center" justifyContent="space-between" flexDir={{ base: 'column', lg: 'row' }}>
                <Flex gap={2} flexDir={{ base: 'row', lg: 'column' }}>
                  <Text mb={2} color="#0E67A9">DJIA</Text>
                  <Text mb={1} fontSize={{ base: 'sm', slg: 'lg' }} color="green">+201.75 (+1.85%)</Text>
                  <Text color="green" fontSize={{ base: 'sm', slg: 'lg' }}>21,284.85</Text>
                </Flex>
                <Flex gap={2} flexDir={{ base: 'row', lg: 'column' }}>
                  <Text mb={2} color="#0E67A9">NASDAQ</Text>
                  <Text color="red" mb={1} fontSize={{ base: 'sm', slg: 'lg' }}>-6.5 (-0.10%)</Text>
                  <Text color="red" fontSize={{ base: 'sm', slg: 'lg' }}>6,214.11</Text>
                </Flex>
                <Flex gap={2} flexDir={{ base: 'row', lg: 'column' }}>
                  <Text mb={2} color="#0E67A9">S&P 500</Text>
                  <Text color="green" mb={1} fontSize={{ base: 'sm', slg: 'lg' }}>+41.73 (+1.04%)</Text>
                  <Text color="green" fontSize={{ base: 'sm', slg: 'lg' }}>4,780.74</Text>
                </Flex>
                <Flex gap={2} flexDir={{ base: 'row', lg: 'column' }} justifySelf={{ base: '', lg: 'auto' }}>
                  <Text mb={2} color="#0E67A9">AAPL</Text>
                  <Text mb={1} color="green" fontSize={{ base: 'sm', slg: 'lg' }}>+5.95 (+2.07%)</Text>
                  <Text color="green" fontSize={{ base: 'sm', slg: 'lg' }}>188.64</Text>
                </Flex>
              </Flex>
              <Divider />
              <Box
                display="flex"
                gap={4}
                css={{
                  // overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  animation: `${scroll} 50s linear infinite`,
                }}
              >
                {[...Array(2)].map((_, index) => (
                  <React.Fragment key={index}>
                    {assetItems.map((asset, i) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <Flex gap={1.5} key={i}>
                        <Text color="#0E67A9" m={0}>{asset.name}</Text>
                        <Text m={0}>{asset.price}</Text>
                        <Text color={asset.color} m={0}>{asset.change}</Text>
                      </Flex>
                    ))}
                  </React.Fragment>
                ))}
              </Box>
              <Divider />
            </Flex>
            <Flex flexDir="column">
              <Text
                fontSize={{ base: 'lg', xl: '2xl' }}
                fontWeight="bold"
              >
                Top News
              </Text>
              {topNews.map((item, i) => (
                <Flex key={i} flexDir="column" mb={4}>
                  <Link w="fit-content" as={ReactRouterLink} to={item.link} color="#0E67A9" fontSize="lg" fontWeight="semibold">{item.title}</Link>
                  <Flex color="gray" fontSize="sm" gap={4}>
                    <Box>{item.source}</Box>
                    <Box>{item.time}</Box>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <AccountFooter />
        </Flex>
      </Flex>
    </>
  );
};

export default Investment;
