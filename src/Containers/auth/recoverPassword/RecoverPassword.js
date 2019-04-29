import React from 'react';
import { Formik, Form, Field, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import styles from './Signup.module.css';
import Input from '../../../components/UI/forms/input/Input';
import Button from '../../../components/UI/button/Button';
import Heading from '../../../components/UI/heading/Heading';
import ErrorMessage from '../../../components/UI/messages/errorMessage/ErrorMessage';
import SuccessMessage from '../../../components/UI/messages/successMessage/SuccessMessage';

import * as actions from '../../../store/actions';

const ResetPasswordSchema = Yup.object().shape({
  email: yupToFormErrors
    .toString()
    .email('Invalid email.')
    .required('Email is required.'),
});

const RecoverPassword = ({ resetPassword, error, loading }) => {
  return (
    <div className={styles.FormWrapper}>
      <Heading type="h1">Recover your password</Heading>
      <Formik
        validationSchema={ResetPasswordSchema}
        onSubmit={(values, { setSubmitting }) => {
          resetPassword(values.email);
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
      <SuccessMessage show={loading === false ? true : false}>
        Check your email to recover your password.
      </SuccessMessage>
      <ErrorMessage show={}>
        {verificationEmailError}
      </ErrorMessage>
    </div>
  );
};

const mapStateToProps = ({auth}) => ({
  error: auth.passwordRecovery.error,
  loading: auth.passwordRecovery.loading,
});

const mapDispatchToProps = {
  resetPassword: actions.resetPassword,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecoverPassword);
