// import React, { useState, useEffect } from 'react';
import {
  FormControl, FormLabel, NumberInput, NumberInputField,
} from '@chakra-ui/react';
import api from '../api';

const EditUser = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.put(`/accounts/${userId}`, {
        // eslint-disable-next-line object-shorthand
      });
      setTimeout(() => {
        navigate('/investment'); // Redirect to dashboard
      }, 3000); // After 3 seconds
      return response.data; // Add return statement
    } catch (error) {
      console.error('Error sending ', error);
      return null;
    }
  };
  return (
    <>
      <FormControl>
        <FormLabel>Amount</FormLabel>
        <NumberInput max={50} min={10}>
          <NumberInputField />
        </NumberInput>
      </FormControl>
    </>
  );
};

export default EditUser;
