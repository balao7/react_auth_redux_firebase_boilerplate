import React from 'react';

import styles from './Navbar.module.css';
import SignedLinks from '../navigationItems/SignedLinks';
import NotSignedLinks from '../navigationItems/NotSignedLinks';

const Navbar = ({ auth, profile }) => {
  return (
    <header className={styles.Header}>
      <div className={styles.Wrapper}>
        <div className={styles.NavLeft}>Your logo here</div>
        <nav className={styles.NavRight}>
          <ul
            className={`${styles.NavUl} ${
              profile.isLoaded ? styles.NavUlShow : null
            }`}
          >
            {auth.uid ? (
              <SignedLinks auth={auth} profile={profile} />
            ) : (
              <NotSignedLinks />
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
