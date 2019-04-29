import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './VerifyEmail.module.css';
import Paragraph from '../../../components/UI/paragraph/Paragraph';
import Button from '../../../components/UI/button/Button';
import Heading from '../../../components/UI/heading/Heading';

import * as actions from '../../../store/actions';

const VerifyEmail = ({ sendVerification, verificationEmailError, loading }) => {
  console.log(loading);
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

      <Button onClick={sendVerification}>Send again</Button>
      <div className={`${styles.Loading} ${loading ? styles.Show : null}`}>
        {loading ? 'Sending...' : null}
      </div>
      <div
        className={`${styles.Sent} ${loading === false ? styles.Show : null}`}
      >
        {loading === false ? 'Sent!' : null}
      </div>
      <div
        className={`${styles.ErrorMessage} ${
          verificationEmailError ? styles.Show : null
        }`}
      >
        {verificationEmailError}
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  verificationEmailError: auth.verificationEmailError,
  loading: auth.loadingEmail,
});

const mapDispatchToProps = {
  sendVerification: actions.sendVerificationEmail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmail);
