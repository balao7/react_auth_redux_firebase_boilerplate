import React from 'react';
import { connect } from 'react-redux';

import styles from './Layout.module.css';
import Navbar from '../../components/navigation/navbar/Navbar';

const Layout = ({ auth, children }) => {
  return (
    <>
      <Navbar auth={auth} />
      <main className={styles.MainContent}>{children}</main>
    </>
  );
};

const mapStateToProps = ({ firebase }) => ({
  auth: firebase.auth,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
