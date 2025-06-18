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
import useStore from '../../store/useStore';

const UserDetails = () => {
  const { userId } = useParams();
  const [editingField, setEditingField] = useState(null);
  const [editValue, setEditValue] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const {
    selectedUser,
    selectedAccount,
    isLoading,
    fetchUserById,
    fetchAccountById,
    updateUserField,
    updateAccountField,
  } = useStore();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await fetchUserById(userId);
        if (userData?.account) {
          await fetchAccountById(userData.account.id);
        }
      } catch (error) {
        toast({
          title: 'Error fetching user details',
          description:
            error.response?.data?.message || 'Failed to load user details',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };

    loadUserData();
  }, [userId, fetchUserById, fetchAccountById, toast]);

  const handleEdit = (field, value) => {
    setEditingField(field);
    setEditValue(value);
  };

  const handleSave = async (field) => {
    try {
      if (
        [
          'savings_account',
          'investment_account',
          'earnings',
          'stakes',
        ].includes(field)
      ) {
        await updateAccountField(selectedAccount.id, field, editValue);
      } else {
        await updateUserField(userId, field, editValue);
      }

      toast({
        title: 'Update successful',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      setEditingField(null);
    } catch (error) {
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

  if (!selectedUser) {
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
              {renderEditableField(
                'First Name',
                'first_name',
                selectedUser.first_name
              )}
              {renderEditableField(
                'Last Name',
                'last_name',
                selectedUser.last_name
              )}
              {renderEditableField('Email', 'email', selectedUser.email)}
              {renderEditableField(
                'Phone',
                'phone_number',
                selectedUser.phone_number
              )}
              {renderEditableField('City', 'city', selectedUser.city)}
              {renderEditableField('State', 'state', selectedUser.state)}
              {renderEditableField('Country', 'country', selectedUser.country)}
              {renderEditableField(
                'Home Address',
                'home_address',
                selectedUser.home_address
              )}
              {renderEditableField('PIN', 'PIN', selectedUser.PIN)}
            </VStack>
          </GridItem>

          <GridItem>
            <VStack spacing={4} align="stretch">
              <Text fontSize="lg" fontWeight="medium">
                Account Information
              </Text>
              {selectedAccount ? (
                <>
                  {renderEditableField(
                    'Savings Account',
                    'savings_account',
                    selectedAccount.savings_account,
                    'number'
                  )}
                  {renderEditableField(
                    'Monthly Income',
                    'investment_account',
                    selectedAccount.investment,
                    'number'
                  )}
                  {renderEditableField(
                    'Monthly Outgoing',
                    'earnings',
                    selectedAccount.earnings,
                    'number'
                  )}
                  {renderEditableField(
                    'Stakes',
                    'stakes',
                    selectedAccount.stakes,
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
      <Box display="flex" justifyContent="center" mt={4}>
        <Button colorScheme="green" onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </Button>
      </Box>
    </Box>
  );
};

export default UserDetails;
