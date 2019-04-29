import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './VerifyEmail.module.css';
import Paragraph from '../../../components/UI/paragraph/Paragraph';
import Button from '../../../components/UI/button/Button';
import Heading from '../../../components/UI/heading/Heading';
import ErrorMessage from '../../../components/UI/messages/errorMessage/ErrorMessage';
import SuccessMessage from '../../../components/UI/messages/successMessage/SuccessMessage';

import * as actions from '../../../store/actions';

const VerifyEmail = ({ sendVerification, error, loading }) => {
  return (
    <div className={styles.Wrapper}>
      <Heading type="h3">Account not verified</Heading>
      <div className={styles.textWrapper}>
        <Paragraph>Your email is not verified.</Paragraph>
        <Paragraph>
          Check your email, you should have a verification email.
        </Paragraph>
      </div>
      <Heading type="h5">Don't see it?</Heading>

      <Button loading={loading} onClick={sendVerification}>
        Send again
      </Button>
      <SuccessMessage show={!loading && error === false}>
        Verification email sent.
      </SuccessMessage>
      <ErrorMessage show={error}>{error}</ErrorMessage>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  error: auth.verificationEmail.error,
  loading: auth.verificationEmail.loading,
});

const mapDispatchToProps = {
  sendVerification: actions.sendVerificationEmail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmail);
