import React from 'react';
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import UserList from './admin/UserList';
import UserDetails from './admin/UserDetails';

const EditUser = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>
    </Box>
  );
};

export default EditUser;
