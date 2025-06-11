import React from 'react';
import {
  Flex,
  Text,
  Skeleton,
  Avatar,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { RiNotification2Fill, RiWallet3Line } from 'react-icons/ri';
import CurrentDateDisplay from './CurrentDateDisplay';
import useStore from '../store/useStore';

const Header = () => {
  const { isLoading, getFormattedBalance } = useStore();
  const formattedBalance = getFormattedBalance();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid gray.500"
      bgColor="white"
      fontSize="xs"
      px={6}
      py={3}
    >
      <Flex alignItems="center" gap={2} color="gray.500" fontWeight="medium">
        <CalendarIcon />
        <CurrentDateDisplay />
      </Flex>
      <Flex gap={4} alignItems="center">
        <Flex
          bgColor="tiffanyblue"
          alignItems="center"
          py={0.5}
          px={2}
          gap={2}
          borderRadius="lg"
          fontWeight="medium"
        >
          <RiWallet3Line />
          {isLoading ? (
            <Skeleton height="20px" width="60px" />
          ) : (
            <Text>${formattedBalance}</Text>
          )}
        </Flex>
        <RiNotification2Fill />
        <Avatar size="xs" />
      </Flex>
    </Flex>
  );
};

export default Header;
