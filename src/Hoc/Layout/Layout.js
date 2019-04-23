import React from 'react';

import styles from './Layout.module.css';
import Navbar from '../../Components/Navigation/Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.MainContent}>{children}</main>
    </>
  );
};

export default Layout;
