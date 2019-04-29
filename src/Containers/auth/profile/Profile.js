import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import styles from './Profile.module.css';
import Input from '../../../components/UI/forms/input/Input';
import Button from '../../../components/UI/button/Button';
import Heading from '../../../components/UI/heading/Heading';
import ErrorMessage from '../../../components/UI/messages/errorMessage/ErrorMessage';
import SuccessMessage from '../../../components/UI/messages/successMessage/SuccessMessage';

import * as actions from '../../../store/actions';

const Profilechema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short.')
    .max(50, 'Too Long.')
    .required('Your name is required.'),
  lastName: Yup.string()
    .min(2, 'Too Short.')
    .max(50, 'Too Long.')
    .required('Your last name is required.'),
});

const Profile = ({ error, firebase, updateProfile, loading }) => {
  if (!firebase.profile.isLoaded) return null;
  return (
    <div className={styles.FormWrapper}>
      <Heading type="h1">Edit your Profile</Heading>
      <Formik
        initialValues={{
          firstName: firebase.profile.firstName,
          lastName: firebase.profile.lastName,
        }}
        validationSchema={Profilechema}
        onSubmit={(values, { setSubmitting }) => {
          updateProfile(values);
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

            <Button
              loading={loading}
              type="submit"
              disabled={isSubmitting || !isValid}
            >
              Edit
            </Button>
          </Form>
        )}
      </Formik>
      <SuccessMessage show={!loading && error === false}>
        Updated
      </SuccessMessage>
      <ErrorMessage show={error}>{error}</ErrorMessage>
    </div>
  );
};

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  error: auth.profile.error,
  loading: auth.profile.loading,
});

const mapDispatchToProps = { updateProfile: actions.updateProfile };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
