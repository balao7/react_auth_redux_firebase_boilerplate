import React from 'react';

import styles from './Navbar.module.css';
import NavigationItem from '../navigationItem/NavigationItem';

const Navbar = () => (
  <header className={styles.Header}>
    <div className={styles.Wrapper}>
      <div className={styles.NavLeft}>Your logo here</div>
      <nav className={styles.NavRight}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/protected">Protected Page</NavigationItem>
        <NavigationItem link="/login">Login</NavigationItem>
        <NavigationItem link="/signup">Register</NavigationItem>
      </nav>
    </div>
  </header>
);

export default Navbar;
