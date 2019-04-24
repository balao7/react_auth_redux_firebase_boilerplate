import React from 'react';

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

export default Layout;
