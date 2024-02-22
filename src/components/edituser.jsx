import React, { useState } from 'react';
import {
  FormControl, FormLabel, Input, Button, NumberInput, NumberInputField,
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { COOKIE_TOKEN } from './dashboard';
import api from '../api';

const EditUser = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [created, setCreated] = useState('');
  const [country, setCountry] = useState('');
  const [savings, setSavings] = useState('');
  const [invest, setInvest] = useState('');
  const [earnings, setEarnings] = useState('');
  const [stakes, setStakes] = useState('');

  const handleSubmit = async (event) => {
    const userDetails = Cookies.get(COOKIE_TOKEN);
    const parsedToken = JSON.parse(userDetails);
    const userId = parsedToken.id;
    event.preventDefault();
    try {
      const response = await api.put(`/users/${userId}`, {
        // eslint-disable-next-line object-shorthand
        city: city,
      });
      return response.data; // Add return statement
    } catch (error) {
      return null;
    }
  };

  const handleSubmit1 = async (event) => {
    const userDetails = Cookies.get(COOKIE_TOKEN);
    const parsedToken = JSON.parse(userDetails);
    const userId = parsedToken.id;
    event.preventDefault();
    try {
      const response = await api.put(`/users/${userId}`, {
        // eslint-disable-next-line object-shorthand
        state: state,
      });
      return response.data; // Add return statement
    } catch (error) {
      return null;
    }
  };

  const handleSubmit2 = async (event) => {
    const userDetails = Cookies.get(COOKIE_TOKEN);
    const parsedToken = JSON.parse(userDetails);
    const userId = parsedToken.id;
    event.preventDefault();
    try {
      const response = await api.put(`/users/${userId}`, {
        created_at: created,
      });
      return response.data; // Add return statement
    } catch (error) {
      return null;
    }
  };

  const handleSubmit3 = async (event) => {
    const userDetails = Cookies.get(COOKIE_TOKEN);
    const parsedToken = JSON.parse(userDetails);
    const userId = parsedToken.id;
    event.preventDefault();
    try {
      const response = await api.put(`/users/${userId}`, {
        // eslint-disable-next-line object-shorthand
        country: country,
      });
      return response.data; // Add return statement
    } catch (error) {
      return null;
    }
  };

  const handleSubmit4 = async (event) => {
    const userDetails = Cookies.get(COOKIE_TOKEN);
    const parsedToken = JSON.parse(userDetails);
    const userId = parsedToken.account.id;
    event.preventDefault();
    try {
      const response = await api.put(`/accounts/${userId}`, {
        new_savings_account: savings,
      });
      return response.data; // Add return statement
    } catch (error) {
      return null;
    }
  };
  const handleSubmit5 = async (event) => {
    const userDetails = Cookies.get(COOKIE_TOKEN);
    const parsedToken = JSON.parse(userDetails);
    const userId = parsedToken.account.id;
    event.preventDefault();
    try {
      const response = await api.put(`/accounts/${userId}`, {
        new_invest: invest,
      });
      return response.data; // Add return statement
    } catch (error) {
      return null;
    }
  };

  const handleSubmit6 = async (event) => {
    const userDetails = Cookies.get(COOKIE_TOKEN);
    const parsedToken = JSON.parse(userDetails);
    const userId = parsedToken.account.id;
    event.preventDefault();
    try {
      const response = await api.put(`/accounts/${userId}`, {
        new_earnings: earnings,
      });
      return response.data; // Add return statement
    } catch (error) {
      return null;
    }
  };

  const handleSubmit7 = async (event) => {
    const userDetails = Cookies.get(COOKIE_TOKEN);
    const parsedToken = JSON.parse(userDetails);
    const userId = parsedToken.account.id;
    event.preventDefault();
    try {
      const response = await api.put(`/accounts/${userId}`, {
        new_stakes: stakes,
      });
      return response.data; // Add return statement
    } catch (error) {
      return null;
    }
  };

  return (
    <>
      <FormControl textAlign="center">
        <FormLabel textAlign="center">city</FormLabel>
        <Input
          w="fit-content"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          ml={4}
          colorScheme="teal"
          type="submit"
          onClick={handleSubmit}
        >
          Update
        </Button>
      </FormControl>
      <FormControl textAlign="center">
        <FormLabel textAlign="center">state</FormLabel>
        <Input
          w="fit-content"
          placeholder="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <Button
          ml={4}
          colorScheme="teal"
          type="submit"
          onClick={handleSubmit1}
        >
          Update
        </Button>
      </FormControl>
      <FormControl textAlign="center">
        <FormLabel textAlign="center">date created</FormLabel>
        <Input
          w="fit-content"
          placeholder="date created"
          value={created}
          onChange={(e) => setCreated(e.target.value)}
        />
        <Button
          ml={4}
          colorScheme="teal"
          type="submit"
          onClick={handleSubmit2}
        >
          Update
        </Button>
      </FormControl>
      <FormControl textAlign="center">
        <FormLabel textAlign="center">country</FormLabel>
        <Input
          w="fit-content"
          placeholder="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Button
          ml={4}
          colorScheme="teal"
          type="submit"
          onClick={handleSubmit3}
        >
          Update
        </Button>
      </FormControl>
      <FormControl textAlign="center">
        <FormLabel textAlign="center">savings</FormLabel>
        <NumberInput>
          <NumberInputField w="fit-content" placeholder="savings account" value={savings} onChange={(e) => setSavings(e.target.value)} mb={4} />
        </NumberInput>
        <Button
          ml={4}
          mb={6}
          colorScheme="teal"
          type="submit"
          onClick={handleSubmit4}
        >
          Update
        </Button>
      </FormControl>
      <FormControl textAlign="center">
        <FormLabel textAlign="center">investment account</FormLabel>
        <NumberInput>
          <NumberInputField w="fit-content" placeholder="investment account" value={invest} onChange={(e) => setInvest(e.target.value)} mb={4} />
        </NumberInput>
        <Button
          ml={4}
          mb={6}
          colorScheme="teal"
          type="submit"
          onClick={handleSubmit5}
        >
          Update
        </Button>
      </FormControl>
      <FormControl textAlign="center">
        <FormLabel textAlign="center">earnings</FormLabel>
        <NumberInput>
          <NumberInputField w="fit-content" placeholder="earnings" value={earnings} onChange={(e) => setEarnings(e.target.value)} mb={4} />
        </NumberInput>
        <Button
          ml={4}
          mb={6}
          colorScheme="teal"
          type="submit"
          onClick={handleSubmit6}
        >
          Update
        </Button>
      </FormControl>
      <FormControl textAlign="center">
        <FormLabel textAlign="center">stakes</FormLabel>
        <NumberInput>
          <NumberInputField w="fit-content" placeholder="stakes" value={stakes} onChange={(e) => setStakes(e.target.value)} mb={4} />
        </NumberInput>
        <Button
          ml={4}
          mb={6}
          colorScheme="teal"
          type="submit"
          onClick={handleSubmit7}
        >
          Update
        </Button>
      </FormControl>
    </>
  );
};

export default EditUser;
