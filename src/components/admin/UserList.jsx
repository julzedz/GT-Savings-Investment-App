import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, List, ListItem, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const UserList = () => {
  const [users, setUsers] = useState([]);
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
    navigate(`/user/${user.id}`);
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
    </Box>
  );
};

export default UserList;
