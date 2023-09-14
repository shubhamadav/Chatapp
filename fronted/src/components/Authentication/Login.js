import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitButton = () => {
    // Handle the login logic here
  };

  return (
    <VStack spacing="5px" color="black">
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <InputGroup>
        <FormControl id='password' isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem" size="sm">
            <Button
              h="1.75rem"
              size="sm"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </FormControl>
      </InputGroup>
      <Button
        colorScheme="blue"
        size="sm"
        width="100%"
        mt={4}
        onClick={submitButton}
      >
        Login
      </Button>
      <Button
        colorScheme="orange"
        size="sm"
        width="100%"
        mt={4}
        onClick={()=>{
            setEmail("shubhamyad071@gmail.com");
            setPassword("12345678");
        }}
      >
        Get Geast User Credentials
      </Button>
    </VStack>
  );
}

export default Login;
