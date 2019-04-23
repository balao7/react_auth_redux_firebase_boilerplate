import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.css';

const NavigationItem = ({ link, children }) => (
  <NavLink
    exact
    activeClassName={styles.Active}
    className={styles.NavigationItem}
    to={link}
  >
    {children}
  </NavLink>
);

export default NavigationItem;
