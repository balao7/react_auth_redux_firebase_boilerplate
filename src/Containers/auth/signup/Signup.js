import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import styles from './Signup.module.css';
import Input from '../../../components/UI/forms/input/Input';
import Button from '../../../components/UI/button/Button';
import Heading from '../../../components/UI/heading/Heading';
import ErrorMessage from '../../../components/UI/messages/errorMessage/ErrorMessage';

import * as actions from '../../../store/actions';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short.')
    .max(50, 'Too Long.')
    .required('Your name is required.'),
  lastName: Yup.string()
    .min(2, 'Too Short.')
    .max(50, 'Too Long.')
    .required('Your last name is required.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Email is required.'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
    .required('You must re-type your password.'),
});

const SignUp = ({ signUp, error, loading, clear }) => {
  useEffect(() => {
    return () => {
      clear();
    };
  }, [clear]);

  return (
    <div className={styles.FormWrapper}>
      <Heading type="h1">Create an Account</Heading>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          signUp(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form className={styles.Form}>
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              component={Input}
            />

            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              component={Input}
            />

            <Field
              type="email"
              name="email"
              placeholder="Email"
              component={Input}
            />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              component={Input}
            />

            <Field
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              component={Input}
            />

            <Button
              loading={loading}
              type="submit"
              disabled={isSubmitting || !isValid}
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <ErrorMessage show={error}>{error}</ErrorMessage>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
  loading: auth.loading,
});

const mapDispatchToProps = {
  signUp: actions.signUp,
  clear: actions.clear,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
