import React from 'react';
import { connect } from 'react-redux';

import styles from './Layout.module.css';
import Navbar from '../../components/navigation/navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.MainContent}>{children}</main>
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Layout);
