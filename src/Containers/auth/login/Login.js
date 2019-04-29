import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import styles from './Login.module.css';
import Input from '../../../components/UI/forms/input/Input';
import Button from '../../../components/UI/button/Button';
import Heading from '../../../components/UI/heading/Heading';
import ErrorMessage from '../../../components/UI/messages/errorMessage/ErrorMessage';

import * as actions from '../../../store/actions';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('Email is required.'),
  password: Yup.string().required('No password provided.'),
});

const Login = ({ signIn, authError, loading, clearError }) => {
  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  return (
    <div className={styles.FormWrapper}>
      <Heading type="h1">Sign in </Heading>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          signIn(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form className={styles.Form}>
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
            <Button
              loading={loading}
              type="submit"
              disabled={isSubmitting || !isValid}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <ErrorMessage show={authError}>{authError}</ErrorMessage>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  authError: auth.authError,
  loading: auth.loadingAuth,
});

const mapDispatchToProps = {
  signIn: actions.signIn,
  clearError: actions.clearError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
