import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import {
  Flex,
  FormControl,
  Select,
  Box,
  Heading,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Skeleton,
  SkeletonText,
  Stack,
  Container,
  Text,
  useToast,
  Grid,
  GridItem,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import AccountFooter from './accountfooter';
import FormNavbar from './formnavbar';
import building from '../assets/building2.jpg';
import api from '../api';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  dob: Yup.date()
    .required('Date of birth is required')
    .max(new Date(), 'Date of birth cannot be in the future'),
  citizenship: Yup.string().required('Country of citizenship is required'),
  mobile: Yup.string()
    .matches(
      /^(\+\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,
      'Please enter a valid phone number'
    )
    .required('Phone number is required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special character'
    ),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

const Signup = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return (
      <>
        <FormNavbar />
        <Box
          display="flex"
          mt={{ base: 13, lg: 0 }}
          minH={{ base: '10rem', lg: '2xs' }}
          maxH={{ base: 'xs', lg: 'xs' }}
          backgroundImage={`linear-gradient(to right, #000000 25%, #0087d430 100%), url(${building})`}
          bgSize="cover"
          opacity="0.93"
          bgColor="transparent"
          alignItems="flex-end"
        >
          <Skeleton height="80px" width="200px" m={3} p={4} />
        </Box>
        <Container maxW="container.xl" py={8}>
          <Box
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="xl"
            maxW="800px"
            mx="auto"
          >
            <Stack spacing={6}>
              <Skeleton height="40px" />
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem>
                  <Skeleton height="40px" />
                </GridItem>
                <GridItem>
                  <Skeleton height="40px" />
                </GridItem>
              </Grid>
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
            </Stack>
          </Box>
        </Container>
        <AccountFooter />
      </>
    );
  }

  return (
    <>
      <FormNavbar />
      <Box
        display="flex"
        mt={{ base: 13, lg: 0 }}
        minH={{ base: '10rem', lg: '2xs' }}
        maxH={{ base: 'xs', lg: 'xs' }}
        backgroundImage={`linear-gradient(to right, #000000 25%, #0087d430 100%), url(${building})`}
        bgSize="cover"
        opacity="0.93"
        bgColor="transparent"
        alignItems="flex-end"
      >
        <Heading
          m={3}
          p={4}
          textAlign={{ base: 'left', lg: 'left' }}
          fontSize={{ base: '3xl', sm: '5xl', lg: '7xl' }}
          fontWeight={{ base: 'bold', lg: 'black' }}
          width={{ base: '100%', lg: '80%' }}
          textColor="white"
        >
          Create Account
        </Heading>
      </Box>
      <Container maxW="container.xl" py={8}>
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          boxShadow="xl"
          maxW="800px"
          mx="auto"
          fontFamily="new"
        >
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              dob: '',
              citizenship: '',
              mobile: '',
              email: '',
              city: '',
              state: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              setIsLoading(true);
              try {
                const userPayload = {
                  user: {
                    first_name: values.firstName,
                    last_name: values.lastName,
                    date_of_birth: values.dob,
                    phone_number: values.mobile,
                    email: values.email,
                    city: values.city,
                    state: values.state,
                    password: values.password,
                    country: values.citizenship,
                  },
                };

                await api.post('/users', userPayload);
                toast({
                  title: 'Account created successfully',
                  description: 'Redirecting to login...',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                });
                setTimeout(() => {
                  navigate('/login');
                }, 3000);
              } catch (error) {
                toast({
                  title: 'Error creating account',
                  description:
                    error.response?.data?.message || 'Something went wrong',
                  status: 'error',
                  duration: 5000,
                  isClosable: true,
                });
              } finally {
                setIsLoading(false);
                actions.setSubmitting(false);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Stack spacing={6}>
                  <Heading size="lg" textAlign="center" mb={6}>
                    Personal Information
                  </Heading>

                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <GridItem>
                      <Field name="firstName">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.firstName && form.touched.firstName
                            }
                          >
                            <FormLabel>First Name</FormLabel>
                            <Input
                              {...field}
                              placeholder="Enter your first name"
                              size="lg"
                              variant="filled"
                              _hover={{ borderColor: 'green.500' }}
                              _focus={{
                                borderColor: 'green.500',
                                boxShadow: '0 0 0 1px green.500',
                              }}
                            />
                            <FormErrorMessage>
                              {form.errors.firstName}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </GridItem>
                    <GridItem>
                      <Field name="lastName">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.lastName && form.touched.lastName
                            }
                          >
                            <FormLabel>Last Name</FormLabel>
                            <Input
                              {...field}
                              placeholder="Enter your last name"
                              size="lg"
                              variant="filled"
                              _hover={{ borderColor: 'green.500' }}
                              _focus={{
                                borderColor: 'green.500',
                                boxShadow: '0 0 0 1px green.500',
                              }}
                            />
                            <FormErrorMessage>
                              {form.errors.lastName}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </GridItem>
                  </Grid>

                  <Field name="dob">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.dob && form.touched.dob}
                      >
                        <FormLabel>Date of Birth</FormLabel>
                        <Input
                          {...field}
                          type="date"
                          size="lg"
                          variant="filled"
                          _hover={{ borderColor: 'green.500' }}
                          _focus={{
                            borderColor: 'green.500',
                            boxShadow: '0 0 0 1px green.500',
                          }}
                        />
                        <FormErrorMessage>{form.errors.dob}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="citizenship">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.citizenship && form.touched.citizenship
                        }
                      >
                        <FormLabel>Country of Citizenship</FormLabel>
                        <Select
                          {...field}
                          placeholder="Select your country"
                          size="lg"
                          variant="filled"
                          _hover={{ borderColor: 'green.500' }}
                          _focus={{
                            borderColor: 'green.500',
                            boxShadow: '0 0 0 1px green.500',
                          }}
                        >
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                          <option value="Japan">Japan</option>
                          <option value="Singapore">Singapore</option>
                          <option value="South Korea">South Korea</option>
                          <option value="Other">Other</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.citizenship}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="mobile">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.mobile && form.touched.mobile}
                      >
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter your phone number"
                          size="lg"
                          variant="filled"
                          _hover={{ borderColor: 'green.500' }}
                          _focus={{
                            borderColor: 'green.500',
                            boxShadow: '0 0 0 1px green.500',
                          }}
                        />
                        <FormErrorMessage>
                          {form.errors.mobile}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel>Email Address</FormLabel>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter your email"
                          size="lg"
                          variant="filled"
                          _hover={{ borderColor: 'green.500' }}
                          _focus={{
                            borderColor: 'green.500',
                            boxShadow: '0 0 0 1px green.500',
                          }}
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <GridItem>
                      <Field name="city">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.city && form.touched.city}
                          >
                            <FormLabel>City</FormLabel>
                            <Input
                              {...field}
                              placeholder="Enter your city"
                              size="lg"
                              variant="filled"
                              _hover={{ borderColor: 'green.500' }}
                              _focus={{
                                borderColor: 'green.500',
                                boxShadow: '0 0 0 1px green.500',
                              }}
                            />
                            <FormErrorMessage>
                              {form.errors.city}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </GridItem>
                    <GridItem>
                      <Field name="state">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.state && form.touched.state}
                          >
                            <FormLabel>State</FormLabel>
                            <Input
                              {...field}
                              placeholder="Enter your state"
                              size="lg"
                              variant="filled"
                              _hover={{ borderColor: 'green.500' }}
                              _focus={{
                                borderColor: 'green.500',
                                boxShadow: '0 0 0 1px green.500',
                              }}
                            />
                            <FormErrorMessage>
                              {form.errors.state}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </GridItem>
                  </Grid>

                  <Heading size="lg" textAlign="center" mb={6}>
                    Account Security
                  </Heading>

                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel>Password</FormLabel>
                        <InputGroup size="lg">
                          <Input
                            {...field}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Create a password"
                            variant="filled"
                            _hover={{ borderColor: 'green.500' }}
                            _focus={{
                              borderColor: 'green.500',
                              boxShadow: '0 0 0 1px green.500',
                            }}
                          />
                          <InputRightElement>
                            <IconButton
                              variant="ghost"
                              aria-label={
                                showPassword ? 'Hide password' : 'Show password'
                              }
                              icon={
                                showPassword ? <ViewOffIcon /> : <ViewIcon />
                              }
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="confirmPassword">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.confirmPassword &&
                          form.touched.confirmPassword
                        }
                      >
                        <FormLabel>Confirm Password</FormLabel>
                        <InputGroup size="lg">
                          <Input
                            {...field}
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm your password"
                            variant="filled"
                            _hover={{ borderColor: 'green.500' }}
                            _focus={{
                              borderColor: 'green.500',
                              boxShadow: '0 0 0 1px green.500',
                            }}
                          />
                          <InputRightElement>
                            <IconButton
                              variant="ghost"
                              aria-label={
                                showConfirmPassword
                                  ? 'Hide password'
                                  : 'Show password'
                              }
                              icon={
                                showConfirmPassword ? (
                                  <ViewOffIcon />
                                ) : (
                                  <ViewIcon />
                                )
                              }
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            />
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>
                          {form.errors.confirmPassword}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button
                    type="submit"
                    colorScheme="green"
                    size="lg"
                    width="full"
                    mt={6}
                    isLoading={isLoading}
                    loadingText="Creating account..."
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                    _active={{
                      transform: 'translateY(0)',
                    }}
                  >
                    Create Account
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
      <AccountFooter />
    </>
  );
};

export default Signup;
