import React from 'react';

import styles from './Navbar.module.css';
import NavigationItem from '../navigationItem/NavigationItem';

const Navbar = ({ auth }) => {
  // If logged in show different links
  let links;
  if (auth.uid) {
    links = (
      <>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/protected">Protected Page</NavigationItem>
        <NavigationItem link="/logout">Logout</NavigationItem>
      </>
    );
  } else {
    links = (
      <>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/login">Login</NavigationItem>
        <NavigationItem link="/signup">Register</NavigationItem>
      </>
    );
  }

  return (
    <header className={styles.Header}>
      <div className={styles.Wrapper}>
        <div className={styles.NavLeft}>Your logo here</div>
        <nav className={styles.NavRight}>{links}</nav>
      </div>
    </header>
  );
};

export default Navbar;
