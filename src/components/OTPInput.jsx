import React, { useState, useEffect } from 'react';
import {
  Flex,
  PinInput,
  PinInputField,
  HStack,
  Text,
  Button,
  useToast,
  VStack,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../api';

const OTPInput = () => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  // Get email from localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const email = user.email;

  useEffect(() => {
    // Redirect to login if no email is found
    if (!email) {
      navigate('/login');
      return;
    }

    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000);

    // Start countdown timer
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, [email, navigate]);

  const handleVerify = async () => {
    if (otp.length !== 4) {
      toast({
        title: 'Invalid OTP',
        description: 'Please enter the complete 4-digit code',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await api.post(
        '/verify-otp',
        {
          email: email,
          otp: otp,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.token) {
        // Store the new token and user data
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        api.defaults.headers.common['Authorization'] =
          `Bearer ${response.data.token}`;

        toast({
          title: 'Verification successful',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        navigate('/dashboard');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Verification error:', error.response?.data);
      toast({
        title: 'Verification failed',
        description: error.response?.data?.error || 'Invalid OTP code',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (timeLeft > 0) return;

    setIsLoading(true);
    try {
      await api.post(
        '/resend-otp',
        { email: email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setTimeLeft(60);
      toast({
        title: 'OTP resent',
        description: 'A new code has been sent to your email',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Resend error:', error.response?.data);
      toast({
        title: 'Failed to resend OTP',
        description: error.response?.data?.error || 'Please try again later',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isPageLoading) {
    return (
      <Center h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgColor="#f2f2f2"
      fontFamily="mono"
    >
      <VStack
        spacing={8}
        p={8}
        bgColor="white"
        borderRadius="lg"
        boxShadow="lg"
        w={{ base: '90%', md: 'md' }}
      >
        <Text fontSize="2xl" fontWeight="bold">
          Enter Verification Code
        </Text>
        <Text color="gray.600" textAlign="center">
          We've sent a 4-digit code to your email address
        </Text>

        <HStack spacing={4}>
          <PinInput
            otp
            size="lg"
            value={otp}
            onChange={setOtp}
            isDisabled={isLoading}
          >
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <Button
          colorScheme="blue"
          width="full"
          onClick={handleVerify}
          isLoading={isLoading}
          loadingText="Verifying..."
        >
          Verify
        </Button>

        <Text color="gray.500" fontSize="sm">
          {timeLeft > 0 ? (
            `Resend code in ${timeLeft} seconds`
          ) : (
            <Button
              variant="link"
              color="blue.500"
              onClick={handleResend}
              isDisabled={isLoading}
            >
              Resend code
            </Button>
          )}
        </Text>
      </VStack>
    </Flex>
  );
};

export default OTPInput;
