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
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  middleName: Yup.string(),
  ssn: Yup.string().required('Required'),
  dob: Yup.date().required('Required'),
  citizenship: Yup.string().required('Required'),
  mobile: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
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
          setTimeout(() => {
            alert(JSON.stringify(values, null, 1));
            actions.setSubmitting(false);
          }, 1000);
          // handle form submission here
        }}
      >
        {(props) => (
          <Form>
            <Field name="firstName">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
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
            {/* Repeat the above Field component for each field in the form */}
            <Button
              mt={4}
              colorScheme="green"
              isLoading={props.isSubmitting}
              disabled={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Flex>
    <AccountFooter />
  </>
);

Signup.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};

export default Signup;
