import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  useToast,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  const fetchUserDetails = async () => {
    setIsLoading(true);
    try {
      const userResponse = await api.get(`/users/${userId}`);
      setUser(userResponse.data);

      if (userResponse.data.account) {
        const accountResponse = await api.get(
          `/accounts/${userResponse.data.account.id}`
        );
        setAccount(accountResponse.data);
      }
    } catch (error) {
      console.error('Error in fetchUserDetails:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      toast({
        title: 'Error fetching user details',
        description:
          error.response?.data?.message || 'Failed to load user details',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (field, value) => {
    setEditingField(field);
    setEditValue(value);
  };

  const handleSave = async (field) => {
    try {
      let response;
      const updates = {};

      if (
        [
          'savings_account',
          'investment_account',
          'earnings',
          'stakes',
        ].includes(field)
      ) {
        const fieldMapping = {
          savings_account: 'new_savings_account',
          investment_account: 'new_invest',
          earnings: 'new_earnings',
          stakes: 'new_stakes',
        };

        updates[fieldMapping[field]] = editValue;
        response = await api.patch(`/accounts/${account.id}`, updates);
        setAccount(response.data);
      } else {
        response = await api.put(`/users/${userId}`, {
          [field]: editValue,
        });
        setUser(response.data);
      }

      toast({
        title: 'Update successful',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      setEditingField(null);
    } catch (error) {
      console.error('Error in handleSave:', {
        field,
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      toast({
        title: 'Update failed',
        description: error.response?.data?.message || 'Failed to update field',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (isLoading) {
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

  if (!user) {
    return (
      <Center h="100vh">
        <Text>No user data available</Text>
      </Center>
    );
  }

  const renderEditableField = (label, field, value, type = 'text') => {
    const isEditing = editingField === field;

    return (
      <FormControl key={field}>
        <FormLabel>{label}</FormLabel>
        <HStack>
          {isEditing ? (
            type === 'number' ? (
              <NumberInput
                value={editValue}
                onChange={(value) => setEditValue(value)}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            ) : (
              <Input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            )
          ) : (
            <Text>{value || 'Not set'}</Text>
          )}
          {isEditing ? (
            <Button
              colorScheme="blue"
              size="sm"
              onClick={() => handleSave(field)}
            >
              Save
            </Button>
          ) : (
            <Button
              colorScheme="gray"
              size="sm"
              onClick={() => handleEdit(field, value)}
            >
              Edit
            </Button>
          )}
        </HStack>
      </FormControl>
    );
  };

  return (
    <Box p={4} fontFamily="new">
      <VStack spacing={6} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          User Details
        </Text>

        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <VStack spacing={4} align="stretch">
              <Text fontSize="lg" fontWeight="medium">
                Personal Information
              </Text>
              {renderEditableField('First Name', 'first_name', user.first_name)}
              {renderEditableField('Last Name', 'last_name', user.last_name)}
              {renderEditableField('Email', 'email', user.email)}
              {renderEditableField('Phone', 'phone_number', user.phone_number)}
              {renderEditableField('City', 'city', user.city)}
              {renderEditableField('State', 'state', user.state)}
              {renderEditableField('Country', 'country', user.country)}
            </VStack>
          </GridItem>

          <GridItem>
            <VStack spacing={4} align="stretch">
              <Text fontSize="lg" fontWeight="medium">
                Account Information
              </Text>
              {account ? (
                <>
                  {renderEditableField(
                    'Savings Account',
                    'savings_account',
                    account.savings_account,
                    'number'
                  )}
                  {renderEditableField(
                    'Monthly Income',
                    'investment_account',
                    account.investment,
                    'number'
                  )}
                  {renderEditableField(
                    'Monthly Outgoing',
                    'earnings',
                    account.earnings,
                    'number'
                  )}
                  {renderEditableField(
                    'Stakes',
                    'stakes',
                    account.stakes,
                    'number'
                  )}
                </>
              ) : (
                <Text color="gray.500">No account information available</Text>
              )}
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default UserDetails;
