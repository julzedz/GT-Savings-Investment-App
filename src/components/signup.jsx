/* eslint-disable no-alert */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  Image, Text, Flex, FormControl,
  FormLabel, Input, FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import logo from '../assets/bank-leaf.png';
import AccountFooter from './accountfooter';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Provide a first name'),
  lastName: Yup.string().required('Provide a first name'),
  middleName: Yup.string(),
  ssn: Yup.number().typeError('SSN must be a number').required('Provide a Social Security Number').test('len', 'Must be exactly 9 digits', (val) => val.toString().length === 9),
  dob: Yup.date().required('Provide date of birth'),
  citizenship: Yup.string().required('Select a country of citizenship'),
  mobile: Yup.number().typeError('Mobile number must be a number').required('Provide a mobile number'),
  email: Yup.string().email('Invalid email address').required('Provide an email address'),
  address: Yup.string().required('Provide an address'),
  city: Yup.string().required('Provide a city'),
  state: Yup.string().required('Provide a state'),
});

const Signup = () => (
  <>
    <Flex h="2xl" mt={16} flexDir="column" bgColor="#f2f2f2">
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
      <Flex fontFamily="noto">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            middleName: '',
            ssn: '',
            dob: '',
            citizenship: '',
            mobile: '',
            email: '',
            address: '',
            city: '',
            state: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            alert(`First Name: ${values.firstName}`);
            actions.setSubmitting(false);
          // handle form submission here
          }}
        >
          {(props) => (
            <Form>
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
              <Field name="ssn">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.ssn && form.touched.ssn}>
                    <FormLabel htmlFor="ssn">Social Security number</FormLabel>
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      id="ssn"
                      type="text"
                      maxLength={9}
                    />
                    <FormErrorMessage>{form.errors.ssn}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="dob">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.dob && form.touched.dob}>
                    <FormLabel htmlFor="dob">Date of birth</FormLabel>
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
