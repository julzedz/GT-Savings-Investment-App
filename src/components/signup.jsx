/* eslint-disable no-console */
/* eslint-disable no-alert */
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';
import {
  Flex, FormControl, Select, Box, Heading,
  FormLabel, Input, FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import AccountFooter from './accountfooter';
import FormNavbar from './formnavbar';
import building from '../assets/building2.jpg';
import api from '../api';
// import bgsvg from '../assets/ColoredShapes.svg';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Provide a first name').min(3, 'Name must be at least 3 characters'),
  lastName: Yup.string().required('Provide a last name').min(3, 'Name must be at least 3 characters'),
  dob: Yup.date().required('Provide date of birth'),
  citizenship: Yup.string().required('Select a country of citizenship'),
  mobile: Yup.string()
    .matches(
      /^(\+\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,
      'Mobile number must be valid',
    )
    .required('Provide a mobile number'),
  email: Yup.string().email('Invalid email address').required('Provide an email address'),
  city: Yup.string().required('Provide a city'),
  state: Yup.string().required('Provide a state'),
  password: Yup.string()
    .required('Provide a password').matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    ),
  // confirmPassword: Yup
  //   .string()
  //   .required('Please confirm your password')
  //   .when('password', {
  //     is: (password) => (!!(password && password.length > 0)),
  //     then: Yup.string().oneOf([Yup.ref('password')], "Password doesn't match"),
  //   }),
});

const Signup = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(false);

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
          Signup
        </Heading>
      </Box>
      <Flex minH="2xl" flexDir="column" bgColor="#f2f2f2" pb={40}>
        <Flex mt={12} fontFamily="noto" justifyContent="center" w="100%">
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
            onSubmit={(values, actions) => {
              actions.setSubmitting(true); // Show loading state

              const userPayload = {
                first_name: values.firstName,
                last_name: values.lastName,
                date_of_birth: values.dob,
                phone_number: values.mobile,
                email: values.email,
                city: values.city,
                state: values.state,
                password: values.password,
                country: values.citizenship,
              };
              // handle form submission here
              api.post('/users', userPayload)
                .then((response) => {
                  console.log('User created:', response.data);
                  setSuccessMessage(true);
                  setTimeout(() => {
                    navigate('/login'); // Redirect to login page
                  }, 3000); // After 3 seconds
                })
                .catch((error) => {
                  console.log('Error creating user:', error);
                // Handle error (e.g., display error message)
                })
                .finally(() => {
                  actions.setSubmitting(false); // Hide loading state
                });
            }}
          >
            {() => (
              <Form style={{ backgroundColor: '', textAlign: 'center' }}>
                <Flex mb={6} width="100%" px={{ base: 6, sm: 1 }} gap={6} justifyContent="center" alignItems="flex-end">
                  <FormLabel w="35%" m={0} mb={3} fontSize="xs" lineHeight="short">Full name</FormLabel>
                  <Field name="firstName">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                        <FormLabel fontSize="xs" lineHeight="short" htmlFor="firstName">First name</FormLabel>
                        <Input
                          borderColor="black"
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          id="firstName"
                        />
                        <FormErrorMessage fontSize="xs" p={0} m={0}>{form.errors.firstName}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                        <FormLabel fontSize="xs" lineHeight="short" htmlFor="lastName">Last name</FormLabel>
                        <Input
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          id="lastName"
                          borderColor="black"
                        />
                        <FormErrorMessage fontSize="xs" p={0} m={0}>{form.errors.lastName}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex mb={6} width="100%" px={{ base: 6, sm: 1 }} gap={6} justifyContent="center" alignItems="flex-end">
                  <FormLabel w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="dob">Date of birth</FormLabel>
                  <Field name="dob">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.dob && form.touched.dob}>
                        <Input
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          id="dob"
                          type="date"
                          borderColor="black"
                        />
                        <FormErrorMessage>{form.errors.dob}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex mb={6} width="100%" px={{ base: 6, sm: 1 }} gap={6} justifyContent="center" alignItems="flex-end">
                  <FormLabel w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="citizenship">Citizenship</FormLabel>
                  <Field name="citizenship">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.citizenship && form.touched.citizenship}>
                        <Select
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          id="citizenship"
                          placeholder="Select a country"
                          borderColor="black"
                        >
                          <option value="Angola">Angola</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Canada">Canada</option>
                          <option value="Germany">Germany</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Mexico">Mexico</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Norway">Norway</option>
                          <option value="Russia">Russia</option>
                          <option value="Singapore">Singapore</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Thailand">Thailand</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                        </Select>
                        <FormErrorMessage>{form.errors.citizenship}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex mb={6} width="100%" px={{ base: 6, sm: 1 }} gap={6} justifyContent="center" alignItems="flex-end">
                  <FormLabel w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="mobile">Mobile number</FormLabel>
                  <Field name="mobile">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.mobile && form.touched.mobile}>
                        <Input
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          id="mobile"
                          type="tel"
                          borderColor="black"
                        />
                        <FormErrorMessage>{form.errors.mobile}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex mb={6} width="100%" px={{ base: 6, sm: 1 }} gap={6} justifyContent="center" alignItems="flex-end">
                  <FormLabel w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="email">Email</FormLabel>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <Input
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          id="email"
                          type="email"
                          borderColor="black"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex mb={6} width="100%" px={{ base: 6, sm: 1 }} gap={6} justifyContent="center" alignItems="flex-end">
                  <FormLabel w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="city">City</FormLabel>
                  <Field name="city">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.city && form.touched.city}>
                        <Input
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          id="city"
                          type="text"
                          borderColor="black"
                        />
                        <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex mb={6} width="100%" px={{ base: 6, sm: 1 }} gap={6} justifyContent="center" alignItems="flex-end">
                  <FormLabel w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="state">State</FormLabel>
                  <Field name="state">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.state && form.touched.state}>
                        <Input
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          id="state"
                          type="text"
                          borderColor="black"
                        />
                        <FormErrorMessage>{form.errors.state}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex mb={6} width="100%" px={{ base: 6, sm: 1 }} gap={6} justifyContent="center" alignItems="flex-end">
                  <FormLabel w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="password">Password</FormLabel>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.password && form.touched.password}>
                        <Input
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          id="password"
                          type="password"
                          borderColor="black"
                        />
                        <FormErrorMessage fontSize="xs" p={0} m={0}>{form.errors.password}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex mb={6} width="100%" px={{ base: 6, sm: 1 }} gap={6} justifyContent="center" alignItems="flex-end">
                  <FormLabel w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="confirmPassword">Confirm password</FormLabel>
                  <Field name="confirmPassword">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}
                      >
                        <Input
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          id="confirmPassword"
                          type="password"
                          borderColor="black"
                        />
                        <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Button
                  mt={4}
                  colorScheme="green"
                  type="submit"
                  fontFamily="noto"
                  w={{ base: '60%', sm: '80%' }}
                  mx="auto"
                  justifySelf="center"
                  alignSelf="center"
                  textAlign="center"
                  p={6}
                >
                  Submit
                </Button>
                {/* Display success message */}
                {successMessage && (
                <Flex justify="center" align="center" bg="green.500" color="white" p={4} mb={4}>
                  Signup successful! Redirecting to login...
                </Flex>
                )}
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
      <AccountFooter />
    </>
  );
};

export default Signup;
