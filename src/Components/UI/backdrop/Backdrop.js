import React from 'react';

import styles from './Backdrop.module.css';

const Backdrop = ({ opened, close, open }) => {
  return (
    <div
      onClick={close}
      className={`${styles.Backdrop} ${opened ? styles.Opened : null}`}
    />
  );
};

export default Backdrop;
