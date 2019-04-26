import React from 'react';
import { connect } from 'react-redux';

import styles from './Layout.module.css';
import Navbar from '../../components/navigation/navbar/Navbar';

const Layout = ({ auth, profile, children }) => {
  return (
    <>
      <Navbar auth={auth} profile={profile} />
      <main className={styles.MainContent}>{children}</main>
    </>
  );
};

const mapStateToProps = ({ firebase }) => ({
  auth: firebase.auth,
  profile: firebase.profile,
});

export default connect(mapStateToProps)(Layout);
