/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Flex, Text, FormControl, Select, FormLabel, NumberInput, NumberInputField, Icon,
  NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, UnorderedList,
  ListItem, Tooltip, Image, FormHelperText, Input, Button,
} from '@chakra-ui/react';
import { FaCopy } from 'react-icons/fa';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';
import qrcode from '../assets/qrcode.jpg';
// import Tether from '../assets/icons8-tether.svg';

const Deposit = () => {
  const address = '0x3bF71E4250631076269426d735F4Ea37c10C7256';
  const [file, setFile] = useState(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      console.log('Address copied to clipboard');
    } catch (err) {
      console.log('Failed to copy address', err);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    // send file into database
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('https:///api.3xtradehub.com/api/v1/deposit', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  };

  return (
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
          <Flex minHeight="3xl" flexDir="column">
            <Text
              alignSelf="center"
              justifySelf="center"
              fontSize={{ base: 'lg', xl: '2xl' }}
              fontWeight="bold"
              mb={6}
            >
              Fund Account
            </Text>
            <FormControl
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              mb={6}
            >
              <FormLabel fontSize="xs">Payment Method</FormLabel>
              <Select
              // value=""
                id="payment"
                placeholder="Select payment method"
              >
                <option value="USDT">USDT</option>
                <option value="USDC">USDC</option>
                <option value="BTC">BTC</option>
                <option value="ETH">Ethereum</option>
                <option value="cashapp">Cashapp</option>
                <option value="venmo">Venmo</option>
                <option value="paypal">PayPal</option>
                <option value="zelle">Zelle</option>
              </Select>
            </FormControl>
            <FormControl
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              mb={6}
            >
              <FormLabel fontSize="xs">Amount</FormLabel>
              <NumberInput step={500} min={1000}>
                <NumberInputField placeholder="Enter amount" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormHelperText fontSize="xs">Minimum deposit ≈1000 USDT</FormHelperText>
            </FormControl>

            {/* <Text>Note</Text> */}
            <UnorderedList
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              textColor="#707a8a"
              fontSize="xs"
              spacing={3}
              mb={6}
            >
              <ListItem>Please make deposit before submitting the form.</ListItem>
              <ListItem>
                Deposits will be credited and available on dashboard after 1 confirmation.
              </ListItem>
              <ListItem>Crypto deposits are faster and preferable.</ListItem>
              <ListItem>
                Deposits may be via any of the supported networks:
                Tron (TRC20), BSC (BEP20), ETH (ERC20), Polygon, Arbitrum Network.
              </ListItem>
              <ListItem>Do not send NFTs to this address.</ListItem>
            </UnorderedList>

            <FormControl
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              mb={6}
            >
              <FormLabel fontSize="xs">Deposit Address</FormLabel>
              <Flex alignItems="center" justifyContent="space-between" bgColor="#fafafa" borderRadius="5px" p={5} minH="10rem" gap="5%" w="100%">
                <Flex alignItems="center" justifyContent="center">
                  <Image src={qrcode} boxSize="100px" minW="100px" />
                </Flex>
                <Flex alignItems="center" justifyContent="center" position="relative">
                  <Flex flexDir="column">
                    <Text fontSize="xs" color="gray.500" m={0}>Address</Text>
                    <Text fontSize={{ base: 'xs', sm: 'md' }} lineHeight={{ base: 'shorter', sm: '16px' }} fontWeight={{ base: '400', sm: '500' }} color="#1e2329" wordBreak="break-word" textAlign="start">
                      {address}
                    </Text>
                  </Flex>
                  <Tooltip label="Click to copy" fontFamily="new" fontSize="xs">
                    <Icon as={FaCopy} boxSize={7} padding="4px" borderRadius="2px" bgColor="#e9ecef" color="gray" _hover={{ color: 'black' }} cursor="pointer" ml={2} display="inline" onClick={handleCopy} />
                  </Tooltip>
                </Flex>
              </Flex>
            </FormControl>
            <FormControl
              w={{
                base: '100%', md: '80%', lg: '70%', slg: '60%',
              }}
              mb={6}
            >
              <FormLabel fontSize="xs">Payment Receipt</FormLabel>
              <Input type="file" accept="image/*" onChange={handleFileChange} />
            </FormControl>

            <Button
              mt={4}
              mb={20}
              colorScheme="green"
              type="submit"
              fontFamily="noto"
              w="40%"
              alignSelf="center"
              p={6}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Flex>
          <AccountFooter />
        </Flex>
      </Flex>
    </>
  );
};

export default Deposit;
