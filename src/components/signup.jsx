/* eslint-disable no-alert */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  Image, Text, Flex, FormControl, Select,
  FormLabel, Input, FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import logo from '../assets/bank-leaf.png';
import AccountFooter from './accountfooter';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Provide a first name').min(3, 'Name must be at least 3 characters'),
  lastName: Yup.string().required('Provide a last name').min(3, 'Name must be at least 3 characters'),
  ssn: Yup.number().typeError('SSN must be a number').required('Provide a Social Security Number').test('len', 'Must be exactly 9 digits', (val) => val.toString().length === 9),
  dob: Yup.date().required('Provide date of birth'),
  citizenship: Yup.string().required('Select a country of citizenship'),
  mobile: Yup.number().typeError('Mobile number must be a number').required('Provide a mobile number').min(10, 'Provide a mobile number'),
  email: Yup.string().email('Invalid email address').required('Provide an email address'),
  city: Yup.string().required('Provide a city'),
  state: Yup.string().required('Provide a state'),
  password: Yup.string().required('Provide a password').matches(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    'Password must contain at least 8 characters, one uppercase, one number and one special case character',
  ),
  confirmPassword: Yup
    .string()
    .required('Please confirm your password')
    .when('password', {
      is: (password) => (!!(password && password.length > 0)),
      then: Yup.string().oneOf([Yup.ref('password')], "Password doesn't match"),
    }),
});

const Signup = () => (
  <>
    <Flex minH="2xl" mt={16} flexDir="column" bgColor="#f2f2f2" pb={40}>
      <Flex
        my={5}
        align="center"
        justifyContent="center"
        className="logo-group"
        href="/"
        mt={12}
      >

        <Image src={logo} alt="Logo" boxSize="30px" />
        <div>
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="gunmetal"
            fontFamily="Atomic Age"
            align="center"
            my={0}
          >
            GT Savings Bank
            <Text
              color="applegreen"
              display="inline"
            >
              .
            </Text>
          </Text>
        </div>
      </Flex>
      <Flex fontFamily="noto" justifyContent="center" w="100%">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            ssn: '',
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
            alert(`First Name: ${values.firstName}`);
            actions.setSubmitting(false);
          // handle form submission here
          }}
        >
          {(props) => (
            <Form style={{ backgroundColor: 'blue' }}>
              <Flex mb={6} width="100%" gap={6} justifyContent="center" alignItems="flex-end">
                <FormLabel w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" bgColor="red">Full name</FormLabel>
                <Field name="firstName">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                      <FormLabel htmlFor="firstName">First name</FormLabel>
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        id="firstName"
                      />
                      <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="lastName">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                      <FormLabel htmlFor="lastName">Last name</FormLabel>
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        id="lastName"
                      />
                      <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Flex>
              <Flex mb={6} width="100%" gap={6} justifyContent="center" alignItems="flex-end">
                <FormLabel bgColor="red" w="36%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="ssn">Social Security number</FormLabel>
                <Field name="ssn">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.ssn && form.touched.ssn}>
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        id="ssn"
                        type="text"
                        maxLength={9}
                        w="50%"
                      />
                      <FormErrorMessage>{form.errors.ssn}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Flex>
              <Flex mb={6} width="100%" gap={6} justifyContent="center" alignItems="flex-end">
                <FormLabel bgColor="red" w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="dob">Date of birth</FormLabel>
                <Field name="dob">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.dob && form.touched.dob}>
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        id="dob"
                        type="date"
                      />
                      <FormErrorMessage>{form.errors.dob}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Flex>
              <Flex mb={6} width="100%" gap={6} justifyContent="center" alignItems="flex-end">
                <FormLabel bgColor="red" w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="citizenship">Citizenship</FormLabel>
                <Field name="citizenship">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.citizenship && form.touched.citizenship}>
                      <Select
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        id="citizenship"
                        placeholder="Select a country"
                      >
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Canada">Canada</option>
                        <option value="Germany">Germany</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Mexico">Mexico</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Norway">Norway</option>
                        <option value="Singapore">Singapore</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                      </Select>
                      <FormErrorMessage>{form.errors.citizenship}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Flex>
              <Flex mb={6} width="100%" gap={6} justifyContent="center" alignItems="flex-end">
                <FormLabel bgColor="red" w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="mobile">Mobile number</FormLabel>
                <Field name="mobile">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.mobile && form.touched.mobile}>
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        id="mobile"
                        type="tel"
                      />
                      <FormErrorMessage>{form.errors.mobile}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Flex>
              <Flex mb={6} width="100%" gap={6} justifyContent="center" alignItems="flex-end">
                <FormLabel bgColor="red" w="35%" m={0} mb={3} fontSize="xs" lineHeight="short" htmlFor="email">Email</FormLabel>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        id="email"
                        type="email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Flex>
              <Field name="city">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.city && form.touched.city}>
                    <FormLabel htmlFor="city">City</FormLabel>
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      id="city"
                      type="text"
                    />
                    <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="state">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.state && form.touched.state}>
                    <FormLabel htmlFor="state">State</FormLabel>
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      id="state"
                      type="text"
                    />
                    <FormErrorMessage>{form.errors.state}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      id="password"
                      type="password"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="confirmPassword">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}
                  >
                    <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      id="confirmPassword"
                      type="password"
                    />
                    <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              {/* Repeat the above Field component for each field in the form */}
              <Button
                mt={4}
                colorScheme="green"
                isLoading={props.isSubmitting}
              // disabled={props.isSubmitting}
                type="submit"
                fontFamily="noto"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
    <AccountFooter />
  </>
);

Signup.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};

export default Signup;
