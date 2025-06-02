import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Text,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
  List,
  ListItem,
  useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import PasswordInput from '../ui/PasswordInput';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      toast({
        title: 'Error fetching users',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    onOpen();
  };

  const handleAuth = async () => {
    if (!email || !password) {
      toast({
        title: 'Missing credentials',
        description: 'Please enter both email and password',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      // First, try to authenticate the admin
      const authResponse = await api.post('/login', {
        email,
        password,
      });

      if (authResponse.data && authResponse.data.token) {
        // Store the token
        localStorage.setItem('admin_token', authResponse.data.token);

        // Set the token in the API headers for future requests
        api.defaults.headers.common['Authorization'] =
          `Bearer ${authResponse.data.token}`;

        // Close the modal and navigate to user details
        onClose();
        navigate(`/user/${selectedUser.id}`);

        toast({
          title: 'Authentication successful',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      toast({
        title: 'Authentication failed',
        description:
          error.response?.data?.message || 'Invalid email or password',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box p={4} fontFamily="new">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Registered Users
      </Text>
      <List spacing={3}>
        {users.map((user) => (
          <ListItem
            key={user.id}
            p={3}
            borderWidth="1px"
            borderRadius="md"
            cursor="pointer"
            _hover={{ bg: 'gray.50' }}
            onClick={() => handleUserClick(user)}
          >
            <VStack align="start" spacing={1}>
              <Text fontWeight="medium">
                {user.first_name} {user.last_name}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {user.email}
              </Text>
            </VStack>
          </ListItem>
        ))}
      </List>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent fontFamily="new">
          <ModalHeader>Admin Authentication</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4}>
              <Text fontSize="sm" color="gray.600">
                Please enter your admin credentials to edit user details
              </Text>
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
              />
              <PasswordInput
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                colorScheme="blue"
                onClick={handleAuth}
                width="full"
                isLoading={isLoading}
                loadingText="Authenticating..."
              >
                Authenticate
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default UserList;
