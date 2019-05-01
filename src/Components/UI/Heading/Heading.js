import React from 'react';

import styles from './Heading.module.css';

const Heading = ({ type, children, red }) => {
  let heading;

  switch (type) {
    case 'h1':
      heading = (
        <h1 className={`${styles.Heading} ${styles.H1}`}>{children}</h1>
      );
      break;
    case 'h2':
      heading = (
        <h2 className={`${styles.Heading} ${styles.H2}`}>{children}</h2>
      );
      break;
    case 'h3':
      heading = (
        <h3 className={`${styles.Heading} ${styles.H3}`}>{children}</h3>
      );
      break;
    case 'h4':
      heading = (
        <h4 className={`${styles.Heading} ${styles.H4}`}>{children}</h4>
      );
      break;
    case 'h5':
      heading = (
        <h5 className={`${styles.Heading} ${styles.H5}`}>{children}</h5>
      );
      break;
    default:
      heading = (
        <h1 className={`${styles.Heading} ${styles.H1}`}>{children}</h1>
      );
  }

  return heading;
};

export default Heading;
