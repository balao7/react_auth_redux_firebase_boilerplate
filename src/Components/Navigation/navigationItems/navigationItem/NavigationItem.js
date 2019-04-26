import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.css';

const NavigationItem = ({ link, children }) => (
  <li className={styles.NavLi}>
    <NavLink
      exact
      activeClassName={styles.Active}
      className={styles.NavigationItem}
      to={link}
    >
      {children}
    </NavLink>
  </li>
);

export default NavigationItem;
