import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const PasswordInput = ({ value, onChange, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        autoComplete="current-password"
        {...props}
      />
      <InputRightElement width="4.5rem">
        <IconButton
          h="1.75rem"
          size="sm"
          onClick={handleClick}
          icon={show ? <ViewOffIcon /> : <ViewIcon />}
          aria-label={show ? 'Hide password' : 'Show password'}
          variant="ghost"
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
